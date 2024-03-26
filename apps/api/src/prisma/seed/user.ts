import { PASSWORD_ENCRYPT_KEY } from '@/common/constants/ev'
import { prisma } from '@/common/helpers/prismaClient'
import CryptoJS from 'crypto-js'

export const users = async () => {
  const createUsers = await prisma.user.createMany({
    data: [
      {
        email: 'diana@ramos.com',
        password: String(CryptoJS.AES.encrypt('test', PASSWORD_ENCRYPT_KEY)),
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
        password: String(
          CryptoJS.AES.encrypt('@Patrick22', PASSWORD_ENCRYPT_KEY)
        ),
        registrationType: 'Manual',
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
