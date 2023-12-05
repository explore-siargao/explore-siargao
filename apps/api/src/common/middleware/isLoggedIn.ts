import { NextFunction, Request, Response } from 'express'
import { UNKNOWN_ERROR_OCCURRED } from '../constants'
import { signKey } from '@/common/config/'
import jwt, { Secret } from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'

const isUserLoggedIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const checkErrorMessage = (message: string) => {
    if (message === 'jwt malformed') {
      res.json({
        error: true,
        item: null,
        itemCount: 0,
        message: 'Invalid authentication credentials',
      })
    } else if (message === 'jwt expired') {
      res.json({
        error: true,
        item: null,
        itemCount: 0,
        message: 'Authentication is expired, please login again',
      })
    } else {
      res.json({
        error: true,
        item: null,
        itemCount: 0,
        message: message,
      })
    }
  }
  const bearerHeader = req.headers['authorization']
  if (bearerHeader) {
    const bearer = bearerHeader.split(' ')
    const bearerToken = String(bearer[1])
    const prisma = new PrismaClient()
    try {
      const { email }: any = jwt.verify(bearerToken, signKey as Secret)
      const user = await prisma.user.findFirst({
        where: {
          email: email,
        },
      })
      if (user && (user.deletedAt || user.deactivated)) {
        throw new Error('We cannot find your account in our system')
      }
      res.locals.user = user
      next()
    } catch (err: any) {
      const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED
      checkErrorMessage(message)
    }
  } else {
    res.json({
      error: true,
      item: null,
      itemCount: 0,
      message: `You are not authorized to perform this action`,
    })
  }
}

export default isUserLoggedIn
