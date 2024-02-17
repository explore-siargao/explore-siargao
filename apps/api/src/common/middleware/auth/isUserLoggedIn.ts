import { NextFunction, Request, Response } from 'express'
import { UNKNOWN_ERROR_OCCURRED } from '../../constants'
import { nextAuthSecret } from '@/common/config/'
import { PrismaClient } from '@prisma/client'
import { decode } from 'next-auth/jwt'
import { ResponseService } from '@/common/service/response'
import { E_RegistrationType, E_UserRole, T_Session } from '@repo/contract'
import { USER_NOT_AUTHORIZED } from '@/common/constants'

const response = new ResponseService()

enum JWT_Error {
  'jwt malformed' = 'jwt malformed',
  'jwt expired' = 'jwt expired',
}

const checkErrorMessage = (res: Response, message: string | JWT_Error) => {
  const error = {
    'jwt malformed': 'Invalid authentication credentials',
    'jwt expired': 'Authentication is expired, please login again',
  }
  res.json(
    response.error({
      message: typeof message === 'string' ? message : error[message],
    })
  )
}

const isUserLoggedIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies['next-auth.session-token']
  const decoded = await decode({
    token: token,
    secret: nextAuthSecret,
  })
  if (token && decoded?.email) {
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
      if (user && (user.deletedAt || user.deactivated)) {
        throw new Error('We cannot find your account in our system')
      }
      const authUser: T_Session = {
        id: user?.id as number,
        registrationType: user?.registrationType as E_RegistrationType,
        email: user?.email as string,
        profilePicture: user?.profilePicture as string,
        role: user?.role as E_UserRole,
        deactivated: user?.deactivated as boolean,
        canReceiveEmail: user?.canReceiveEmail as boolean,
        changePasswordAt: String(user?.changePasswordAt),
        // TODO: FIX THE ANY FOR THIS VALUE
        personalInfo: {
          ...user?.personalInfo,
          governmentId: user?.personalInfo?.governmentId
            ? JSON.parse(user?.personalInfo?.governmentId)
            : null,
        } as any,
      }
      res.locals.user = authUser
      next()
    } catch (err: any) {
      const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED
      checkErrorMessage(res, message)
    }
  } else {
    res.json(
      response.error({
        message: USER_NOT_AUTHORIZED,
      })
    )
  }
}

export default isUserLoggedIn
