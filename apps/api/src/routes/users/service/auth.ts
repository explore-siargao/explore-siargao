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
        include: {
          personalInfo: true,
        },
      })
      if (user) {
        const token = jwt.sign(
          {
            firstName: user.personalInfo?.firstName,
            lastName: user.personalInfo?.lastName,
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
        include: {
          personalInfo: true,
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
            registrationType: registrationType,
            role: 'User',
            password: password ? String(encryptPassword) : null,
          },
        })

        const newPersonalInfo = await prisma.personalInfo.create({
          data: {
            userId: newUser.id,
            firstName: firstName,
            middleName: '',
            lastName: lastName,
            birthDate: dayjs(birthDate).format(),
            phoneNumber: '',
          },
        })

        const token = jwt.sign(
          {
            firstName: newPersonalInfo.firstName,
            lastName: newPersonalInfo.lastName,
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
        include: {
          personalInfo: true,
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
            firstName: user.personalInfo?.firstName,
            lastName: user.personalInfo?.lastName,
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
        include: {
          personalInfo: true,
        },
      })
      if (user) {
        res.json({
          error: false,
          item: {
            name: `${user.personalInfo?.firstName} ${user.personalInfo?.lastName}`,
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
      const successMessage = `Email was sent to ${email}, please check before it expires.`
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
          code: String(code),
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
          include: {
            personalInfo: true,
          },
          data: {
            password: String(encryptPassword),
          },
        })
        const token = jwt.sign(
          {
            firstName: user.personalInfo?.firstName,
            lastName: user.personalInfo?.lastName,
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

export const mfa = async (req: Request, res: Response) => {
  const { userId } = req.body
  if (userId) {
    try {
      const user = await prisma.user.findFirst({
        where: {
          id: Number(userId),
        },
      })
      if (!user) {
        throw new Error('Invalid account')
      }
      const multiFactor = await prisma.multiFactorAuth.findFirst({
        where: {
          userId: Number(userId),
          type: 'test',
          used: false,
          expiredAt: {
            gte: new Date(),
          },
        },
      })
      const code = Math.floor(100000 + Math.random() * 900000)
      const successMessage = `Email was sent to ${user.email}, please check before it expires.`
      const sendEmailParams = { to: user.email, code: String(code) }
      const authEmail = new AuthEmail()
      if (!multiFactor) {
        authEmail.sendMFA(sendEmailParams)
        await prisma.multiFactorAuth.create({
          data: {
            userId: Number(userId),
            code: String(code),
            type: 'test',
            expiredAt: dayjs().add(3, 'minutes').format(),
          },
        })
        res.json({
          error: false,
          message: successMessage,
        })
      } else {
        authEmail.sendMFA(sendEmailParams)
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

export const mfaVerify = async (req: Request, res: Response) => {
  const { userId, code } = req.body
  if (userId && code) {
    try {
      const user = await prisma.user.findFirst({
        where: {
          id: Number(userId),
        },
      })
      if (!user) {
        throw new Error('Invalid account')
      }
      const multiFactor = await prisma.multiFactorAuth.findFirst({
        where: {
          userId: Number(userId),
          code: String(code),
          type: 'test',
          used: false,
          expiredAt: {
            gte: new Date(),
          },
        },
      })
      if (multiFactor) {
        await prisma.multiFactorAuth.update({
          where: {
            id: multiFactor.id,
          },
          data: {
            used: true,
          },
        })
        res.json({
          error: false,
          item: {},
          message: 'User was verified',
        })
      } else {
        res.json({
          error: true,
          message: 'Invalid or expired token',
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

export const updateUserEmail = async (req: Request, res: Response) => {
  const { email } = req.body
  const userId = Number(req.params.userId)
  try {
    const prisma = new PrismaClient()
    const getUser = await prisma.user.findFirst({
      where: {
        id: userId,
        deletedAt: null,
      },
    })
    if (getUser) {
      if (email) {
        if (String(email).indexOf('@') > 1) {
          const updateEmail = await prisma.user.update({
            where: {
              id: userId,
              deletedAt: null,
            },
            data: {
              email: email,
            },
          })
          res.json({
            error: false,
            items: updateEmail,
            itemCount: 1,
            message: 'Sucessfully updated',
          })
        } else {
          res.json({
            error: true,
            items: null,
            itemCount: 0,
            message: 'Invalid email address',
          })
        }
      } else {
        res.json({
          error: true,
          items: null,
          itemCount: 0,
          message: REQUIRED_VALUE_EMPTY,
        })
      }
    } else {
      res.json({
        error: true,
        items: null,
        itemCount: 0,
        message: 'User not exist to our system',
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
