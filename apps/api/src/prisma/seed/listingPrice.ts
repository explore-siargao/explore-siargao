import { prisma } from '@/common/helpers/prismaClient'

export const listingPrice = async () => {
  const createListingPrices = await prisma.listingPrice.createMany({
    data: [
      {
        fee: 2000,
        cleaningFee: 100,
        serviceFee: 100,
        checkIn: '2024-01-29T03:01:27.936Z',
        checkOut: '2024-01-29T03:01:27.936Z',
        isNight: false,
        countGuest: 5,
      },
      {
        fee: 5000,
        cleaningFee: 200,
        serviceFee: 100,
        checkIn: '2024-01-29T03:01:27.936Z',
        checkOut: '2024-01-29T03:01:27.936Z',
        isNight: false,
        countGuest: 5,
      },
      {
        fee: 1000,
        cleaningFee: 50,
        serviceFee: 50,
        checkIn: '2024-01-29T03:01:27.936Z',
        checkOut: '2024-01-29T03:01:27.936Z',
        isNight: true,
        countGuest: 10,
      },
      {
        fee: 4000,
        cleaningFee: 250,
        serviceFee: 200,
        checkIn: '2024-01-29T03:01:27.936Z',
        checkOut: '2024-01-29T03:01:27.936Z',
        isNight: true,
        countGuest: 7,
      },
      {
        fee: 1500,
        cleaningFee: 100,
        serviceFee: 100,
        checkIn: '2024-01-29T03:01:27.936Z',
        checkOut: '2024-01-29T03:01:27.936Z',
        isNight: false,
        countGuest: 5,
      },
    ],
  })
  console.log({ createListingPrices })
}
