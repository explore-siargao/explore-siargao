import { prisma } from '@/common/helpers/prismaClient'

export const paymentMethod = async () => {
  const getUsers = await prisma.user.findMany({
    where: {
      deletedAt: null,
    },
  })
  const createPaymentMethod = await prisma.paymentMethod.createMany({
    data: [
      {
        userId: getUsers[0]?.id || 0,
        cardInfo: "U2FsdGVkX1/VKPIbFKcWCLiktNsq9BMAUVaMQgfqzAMXMy/WJLjiDt31jVy0ZagnNOLfXNQmBYqqPFufLNYjHDvmipNWhflO85QLl+eCpg75UAE1HZDVyOekdzARYdMr64rT8buFnq6xXsLnwxSVV9bmYfOXlMg4CDMAh5etfpk=", // change this
        isDefault: true,
      },
      {
        userId: getUsers[1]?.id || 0,
        cardInfo: "U2FsdGVkX1/VKPIbFKcWCLiktNsq9BMAUVaMQgfqzAMXMy/WJLjiDt31jVy0ZagnNOLfXNQmBYqqPFufLNYjHDvmipNWhflO85QLl+eCpg75UAE1HZDVyOekdzARYdMr64rT8buFnq6xXsLnwxSVV9bmYfOXlMg4CDMAh5etfpk=", // change this
        isDefault: false,
      },
      {
        userId: getUsers[2]?.id || 0,
        cardInfo: "U2FsdGVkX1/VKPIbFKcWCLiktNsq9BMAUVaMQgfqzAMXMy/WJLjiDt31jVy0ZagnNOLfXNQmBYqqPFufLNYjHDvmipNWhflO85QLl+eCpg75UAE1HZDVyOekdzARYdMr64rT8buFnq6xXsLnwxSVV9bmYfOXlMg4CDMAh5etfpk=", // change this
        isDefault: false,
      },
      {
        userId: getUsers[3]?.id || 0,
        cardInfo: "U2FsdGVkX1/VKPIbFKcWCLiktNsq9BMAUVaMQgfqzAMXMy/WJLjiDt31jVy0ZagnNOLfXNQmBYqqPFufLNYjHDvmipNWhflO85QLl+eCpg75UAE1HZDVyOekdzARYdMr64rT8buFnq6xXsLnwxSVV9bmYfOXlMg4CDMAh5etfpk=", // change this
        isDefault: true,
      },
      {
        userId: getUsers[4]?.id || 0,
        cardInfo: "U2FsdGVkX1/VKPIbFKcWCLiktNsq9BMAUVaMQgfqzAMXMy/WJLjiDt31jVy0ZagnNOLfXNQmBYqqPFufLNYjHDvmipNWhflO85QLl+eCpg75UAE1HZDVyOekdzARYdMr64rT8buFnq6xXsLnwxSVV9bmYfOXlMg4CDMAh5etfpk=", // change this
        isDefault: true,
      },
    ],
  })
  console.log({ createPaymentMethod })
}
