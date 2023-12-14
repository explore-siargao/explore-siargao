import { PrismaClient } from '@prisma/client'
import { REQUIRED_VALUE_EMPTY } from '@repo/constants'
import { Request, Response } from 'express'

export const getUsedCoupons = async (req: Request, res: Response) => {
  const prisma = new PrismaClient()
  const userId = Number(req.params.userId)
  try {
    const isUserExist =
      (await prisma.user.findUnique({
        where: {
          id: userId,
          deletedAt: null,
        },
      })) !== null
    if (isUserExist) {
      const getUsedCoupons = await prisma.coupon.findMany({
        where: {
          usedBy: userId,
        },
        include: {
          user: {
            include: {
              personalInfo: true,
            },
          },
        },
      })
      res.json({
        error: false,
        items: getUsedCoupons,
        itemCount: getUsedCoupons.length,
        message: '',
      })
    } else {
      res.json({
        error: true,
        items: null,
        itemCount: 0,
        message: 'user not exists to our system',
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
