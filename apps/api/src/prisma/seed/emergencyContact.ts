import { prisma } from '@/common/helpers/prismaClient'

export const emergencyContact = async () => {
  const getPersonalInfos = await prisma.guests.findMany({
    where: {
      deletedAt: null,
    },
  })

  const createEmergencyContact = await prisma.emergencyContacts.createMany({
    data: [
      {
        name: 'Who ever',
        peronalInfoId: getPersonalInfos[0]?.id || 0,
        relationship: 'Father',
        email: 'whoiam@gmail.com',
        phoneNumber: '09090909099',
      },
      {
        name: 'Julita Kaharian',
        peronalInfoId: getPersonalInfos[1]?.id || 0,
        relationship: 'Mother',
        email: 'julita@gmail.com',
        phoneNumber: '09090909097',
      },
      {
        name: 'Patrick',
        peronalInfoId: getPersonalInfos[2]?.id || 0,
        relationship: 'Father',
        email: 'patrick@gmail.com',
        phoneNumber: '09090909090',
      },
      {
        name: 'Chad',
        peronalInfoId: getPersonalInfos[3]?.id || 0,
        relationship: 'Brother',
        email: 'chad@gmail.com',
        phoneNumber: '09090909094',
      },
      {
        name: 'Jenny',
        peronalInfoId: getPersonalInfos[4]?.id || 0,
        relationship: 'Sister',
        email: 'jenn@gmail.com',
        phoneNumber: '09090909095',
      },
    ],
  })

  console.log({ createEmergencyContact })
}
