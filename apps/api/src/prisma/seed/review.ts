import { prisma } from '@/common/helpers/prismaClient'

export const review = async () => {
  const getUsers = await prisma.user.findMany({
    where: {
      deletedAt: null,
    },
  })

  const getListings = await prisma.listing.findMany({
    where: {
      deletedAt: null,
    },
  })

  const createReviews = await prisma.review.createMany({
    data: [
      {
        accuracyRates: 5,
        checkInRates: 5,
        cleanLinessRates: 5,
        communicationRates: 5,
        locationRates: 5,
        valueRates: 5,
        comment: 'No comment',
        listingId: getListings[0]?.id || 0,
        userId: getUsers[3]?.id || 0,
      },
      {
        accuracyRates: 2,
        checkInRates: 2,
        cleanLinessRates: 2,
        communicationRates: 2,
        locationRates: 2,
        valueRates: 2,
        comment: 'No comment',
        listingId: getListings[1]?.id || 0,
        userId: getUsers[3]?.id || 0,
      },
      {
        accuracyRates: 4,
        checkInRates: 4,
        cleanLinessRates: 4,
        communicationRates: 4,
        locationRates: 4,
        valueRates: 2,
        comment: 'No comment',
        listingId: getListings[1]?.id || 0,
        userId: getUsers[4]?.id || 0,
      },
      {
        accuracyRates: 4,
        checkInRates: 5,
        cleanLinessRates: 3,
        communicationRates: 5,
        locationRates: 3,
        valueRates: 4,
        comment: 'No comment',
        listingId: getListings[0]?.id || 0,
        userId: getUsers[4]?.id || 0,
      },
      {
        accuracyRates: 3,
        checkInRates: 3,
        cleanLinessRates: 4,
        communicationRates: 4,
        locationRates: 2,
        valueRates: 3,
        comment: 'No comment',
        listingId: getListings[2]?.id || 0,
        userId: getUsers[4]?.id || 0,
      },
    ],
  })
  console.log({ createReviews })
}
