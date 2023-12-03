import { Response, Request } from 'express'
import { PrismaClient, RegistrationType } from '@prisma/client'
import { REQUIRED_VALUE_EMPTY } from '@repo/constants'
import jwt from 'jsonwebtoken'
import { encryptKey, signKey, webUrl } from '@/common/config'
import CryptoJS from 'crypto-js'
import dayjs from 'dayjs'
import { AuthEmail } from './authEmail'

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
            role: user.role,
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

export const register = async (req: Request, res: Response) => {
  const { email, password, firstName, lastName, birthDate, registrationType } =
    req.body
  if (email && firstName && lastName && birthDate && registrationType) {
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
            registrationType: registrationType,
            lastName: lastName,
            address: '',
            birthDate: dayjs(birthDate).format(),
            contactNumber: '',
            role: 'User',
            password: password ? String(encryptPassword) : null,
          },
        })
        const token = jwt.sign(
          {
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            role: newUser.role,
          },
          signKey as string
        )
        res.json({
          error: false,
          item: {
            accessToken: token,
            user: newUser,
          },
          message: 'Successfully registered',
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

export const manual = async (req: Request, res: Response) => {
  const { email, password } = req.body
  if (email && password) {
    try {
      const user = await prisma.user.findFirst({
        where: {
          email: email,
          registrationType: RegistrationType.Manual,
        },
      })
      if (!user) {
        throw new Error('Email or password is invalid')
      }
      const decryptedPassword = CryptoJS.AES.decrypt(
        user?.password as string,
        encryptKey as string
      )
      const originalPassword = decryptedPassword.toString(CryptoJS.enc.Utf8)
      if (user && originalPassword === password) {
        const token = jwt.sign(
          {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role,
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
          error: true,
          message: 'Email or password is invalid',
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

export const info = async (req: Request, res: Response) => {
  const { email } = req.body
  if (email) {
    try {
      const user = await prisma.user.findFirst({
        where: {
          email: email,
        },
      })
      if (user) {
        res.json({
          error: false,
          item: {
            name: `${user.firstName} ${user.lastName}`,
            email: user.email,
          },
        })
      } else {
        res.json({
          error: true,
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

export const forgot = async (req: Request, res: Response) => {
  const { email } = req.body
  if (email) {
    try {
      const user = await prisma.user.findFirst({
        where: {
          email: email,
        },
      })
      if (!user) {
        throw new Error('This email does not exist in our records')
      }
      if (user && user.registrationType !== 'Manual') {
        throw new Error(
          `Account registration type is invalid, please login using your ${user.registrationType} account.`
        )
      }
      const forgotPassword = await prisma.forgotPassword.findFirst({
        where: {
          email: email,
          used: false,
          expiredAt: {
            gte: new Date(),
          },
        },
      })
      const code = Math.floor(100000 + Math.random() * 900000)
      const successMessage = `Email was sent to ${email}, pleas check before it expires.`
      const webVerifyUrl = `${webUrl}/new-password?email=${email}&code=${code}`
      const sendEmailParams = { to: email, magicLink: webVerifyUrl }
      const authEmail = new AuthEmail()
      if (!forgotPassword) {
        authEmail.sendForgotPasswordEmail(sendEmailParams)
        await prisma.forgotPassword.create({
          data: {
            email: email,
            code: String(code),
            expiredAt: dayjs().add(30, 'minutes').format(),
          },
        })
        res.json({
          error: false,
          message: successMessage,
        })
      } else {
        authEmail.sendForgotPasswordEmail(sendEmailParams)
        res.json({
          error: false,
          message: successMessage,
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

export const forgotVerify = async (req: Request, res: Response) => {
  const { email, code, newPassword } = req.body
  if (email && code && newPassword) {
    try {
      const user = await prisma.user.findFirst({
        where: {
          email: email,
        },
      })
      if (!user) {
        throw new Error('Some of the values are invalid')
      }
      const forgotPassword = await prisma.forgotPassword.findFirst({
        where: {
          email: email,
          code,
          used: false,
          expiredAt: {
            gte: new Date(),
          },
        },
      })
      if (forgotPassword) {
        await prisma.forgotPassword.update({
          where: {
            id: forgotPassword.id,
          },
          data: {
            used: true,
          },
        })
        const encryptPassword = CryptoJS.AES.encrypt(newPassword, encryptKey)
        const user = await prisma.user.update({
          where: {
            email: email,
          },
          data: {
            password: String(encryptPassword),
          },
        })
        const token = jwt.sign(
          {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role,
          },
          signKey as string
        )
        res.json({
          error: false,
          item: {
            accessToken: token,
          },
          message: 'Password successfully updated',
        })
      } else {
        res.json({
          error: true,
          message:
            'Some values are invalid or forgot password token is expired',
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
