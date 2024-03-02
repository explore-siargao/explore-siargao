import { prisma } from '@/common/helpers/prismaClient'

export const listingPrice = async () => {
  const createListingPrices = await prisma.listingPrice.createMany({
    data: [
      {
        fee: 2000,
        cleaningFee: 100,
        serviceFee: 100,
        guestLimitCount: 5,
      },
      {
        fee: 5000,
        cleaningFee: 200,
        serviceFee: 100,
        guestLimitCount: 5,
      },
      {
        fee: 1000,
        cleaningFee: 50,
        serviceFee: 50,
        guestLimitCount: 5,
      },
      {
        fee: 4000,
        cleaningFee: 250,
        serviceFee: 200,
        guestLimitCount: 5,
      },
      {
        fee: 1500,
        cleaningFee: 100,
        serviceFee: 100,
        guestLimitCount: 5,
      },
    ],
  })
  console.log({ createListingPrices })
}
