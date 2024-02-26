import { prisma } from '@/common/helpers/prismaClient'

export const placeOffer = async () => {
  const createPlaceOffers = await prisma.placeOffers.createMany({
    data: [
      {
        icon: 'cloud',
        category: 'Scenic views',
        title: 'City skyline view',
      },
      {
        icon: 'hair',
        category: 'Bathroom',
        title: 'Hair dryer',
      },
      {
        icon: 'shower',
        category: 'Bathroom',
        title: 'Cleaning products',
      },
      {
        icon: 'washing',
        category: 'Bedroom and laundry',
        title: 'Essentials',
      },
      {
        icon: 'bed',
        category: 'Bedroom and laundry',
        title: 'Beds',
      },
      {
        icon: 'books',
        category: 'Entertainment',
        title: 'Books and reading material',
      },
    ],
  })
  console.log({ createPlaceOffers })
}
