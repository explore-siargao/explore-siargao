import { Response, Request } from 'express'
import { PrismaClient, RegistrationType } from '@prisma/client'
import {
  REQUIRED_VALUE_EMPTY,
  USER_NOT_AUTHORIZED,
  USER_NOT_EXIST,
} from '@/common/constants'
import { APP_NAME } from '@repo/constants'
import dayjs from 'dayjs'
import { AuthEmail } from './authEmail'
import verifyCaptcha from '@/common/helpers/verifyCaptcha'
import validateCsrfToken from '@/common/helpers/validateCsrfToken'
import { decode } from 'next-auth/jwt'
import { capitalize } from 'lodash'
import { Z_UserRegister } from '@repo/contract'
import { ResponseService } from '@/common/service/response'
import randomNumber from '@/common/helpers/randomNumber'
import CryptoJS from 'crypto-js'
import { currencyByCountry } from '@/common/helpers/currencyByCountry'
const prisma = new PrismaClient()
const response = new ResponseService()
import { EncryptionService } from '@repo/services'
import { nextAuthSecret, webUrl } from '@/common/config'

const decryptionService = new EncryptionService('password')
const encryptionService = new EncryptionService('password')
export const verifySignIn = async (req: Request, res: Response) => {
  const { type, email } = req.query
  if (type && email) {
    try {
      const user = await prisma.user.findFirst({
        where: {
          email: email as string,
        },
        include: {
          personalInfo: true,
        },
      })
      const capitalizeType = capitalize(type as string)
      const isSocial =
        capitalizeType === RegistrationType.Facebook ||
        capitalizeType === RegistrationType.Google
      if (
        (user &&
          user.registrationType !== RegistrationType.Manual &&
          isSocial) ||
        (user && user.registrationType === RegistrationType.Manual && !isSocial)
      ) {
        res.json({
          error: false,
          item: { email },
        })
      } else if (
        user &&
        user.registrationType !== RegistrationType.Manual &&
        !isSocial
      ) {
        res.json({
          error: true,
          item: null,
          message: `Invalid login method, please login using your ${type} account`,
        })
      } else if (
        user &&
        user.registrationType === RegistrationType.Manual &&
        isSocial
      ) {
        res.json({
          error: true,
          item: null,
          message: `Invalid login method, please login using your password`,
        })
      } else if ((!user && type === 'google') || type === 'facebook') {
        res.json({
          error: false,
          action: {
            type: 'SOCIAL_REGISTER',
            description: type,
          },
          message: 'Email is not registered',
        })
      } else {
        res.json({
          error: false,
          item: null,
          message: 'Email is not registered',
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

export const verifySession = async (req: Request, res: Response) => {
  res.json(response.success({ item: res.locals.user }))
}

export const register = async (req: Request, res: Response) => {
  const isInputValid = Z_UserRegister.safeParse(req.body)
  if (isInputValid.success) {
    const {
      email,
      password,
      firstName,
      lastName,
      birthDate,
      registrationType,
      country,
      canReceiveEmail,
    } = req.body

    const currency: string =
      currencyByCountry[country as keyof typeof currencyByCountry]
    const selectedCurrency = currency ?? 'USD'
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
        const newUser = await prisma.user.create({
          data: {
            email: email,
            registrationType: registrationType,
            role: 'User',
            password: password,
            canReceiveEmail,
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
            country: country,
            language: 'English',
            currency: selectedCurrency,
            confirm: JSON.stringify({
              identity: false,
              email: false,
              phone: false,
            }),
          },
        })
        res.json(
          response.success({
            item: {
              personalInfo: newPersonalInfo,
            },
            message: 'Successfully registered',
          })
        )
      } else {
        res.json(response.error({ message: 'Email already exist' }))
      }
    } catch (err: any) {
      res.json(response.error({ message: err.message }))
    }
  } else {
    res.json(response.error({ message: REQUIRED_VALUE_EMPTY }))
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
      const decryptedPassword = decryptionService.decrypt(
        user?.password as string
      )
      const originalPassword = decryptedPassword.toString()
      const decryptInputPassword = decryptionService.decrypt(password)
      if (user && originalPassword === decryptInputPassword) {
        res.json({
          error: false,
          item: null,
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
  const csrfToken = req.headers['x-csrf-token']
  if (csrfToken && validateCsrfToken(csrfToken as string) === 'valid') {
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
  } else {
    res.json({
      error: true,
      message: USER_NOT_AUTHORIZED,
    })
  }
}

export const forgot = async (req: Request, res: Response) => {
  const { token, email } = req.body
  if (email && token) {
    try {
      const isCaptchaTokenValid = await verifyCaptcha(token)
      if (!isCaptchaTokenValid) {
        throw new Error('CAPTCHA is invalid')
      }
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

      const code = Math.floor(100000 + randomNumber() * 900000)
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
        const decryptNewPassword = decryptionService.decrypt(newPassword)
        const encryptPassword = encryptionService.encrypt(decryptNewPassword)
        await prisma.user.update({
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
        res.json({
          error: false,
          item: null,
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

      const code = Math.floor(100000 + randomNumber() * 900000)
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
          message: 'User verified',
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
      include: {
        personalInfo: true,
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
            items: {
              user: updateEmail,
            },
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
        message: USER_NOT_EXIST,
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

export const userDetails = async (req: Request, res: Response) => {
  const sessionToken = req.cookies['next-auth.session-token']
  const decoded = await decode({
    token: sessionToken,
    secret: nextAuthSecret,
  })
  if (sessionToken && decoded?.email) {
    const prisma = new PrismaClient()
    try {
      const user = await prisma.user.findFirst({
        where: {
          email: decoded?.email,
          deletedAt: null,
        },
        include: {
          personalInfo: {
            include: {
              address: true,
              emergencyContacts: true,
            },
          },
        },
      })
      res.json({
        error: false,
        item: {
          id: user?.id,
          email: user?.email,
          canReceivedEmail: user?.canReceiveEmail,
          registrationType: user?.registrationType,
          profilePicture: user?.profilePicture,
          personalInfo: user?.personalInfo,
        },
        itemCount: 0,
        message: '',
      })
    } catch (err: any) {
      res.json({
        error: true,
        item: null,
        itemCount: 0,
        message: err.message,
      })
    }
  } else {
    res.json({
      error: true,
      item: null,
      itemCount: 0,
      message: USER_NOT_AUTHORIZED,
    })
  }
}

export const setCanReceiveEmail = async (req: Request, res: Response) => {
  const prisma = new PrismaClient()
  const userId = Number(req.params.userId)
  const canReceive = req.body.canReceive
  if (typeof canReceive === 'boolean') {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: userId,
        },
      })
      if (user !== null) {
        const setCanReceiveEmail = await prisma.user.update({
          where: {
            id: userId,
          },
          data: {
            canReceiveEmail: canReceive,
          },
        })
        res.json(
          response.success({
            item: setCanReceiveEmail,
            message: canReceive
              ? `You will now received an email from ${APP_NAME}`
              : `You are now removed from ${APP_NAME} email notification`,
          })
        )
      } else {
        res.json(
          response.error({
            message: USER_NOT_AUTHORIZED,
          })
        )
      }
    } catch (err: any) {
      res.json(
        response.error({
          message: err.message,
        })
      )
    }
  } else {
    res.json(
      response.error({
        message: REQUIRED_VALUE_EMPTY,
      })
    )
  }
}
