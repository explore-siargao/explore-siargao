import { prisma } from '@/common/helpers/prismaClient'

export const listing = async () => {
  const getListingPrices = await prisma.listingPrice.findMany({
    where: {
      deletedAt: null,
    },
  })

  const getUsers = await prisma.user.findMany({
    where: {
      deletedAt: null,
    },
  })

  const getBasicAboutPlace = await prisma.basicAboutPlace.findMany({
    where: {
      deletedAt: null,
    },
  })

  const getListingDescription = await prisma.listingDescription.findMany({
    where: {
      deletedAt: null,
    },
  })

  const createListings = await prisma.listing.createMany({
    data: [
      {
        hostedById: getUsers[0]?.id || 0,
        listingPriceId: getListingPrices[0]?.id || 0,
        basicAboutPlaceId: getBasicAboutPlace[0]?.id || 0,
        descriptionId: getListingDescription[0]?.id || 0,
        images: JSON.stringify([
          {
            fileKey: '1.jpg',
            alt: 'image',
          },
          {
            fileKey: '2.jpg',
            alt: 'image',
          },
          {
            fileKey: '3.jpg',
            alt: 'image',
          },
          {
            fileKey: '4.jpg',
            alt: 'image',
          },
          {
            fileKey: '5.jpg',
            alt: 'image',
          },
        ]),
        title: 'Test',
        category: 'Accommodation',
        address: 'Santa Maria, Laguna',
        latitude: 0.5,
        longitude: 0.5,
        whereYoullBe: JSON.stringify({
          description: 'Long description',
          workAround: 'Work around information',
        }),
        whereYoullSleep: JSON.stringify({
          kingBed: {
            count: 1,
            size: 'Large',
            icon: 'bed',
          },
        }),
      },
      {
        hostedById: getUsers[1]?.id || 0,
        listingPriceId: getListingPrices[1]?.id || 0,
        basicAboutPlaceId: getBasicAboutPlace[1]?.id || 0,
        descriptionId: getListingDescription[1]?.id || 0,
        images: JSON.stringify([
          {
            fileKey: '5.jpg',
            alt: 'image',
          },
          {
            fileKey: '4.jpg',
            alt: 'image',
          },
          {
            fileKey: '3.jpg',
            alt: 'image',
          },
          {
            fileKey: '2.jpg',
            alt: 'image',
          },
          {
            fileKey: '1.jpg',
            alt: 'image',
          },
        ]),
        title: 'hello World',
        category: 'Accommodation',
        address: 'Santa Maria, Laguna',
        latitude: 6.5,
        longitude: 0.5,
        whereYoullBe: JSON.stringify({
          description: 'Long description',
          workAround: 'Work around information',
        }),
        whereYoullSleep: JSON.stringify({
          kingBed: {
            count: 1,
            size: 'Large',
            icon: 'bed',
          },
        }),
      },
      {
        hostedById: getUsers[1]?.id || 0,
        listingPriceId: getListingPrices[2]?.id || 0,
        basicAboutPlaceId: getBasicAboutPlace[2]?.id || 0,
        descriptionId: getListingDescription[2]?.id || 0,
        images: JSON.stringify([
          {
            fileKey: '2.jpg',
            alt: 'image',
          },
          {
            fileKey: '3.jpg',
            alt: 'image',
          },
          {
            fileKey: '4.jpg',
            alt: 'image',
          },
          {
            fileKey: '5.jpg',
            alt: 'image',
          },
          {
            fileKey: '1.jpg',
            alt: 'image',
          },
        ]),
        title: 'Amazing World',
        category: 'Accommodation',
        address: 'Siniloan, Laguna',
        latitude: 1.5,
        longitude: 1.5,
        whereYoullBe: JSON.stringify({
          description: 'Long description',
          workAround: 'Work around information',
        }),
        whereYoullSleep: JSON.stringify({
          kingBed: {
            count: 1,
            size: 'Large',
            icon: 'bed',
          },
        }),
      },
      {
        hostedById: getUsers[0]?.id || 0,
        listingPriceId: getListingPrices[3]?.id || 0,
        basicAboutPlaceId: getBasicAboutPlace[3]?.id || 0,
        descriptionId: getListingDescription[3]?.id || 0,
        images: JSON.stringify([
          {
            fileKey: '4.jpg',
            alt: 'image',
          },
          {
            fileKey: '3.jpg',
            alt: 'image',
          },
          {
            fileKey: '2.jpg',
            alt: 'image',
          },
          {
            fileKey: '1.jpg',
            alt: 'image',
          },
          {
            fileKey: '5.jpg',
            alt: 'image',
          },
        ]),
        title: 'Zkript View',
        category: 'Accommodation',
        address: 'Paete, Laguna',
        latitude: 0.5,
        longitude: 22.5,
        whereYoullBe: JSON.stringify({
          description: 'Long description',
          workAround: 'Work around information',
        }),
        whereYoullSleep: JSON.stringify({
          kingBed: {
            count: 1,
            size: 'Large',
            icon: 'bed',
          },
        }),
      },
      {
        hostedById: getUsers[2]?.id || 0,
        listingPriceId: getListingPrices[4]?.id || 0,
        basicAboutPlaceId: getBasicAboutPlace[4]?.id || 0,
        descriptionId: getListingDescription[4]?.id || 0,
        images: JSON.stringify([
          {
            fileKey: '3.jpg',
            alt: 'image',
          },
          {
            fileKey: '1.jpg',
            alt: 'image',
          },
          {
            fileKey: '2.jpg',
            alt: 'image',
          },
          {
            fileKey: '5.jpg',
            alt: 'image',
          },
          {
            fileKey: '4.jpg',
            alt: 'image',
          },
        ]),
        title: 'Test',
        category: 'Accommodation',
        address: 'Santa Maria, Laguna',
        latitude: 0.5,
        longitude: 0.5,
        whereYoullBe: JSON.stringify({
          description: 'Long description',
          workAround: 'Work around information',
        }),
        whereYoullSleep: JSON.stringify({
          kingBed: {
            count: 1,
            size: 'Large',
            icon: 'bed',
          },
        }),
      },
    ],
  })
  console.log({ createListings })
}
