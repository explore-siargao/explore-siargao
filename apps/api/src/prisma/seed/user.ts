import { prisma } from '@/common/helpers/prismaClient'
import { encryptKey } from '@/common/config'
import CryptoJS from 'crypto-js'

export const users = async () => {
  const createUsers = await prisma.user.createMany({
    data: [
      {
        email: 'test@test.com',
        password: String(CryptoJS.AES.encrypt('test', encryptKey)),
        registrationType: 'Manual',
        role: 'Host',
      },
      {
        email: 'ramilkaharian25@gmail.com',
        registrationType: 'Google',
        role: 'Host',
      },
      {
        email: 'jp.madrigal07@gmail.com',
        registrationType: 'Google',
        role: 'Host',
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
