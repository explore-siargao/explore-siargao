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

export const addCoupon = async (req: Request, res: Response) => {
  const prisma = new PrismaClient()
  const { code, expirationDate, reward } = req.body
  const userId = Number(req.params.userId)
  try {
    const isUserExist =
      (await prisma.user.findUnique({
        where: {
          id: userId,
          OR: [{ role: 'Admin' }, { role: 'Host' }],
        },
      })) !== null
    if (isUserExist) {
      if (code && reward && expirationDate) {
        const newCoupon = await prisma.coupon.create({
          data: {
            code: code,
            reward: reward,
            expirationDate: expirationDate,
            createdBy: userId,
            usedBy: null,
            isUsed: false,
          },
          include: {
            user: true,
          },
        })
        res.json({
          error: false,
          items: newCoupon,
          itemCount: 1,
          message: 'New coupon successfully created',
        })
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
        message: 'User Admin or Host is not exist from our system',
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

export const updateCoupon = async (req: Request, res: Response) => {
  const prisma = new PrismaClient()
  const userId = Number(req.params.userId)
  const { code, reward, expirationDate, usedBy, isUsed } = req.body
  try {
    const isUserExist =
      (await prisma.user.findUnique({
        where: {
          id: userId,
        },
      })) !== null
    if (isUserExist) {
      if (code || reward || expirationDate || usedBy || isUsed) {
        const getCoupon = await prisma.coupon.findFirst({
          where: {
            code: req.body.code,
          },
        })
        if (getCoupon !== null) {
          const updateCoupon = await prisma.coupon.update({
            where: {
              id: getCoupon.id,
            },
            data: {
              code: code,
              reward: reward,
              expirationDate: expirationDate,
              usedBy: usedBy,
              isUsed: isUsed,
            },
            include: {
              user: true,
            },
          })
          res.json({
            error: false,
            items: updateCoupon,
            itemCount: 1,
            message: 'Coupon successfully updated',
          })
        } else {
          res.json({
            error: true,
            items: null,
            itemCount: 0,
            message: 'Coupon not exist check your code',
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
        message: 'User is not exist from our system',
      })
    }
  } catch (e: any) {
    res.json({
      error: true,
      items: null,
      itemCount: 0,
      message: e.message,
    })
  }
}
