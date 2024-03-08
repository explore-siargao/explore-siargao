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

  const createListings = await prisma.listing.createMany({
    data: [
      {
        hostedById: getUsers[0]?.id || 0,
        listingPriceId: getListingPrices[0]?.id || 0,
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
        category: 'Accomodation',
        address: 'Santa Maria, Laguna',
        latitude: "9.968644911072126",
        longitude: "126.0799420362242",
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
        category: 'Accomodation',
        address: 'Santa Maria, Laguna',
        latitude: "9.784645441809563",
        longitude: "126.04560975969396",
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
        category: 'Accomodation',
        address: 'Siniloan, Laguna',
        latitude: "9.919949195329322",
        longitude: "125.993424699368",
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
        category: 'Accomodation',
        address: 'Paete, Laguna',
        latitude: "10.046407690620544",
        longitude: "126.05865602477546",
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
        category: 'Accomodation',
        address: 'Santa Maria, Laguna',
        latitude: "9.91047974222796",
        longitude: "125.94673280328686",
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
