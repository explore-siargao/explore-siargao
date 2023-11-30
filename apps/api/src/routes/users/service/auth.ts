import { Response, Request } from 'express'
import { PrismaClient, RegistrationType } from '@prisma/client'
import { REQUIRED_VALUE_EMPTY } from '@repo/constants'
import jwt from 'jsonwebtoken'
import { encryptKey, signKey } from '@/common/config'
import CryptoJS from 'crypto-js'
import dayjs from 'dayjs'

const prisma = new PrismaClient()

function capitalizeFirstLetter(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export const verifySession = async (req: Request, res: Response) => {
  const { type, email } = req.query
  if (type && email) {
    try {
      const user = await prisma.user.findFirst({
        where: {
          email: email as string,
          registrationType: capitalizeFirstLetter(
            type as string
          ) as RegistrationType,
        },
      })
      if (user) {
        const token = jwt.sign(
          {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
          },
          signKey as string
        )
        res.json({
          error: false,
          item: {
            accessToken: token,
          },
        })
      } else {
        res.json({
          error: false,
          item: null,
          message: 'No data found',
        })
      }
    } catch (err: any) {
      res.json({
        error: true,
        message: err.message,
      })
    }
  } else {
    res.json({
      error: true,
      message: REQUIRED_VALUE_EMPTY,
    })
  }
}

export const manual = async (req: Request, res: Response) => {
  const { email, password, firstName, lastName, birthDate } = req.body
  if (password && email && firstName && lastName && birthDate) {
    try {
      const user = await prisma.user.findFirst({
        where: {
          email: email as string,
        },
      })
      if (!user) {
        const encryptPassword = CryptoJS.AES.encrypt(
          req.body.password,
          encryptKey
        )
        const newUser = await prisma.user.create({
          data: {
            email: email,
            firstName: firstName,
            middleName: '',
            registrationType: 'Manual',
            lastName: lastName,
            address: '',
            birthDate: dayjs(birthDate).format(),
            contactNumber: '',
            role: 'User',
            password: password ? String(encryptPassword) : null,
          },
        })
        res.json({
          error: false,
          item: newUser,
          message: 'User Successfully Created',
        })
      } else {
        res.json({
          error: true,
          message: 'Email already exist',
        })
      }
    } catch (err: any) {
      res.json({
        error: true,
        items: null,
        itemCount: 0,
        message: err.message,
      })
    }
  } else {
    res.json({
      error: true,
      message: REQUIRED_VALUE_EMPTY,
    })
  }
}

export const facebook = async (req: Request, res: Response) => {
  try {
    const prisma = new PrismaClient()
    const users = await prisma.user.findMany({})
    if (users.length > 0) {
      res.json({
        error: false,
        items: users,
        itemCount: users.length,
        message: '',
      })
    } else {
      res.json({
        error: false,
        items: null,
        itemCount: 0,
        message: 'No data found',
      })
    }
  } catch (err: any) {
    res.json({
      error: true,
      items: null,
      itemCount: 0,
      message: err.message,
    })
  }
}

export const google = async (req: Request, res: Response) => {
  try {
    const prisma = new PrismaClient()
    const users = await prisma.user.findMany({})
    if (users.length > 0) {
      res.json({
        error: false,
        items: users,
        itemCount: users.length,
        message: '',
      })
    } else {
      res.json({
        error: false,
        items: null,
        itemCount: 0,
        message: 'No data found',
      })
    }
  } catch (err: any) {
    res.json({
      error: true,
      items: null,
      itemCount: 0,
      message: err.message,
    })
  }
}
