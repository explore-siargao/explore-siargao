import { ResponseService } from '@/common/service/response'
import { Request, Response } from 'express'

let toReviews = [
  {
    id: 1,
    fromDate: '2024-03-05 02:53:30.238',
    toDate: '2024-03-10 02:53:30.238',
    listingId: 1,
    listing: {
      title: 'Open World',
      image: '1.jpg',
    },
    createdAt: '2024-03-05 02:54:13.658',
  },
  {
    id: 2,
    fromDate: '2024-02-06 04:15:20.123',
    toDate: '2024-02-11 04:15:20.123',
    listingId: 2,
    listing: {
      title: 'Mountain Retreat',
      image: '2.jpg',
    },
    createdAt: '2024-03-06 04:16:10.987',
  },
  {
    id: 3,
    fromDate: '2024-02-07 08:45:45.567',
    toDate: '2024-02-12 08:45:45.567',
    listingId: 3,
    listing: {
      title: 'Beach House Paradise',
      image: '3.jpg',
    },
    createdAt: '2024-03-07 08:46:30.123',
  },
  {
    id: 4,
    fromDate: '2024-03-08 12:30:10.987',
    toDate: '2024-03-13 12:30:10.987',
    listingId: 4,
    listing: {
      title: 'City Apartment',
      image: '4.jpg',
    },
    createdAt: '2024-03-08 12:31:05.321',
  },
  {
    id: 5,
    fromDate: '2024-02-09 15:20:35.456',
    toDate: '2024-02-14 15:20:35.456',
    listingId: 5,
    listing: {
      title: 'Countryside Cottage',
      image: '5.jpg',
    },
    createdAt: '2024-03-09 15:21:20.765',
  },
  {
    id: 6,
    fromDate: '2024-02-10 18:10:55.876',
    toDate: '2024-03-12 18:10:55.876',
    listingId: 6,
    listing: {
      title: 'Luxury Villa',
      image: '1.jpg',
    },
    createdAt: '2024-03-10 18:11:40.234',
  },
  {
    id: 7,
    fromDate: '2024-02-11 22:05:30.321',
    toDate: '2024-02-16 22:05:30.321',
    listingId: 7,
    listing: {
      title: 'Riverside Cabin',
      image: '2.jpg',
    },
    createdAt: '2024-03-11 22:06:15.789',
  },
  {
    id: 8,
    fromDate: '2024-02-16 01:40:45.678',
    toDate: '2024-03-02 01:40:45.678',
    listingId: 8,
    listing: {
      title: 'Historic Mansion',
      image: '2.jpg',
    },
    createdAt: '2024-03-12 01:41:30.987',
  },
  {
    id: 9,
    fromDate: '2024-03-01 05:25:20.987',
    toDate: '2024-03-04 05:25:20.987',
    listingId: 9,
    listing: {
      title: 'Ski Chalet',
      image: '4.jpg',
    },
    createdAt: '2024-03-13 05:26:10.654',
  },
  {
    id: 10,
    fromDate: '2024-03-01 09:10:35.234',
    toDate: '2024-03-04 09:10:35.234',
    listingId: 10,
    listing: {
      title: 'Treehouse Hideaway',
      image: '5.jpg',
    },
    createdAt: '2024-03-14 09:11:20.543',
  },
]
const response = new ResponseService()
export const getBookingsToreviews = async (req: Request, res: Response) => {
  const dateNow = new Date()
  const toReviewsData = toReviews.filter((item) => {
    const today = new Date(item.toDate)
    return dateNow > today
  })

  res.json(
    response.success({
      items: toReviewsData,
      allItemCount: toReviewsData.length,
    })
  )
}

export const getToReviewById = async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const getOne = toReviews.find((item) => item.id === id)
  res.json(response.success({ item: getOne, allItemCount: 1 }))
}
