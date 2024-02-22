import { prisma } from '@/common/helpers/prismaClient'

export const basicAboutPlace = async () => {
  const createAboutPlaces = await prisma.basicAboutPlace.createMany({
    data: [
      {
        guests: 10,
        beds: 10,
        bathRooms: 2,
        bedRooms: 3,
      },
      {
        guests: 20,
        beds: 10,
        bathRooms: 4,
        bedRooms: 10,
      },
      {
        guests: 4,
        beds: 2,
        bathRooms: 2,
        bedRooms: 1,
      },
      {
        guests: 15,
        beds: 6,
        bathRooms: 3,
        bedRooms: 2,
      },
      {
        guests: 5,
        beds: 2,
        bathRooms: 1,
        bedRooms: 1,
      },
    ],
  })

  console.log({ createAboutPlaces })
}
