import { NextFunction, Request, Response } from 'express'
import { UNKNOWN_ERROR_OCCURRED } from '../../constants'
import { nextAuthSecret } from '@/common/config/'
import { PrismaClient } from '@prisma/client'
import { decode } from 'next-auth/jwt'

const checkErrorMessage = (res: Response, message: string) => {
  if (message === 'jwt malformed') {
    res.json({
      error: true,
      item: null,
      message: 'Invalid authentication credentials',
    })
  } else if (message === 'jwt expired') {
    res.json({
      error: true,
      item: null,
      message: 'Authentication is expired, please login again',
    })
  } else {
    res.json({
      error: true,
      item: null,
      message: message,
    })
  }
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
          email: decoded.email,
        },
      })
      if (user && (user.deletedAt || user.deactivated)) {
        throw new Error('We cannot find your account in our system')
      }
      const authUser = {
        id: user?.id,
        registrationType: user?.registrationType,
        email: user?.email,
        profilePicture: user?.profilePicture,
        role: user?.role,
        deactivated: user?.deactivated
      }
      res.locals.user = authUser
      next()
    } catch (err: any) {
      const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED
      checkErrorMessage(res, message)
    }
  } else {
    res.json({
      error: true,
      item: null,
      message: `You are not authorized to perform this action`,
    })
  }
}

export default isUserLoggedIn
