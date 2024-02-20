import { prisma } from '@/common/helpers/prismaClient'

export const personalInfo = async () => {
  const getUsers = await prisma.user.findMany({
    where: {
      deletedAt: null,
    },
  })

  const createPersonalInfos = await prisma.personalInfo.createMany({
    data: [
      {
        firstName: 'test',
        lastName: 'account',
        birthDate: '2014-02-19T12:34:56.789Z',
        userId: getUsers[0]?.id ? getUsers[0].id : 0,
        phoneNumber: '09092558726',
        country: 'PH',
        currency: 'PHP',
        language: 'English',
        confirm: JSON.stringify({
          identity: true,
          emailAddress: true,
          phoneNumber: true,
        }),
      },
      {
        firstName: 'Ramil',
        lastName: 'Kaharian',
        birthDate: '2014-02-19T12:34:56.789Z',
        userId: getUsers[1]?.id ? getUsers[1].id : 0,
        phoneNumber: '09092558726',
        country: 'PH',
        currency: 'PHP',
        language: 'English',
        confirm: JSON.stringify({
          identity: true,
          emailAddress: true,
          phoneNumber: true,
        }),
      },
      {
        firstName: 'John',
        lastName: 'Madrigal',
        birthDate: '2014-02-19T12:34:56.789Z',
        userId: getUsers[2]?.id ? getUsers[2].id : 0,
        phoneNumber: '09092558726',
        country: 'PH',
        currency: 'PHP',
        language: 'English',
        confirm: JSON.stringify({
          identity: true,
          emailAddress: true,
          phoneNumber: true,
        }),
      },
      {
        firstName: 'Richard',
        lastName: 'Dela pena',
        birthDate: '2014-02-19T12:34:56.789Z',
        userId: getUsers[3]?.id ? getUsers[3].id : 0,
        phoneNumber: '09092558726',
        country: 'PH',
        currency: 'PHP',
        language: 'English',
        confirm: JSON.stringify({
          identity: true,
          emailAddress: true,
          phoneNumber: true,
        }),
      },
      {
        firstName: 'Arjhay',
        lastName: 'Andal',
        birthDate: '2014-02-19T12:34:56.789Z',
        userId: getUsers[4]?.id ? getUsers[4].id : 0,
        phoneNumber: '09092558726',
        country: 'PH',
        currency: 'PHP',
        language: 'English',
        confirm: JSON.stringify({
          identity: true,
          emailAddress: true,
          phoneNumber: true,
        }),
      },
    ],
  })
  console.log({ createPersonalInfos })
}
