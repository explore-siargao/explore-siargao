import { prisma } from '@/common/helpers/prismaClient'

export const paymentMethod = async () => {
  const getUsers = await prisma.user.findMany({
    where: {
      deletedAt: null,
    },
  })
  const createPaymentmethod = await prisma.paymentMethod.createMany({
    data: [
      {
        userId: getUsers[0]?.id || 0,
        cardNumber: '5000000000',
        countryRegion: 'PH',
        cvv: 100,
        expirationDate: '02/27',
        zipCode: 4000,
        isDefault: true,
      },
      {
        userId: getUsers[1]?.id || 0,
        cardNumber: '5000000010',
        countryRegion: 'PH',
        cvv: 101,
        expirationDate: '07/29',
        zipCode: 4022,
        isDefault: false,
      },
      {
        userId: getUsers[2]?.id || 0,
        cardNumber: '5000000050',
        countryRegion: 'PH',
        cvv: 106,
        expirationDate: '04/30',
        zipCode: 4016,
        isDefault: false,
      },
      {
        userId: getUsers[3]?.id || 0,
        cardNumber: '5000000009',
        countryRegion: 'PH',
        cvv: 226,
        expirationDate: '12/25',
        zipCode: 4015,
        isDefault: true,
      },
      {
        userId: getUsers[4]?.id || 0,
        cardNumber: '5000000440',
        countryRegion: 'PH',
        cvv: 305,
        expirationDate: '04/29',
        zipCode: 4009,
        isDefault: true,
      },
    ],
  })
  console.log({ createPaymentmethod })
}
