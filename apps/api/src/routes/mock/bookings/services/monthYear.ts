import { ResponseService } from '@/common/service/response'
import { Request, Response } from 'express'
import { earnings } from './jsons/earnings'

const response = new ResponseService()

export const getMonthYearEarnings = async (req: Request, res: Response) => {
  const now = new Date(); 
  const utcNow = new Date(now.toISOString().split('T')[0] as string); 
  

  const getStartOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth(), 1);


  const getEndOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth() + 1, 0);


  const startDate = getStartOfMonth(utcNow);
  const endDate = getEndOfMonth(utcNow);

  const earningsByDate: { [key: string]: number } = {};


  earnings.forEach((earning) => {
    const earningDate = new Date(earning.date);
    const utcEarningDate = new Date(earningDate.toISOString().split('T')[0] as string);


    if (
      utcEarningDate >= startDate && 
      utcEarningDate <= endDate
    ) {
      const dateString = utcEarningDate.toISOString().split('T')[0];
      earningsByDate[dateString as string] = (earningsByDate[dateString as string] || 0) + Number(earning.earning);
    }
  });

 
  const earningsData = [];
  for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
    const dateString = d.toISOString().split('T')[0];
    earningsData.push({
      date: dateString + " 00:00:00",
      earning: earningsByDate[dateString as string] || 0
    });
  }


  const totalEarnings = earningsData.reduce((sum, item) => sum + (item?.earning as number), 0);
  const adjustment = 1000;
  const tax = 1000;
  const service = 10000;
  
  res.json(
    response.success({
      item: {
        days: earningsData,
        summary: {
          gross: parseFloat(totalEarnings.toFixed(2)),
          adjustments: adjustment,
          service: service,
          tax: tax,
          totalEarnings: parseFloat(totalEarnings.toFixed(2)) + tax + adjustment + service,
        },
      },
    })
  );
};
