import { ResponseService } from '@/common/service/response'
import { Request, Response } from 'express'

const earnings = [
  {
    id: 1,
    earning: 22000.25,
    date: '2024-01-01 00:09:08.728',
  },
  {
    id: 2,
    earning: 11000.0,
    date: '2024-02-22 00:09:08.728',
  },
]

const thisMonthEarnings = [
  {
    id: 1,
    earning: 0,
    date: '2024-03-01 00:09:08.728',
  },
  {
    id: 2,
    earning: 0,
    date: '2024-03-02 00:09:08.728',
  },
  {
    id: 3,
    earning: 6700.0,
    date: '2024-03-03 00:09:08.728',
  },
  {
    id: 4,
    earning: 12500.0,
    date: '2024-03-04 00:09:08.728',
  },
  {
    id: 5,
    earning: 0,
    date: '2024-03-05 00:09:08.728',
  },
  {
    id: 6,
    earning: 0,
    date: '2024-03-06 00:09:08.728',
  },
  {
    id: 7,
    earning: 2200.0,
    date: '2024-03-07 00:09:08.728',
  },
  {
    id: 8,
    earning: 2200.0,
    date: '2024-03-08 00:09:08.728',
  },
  {
    id: 9,
    earning: 0,
    date: '2024-03-09 00:09:08.728',
  },
  {
    id: 10,
    earning: 2200.0,
    date: '2024-03-10 00:09:08.728',
  },
  {
    id: 11,
    earning: 22000.25,
    date: '2024-03-11 00:09:08.728',
  },
  {
    id: 12,
    earning: 11000.0,
    date: '2024-03-12 00:09:08.728',
  },
]

const upcomingEarnings = [
  {
    id: 1,
    earning: 0,
    date: '2024-04-01 00:09:08.728',
  },
  {
    id: 2,
    earning: 0,
    date: '2024-05-02 00:09:08.728',
  },
  {
    id: 3,
    earning: 6700.0,
    date: '2024-06-03 00:09:08.728',
  },
  {
    id: 4,
    earning: 12500.0,
    date: '2024-07-04 00:09:08.728',
  },
  {
    id: 5,
    earning: 0,
    date: '2024-08-05 00:09:08.728',
  },
]

const response = new ResponseService()
export const getThisMonthEarnings = async (req: Request, res: Response) => {
  const totalEarnings = thisMonthEarnings.reduce(
    (sum, item) => sum + item.earning,
    0
  )
  res.json(
    response.success({
      item: {
        amount: thisMonthEarnings,
        yearToDateSummary: {
          gross: 19000,
          adjustment: 1000,
          serviceFee: 1000,
          tax: 1000,
        },

        earningsCount: thisMonthEarnings.length,
        total: parseFloat(totalEarnings.toFixed(2)),
      },
    })
  )
}

export const getUpcomingEarnings = async (req: Request, res: Response) => {
  const totalEarnings = upcomingEarnings.reduce(
    (sum, item) => sum + item.earning,
    0
  )

  res.json(
    response.success({
      item: {
        amount: upcomingEarnings,
        yearToDateSummary: {
          gross: 19000,
          adjustment: 1000,
          serviceFee: 1000,
          tax: 1000,
        },
        earningsCount: upcomingEarnings.length,
        total: parseFloat(totalEarnings.toFixed(2)),
      },
    })
  )
}

export const getPaidEarnings = async (req: Request, res: Response) => {
  const dateNow = new Date()
  const filterPaidEarnings = earnings.filter((earning) => {
    const earningDate = new Date(earning.date)
    return (
      earningDate.getMonth() < dateNow.getMonth() &&
      earningDate.getFullYear() <= dateNow.getFullYear()
    )
  })

  const totalEarnings = filterPaidEarnings.reduce(
    (sum, item) => sum + item.earning,
    0
  )

  res.json(
    response.success({
      item: {
        amount: filterPaidEarnings,
        yearToDateSummary: {
          gross: 19000,
          adjustment: 1000,
          serviceFee: 1000,
          tax: 1000,
        },
        earningsCount: filterPaidEarnings.length,
        total: parseFloat(totalEarnings.toFixed(2)),
      },
    })
  )
}
