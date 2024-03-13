import { Request, Response } from "express";
import { earnings } from "./jsons/earnings";
import { ResponseService } from "@/common/service/response";

const response = new ResponseService();

export const getMonthYearEarnings = async (req: Request, res: Response) => {
    const monthYear = String(req.params.monthYear);
    const [monthName, year] = monthYear.split("-");

    const monthMap: { [key: string]: number } = {
        "January": 1,
        "February": 2,
        "March": 3,
        "April": 4,
        "May": 5,
        "June": 6,
        "July": 7,
        "August": 8,
        "September": 9,
        "October": 10,
        "November": 11,
        "December": 12
    };

    let month: number | undefined;
    if (monthName !== undefined) {
        month = monthMap[monthName];
    }

    const daysInMonth = new Date(parseInt(year as string), month as number, 0).getDate();

    const allDates = Array.from({ length: daysInMonth}, (_, index) => index + 1);

    const earningsByDate: { [date: string]: number} = {};
    earnings.forEach(item => {
        const itemDate = new Date(item.date);
        const year = itemDate.getFullYear();
        const month = (itemDate.getMonth() + 1).toString().padStart(2, '0');
        const day = itemDate.getDate().toString().padStart(2, '0');
        const dateString = `${year}-${month}-${day}`;
        earningsByDate[dateString as string] = (earningsByDate[dateString as string] || 0) + item.earning;
    });

  
    const consolidatedEarnings = allDates.map(date => {
      const dateString = `${year}-${(month as number).toString().padStart(2, '0')}-${date.toString().padStart(2, '0')}`;
      return {
          date: dateString+" 00:00:00",
          earning: earningsByDate[dateString] || 0 
      };
  });

    let totalEarnings = 0;
    consolidatedEarnings.forEach(item => {
        totalEarnings += item.earning;
    });
    const adjustment = 1000;
    const tax = 1000;
    const service = 10000;

    res.json(
        response.success({
            item: {
                days: consolidatedEarnings,
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
