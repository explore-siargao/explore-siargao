import { PrismaClient } from '@prisma/client'
import { REQUIRED_VALUE_EMPTY } from '@/common/constants'
import { Request, Response } from 'express'

export const addpaymentMethod = async (req: Request, res: Response) => {
  const prisma = new PrismaClient()
  const { cardNumber, countryRegion, cvv, expirationDate, zipCode } = req.body
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
      if (cardNumber && countryRegion && cvv && expirationDate && zipCode) {
        const newPaymentMethod = await prisma.paymentMethod.create({
          data: {
            cardNumber: cardNumber,
            countryRegion: countryRegion,
            cvv: cvv,
            expirationDate: expirationDate,
            zipCode: zipCode,
            userId: userId,
          },
          include: {
            user: true,
          },
        })
        res.json({
          error: false,
          items: newPaymentMethod,
          itemCount: 1,
          message: 'Payment method successfully added',
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
        message: 'User is not exist from our system',
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

export const getPaymentMethods = async (req: Request, res: Response) => {
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
      const getPaymentsMethod = await prisma.paymentMethod.findMany({
        where: {
          userId: userId,
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
        items: getPaymentsMethod,
        itemCount: getPaymentsMethod.length,
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

export const removePaymentmethod = async (req: Request, res: Response) => {
  const userId = Number(req.params.userId)
  const paymentMethodId = Number(req.params.paymentMethodId)
  const prisma = new PrismaClient()
  try {
    const isUserExist =
      (await prisma.user.findFirst({
        where: {
          id: userId,
          deletedAt: null,
        },
      })) !== null
    if (isUserExist) {
      const isPaymentMethodExist =
        (await prisma.paymentMethod.findFirst({
          where: {
            id: paymentMethodId,
            userId: userId,
            deletedAt: null,
          },
        })) !== null
      if (isPaymentMethodExist) {
        const deletePayementMethod = await prisma.paymentMethod.delete({
          where: {
            id: paymentMethodId,
            userId: userId,
          },
        })
        res.json({
          error: false,
          items: deletePayementMethod,
          itemCount: 0,
          message: 'Payment method successfully removed',
        })
      } else {
        res.json({
          error: true,
          items: null,
          itemCount: 0,
          message: 'Payment Method already deleted',
        })
      }
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

export const updatePaymentMethod = async (req: Request, res: Response) => {
  let successDefault = null
  const { cardNumber, countryRegion, cvv, expirationDate, zipCode, isDefault } =
    req.body
  const userId = Number(req.params.userId)
  const paymentMethodId = Number(req.params.paymentMethodId)
  try {
    const prisma = new PrismaClient()
    const getUser = await prisma.user.findFirst({
      where: {
        id: userId,
        deletedAt: null,
      },
      include: {
        paymentMethod: true,
      },
    })
    if (getUser) {
      const getPaymentMethod = await prisma.paymentMethod.findFirst({
        where: {
          id: paymentMethodId,
          userId: userId,
        },
        include: {
          user: true,
        },
      })
      if (getPaymentMethod) {
        if (
          cardNumber ||
          cvv ||
          expirationDate ||
          countryRegion ||
          zipCode ||
          isDefault ||
          !isDefault
        ) {
          if (isDefault) {
            const updateCurrentDefault = await prisma.paymentMethod.updateMany({
              where: {
                userId: userId,
                isDefault: true,
              },
              data: {
                isDefault: false,
              },
            })
            successDefault = updateCurrentDefault
          }
          const updatePaymentMethod = await prisma.paymentMethod.update({
            where: {
              id: paymentMethodId,
              userId: userId,
            },
            data: {
              cardNumber: cardNumber,
              cvv: cvv,
              expirationDate: expirationDate,
              countryRegion: countryRegion,
              zipCode: zipCode,
              isDefault: isDefault,
            },
          })

          res.json({
            error: false,
            items: [updatePaymentMethod, successDefault],
            itemCount: 1,
            message: 'Sucessfully updated',
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
          message: 'Payment method not exist to our system',
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
