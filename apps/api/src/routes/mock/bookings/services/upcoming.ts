import { ResponseService } from '@/common/service/response'
import { Request, Response } from 'express'
import { earnings } from './jsons/earnings'

const response = new ResponseService()

export const getUpcomingEarnings = async (req: Request, res: Response) => {
  const now = new Date()
  const utcNow = new Date(now.toISOString().split('T')[0] as string)

  const earningsByDate: { [key: string]: number } = {}

  earnings.forEach((earning) => {
    const earningDate = new Date(earning.date)
    earningDate.setDate(earningDate.getDate() + 1)
    const utcEarningDate = new Date(
      earningDate.toISOString().split('T')[0] as string
    )
    if (
      earningDate.getFullYear() > utcNow.getFullYear() ||
      (earningDate.getFullYear() === utcNow.getFullYear() &&
        earningDate.getMonth() > utcNow.getMonth())
    ) {
      const dateString = utcEarningDate.toISOString().split('T')[0]
      if ((dateString as string) in earningsByDate) {
        earningsByDate[dateString as string] += Number(earning.earning)
      } else {
        earningsByDate[dateString as string] = Number(earning.earning)
      }
    }
  })

  const filterThisMonthEarnings = Object.keys(earningsByDate).map((date) => ({
    date: date + ' 00:00:00',
    earning: earningsByDate[date],
  }))

  filterThisMonthEarnings.sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()
    return dateA - dateB
  })

  const totalEarnings = filterThisMonthEarnings.reduce(
    (sum, item) => sum + (item?.earning as number),
    0
  )
  const adjustment = 1000
  const tax = 1000
  const service = 10000

  res.json(
    response.success({
      item: {
        months: filterThisMonthEarnings,
        summary: {
          gross: parseFloat(totalEarnings.toFixed(2)),
          adjustments: adjustment,
          service: service,
          tax: tax,
          totalEarnings:
            parseFloat(totalEarnings.toFixed(2)) + tax + adjustment + service,
        },
      },
    })
  )
}
