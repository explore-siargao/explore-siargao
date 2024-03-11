import { prisma } from '@/common/helpers/prismaClient'
import { passwordEncryptKey } from '@repo/constants'
import CryptoJS from 'crypto-js'

export const users = async () => {
  const createUsers = await prisma.user.createMany({
    data: [
      {
        email: 'test@test.com',
        password: String(CryptoJS.AES.encrypt('test', passwordEncryptKey)),
        registrationType: 'Manual',
        role: 'User',
        isHost: true,
      },
      {
        email: 'ramilkaharian25@gmail.com',
        registrationType: 'Google',
        role: 'User',
        isHost: true,
      },
      {
        email: 'jp.madrigal07@gmail.com',
        registrationType: 'Google',
        role: 'User',
        isHost: true,
      },
      {
        email: 'richard.delapena19@gmail.com',
        registrationType: 'Google',
        role: 'User',
      },
      {
        email: 'arjayandal93@gmail.com',
        registrationType: 'Google',
        role: 'User',
      },
    ],
  })
  console.log({ createUsers })
}
