import { prisma } from '@/common/helpers/prismaClient'

export const address = async () => {
  const getPersonalInfos = await prisma.personalInfo.findMany({
    where: {
      deletedAt: null,
    },
  })

  const createAddresses = await prisma.addresses.createMany({
    data: [
      {
        peronalInfoId: getPersonalInfos[0]?.id || 0,
        aptSuite: null,
        streetAddress: 'anywhere street',
        city: 'Kahit saan',
        stateProvince: 'Mindoro',
        country: 'PH',
        zipCode: 1000,
      },
      {
        peronalInfoId: getPersonalInfos[1]?.id || 0,
        aptSuite: null,
        streetAddress: 'Looban street',
        city: 'Santa Maria',
        stateProvince: 'Laguna',
        country: 'PH',
        zipCode: 4026,
      },
      {
        peronalInfoId: getPersonalInfos[2]?.id || 0,
        aptSuite: null,
        streetAddress: 'Gitna street',
        city: 'Paete',
        stateProvince: 'Laguna',
        country: 'PH',
        zipCode: 4016,
      },
      {
        peronalInfoId: getPersonalInfos[3]?.id || 0,
        aptSuite: null,
        streetAddress: 'San jose street',
        city: 'Kalayaan',
        stateProvince: 'laguna',
        country: 'PH',
        zipCode: 4015,
      },
      {
        peronalInfoId: getPersonalInfos[4]?.id || 0,
        aptSuite: null,
        streetAddress: 'JP rizal street',
        city: 'Sta. Cruz',
        stateProvince: 'Laguna',
        country: 'PH',
        zipCode: 4009,
      },
    ],
  })

  console.log({ createAddresses })
}
