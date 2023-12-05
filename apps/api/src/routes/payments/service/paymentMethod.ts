import { PrismaClient } from '@prisma/client'
import { REQUIRED_VALUE_EMPTY } from '@repo/constants'
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

export const getPaymentMethods = async (req:Request, res:Response)=>{
    const prisma = new PrismaClient()
    const userId = Number(req.params.userId)
    try{
        const isUserExist =
      (await prisma.user.findUnique({
        where: {
          id: userId,
          deletedAt: null,
        },
      })) !== null 
      if(isUserExist){
        const getPaymentsMethod = await prisma.paymentMethod.findMany({
            where:{
                userId: userId
            },
            include:{
                user:{
                    include:{
                        personalInfo: true
                    }
                }
            }
        })
        res.json({
            error: false,
            items: getPaymentsMethod,
            itemCount: getPaymentsMethod.length,
            message: "",
        })
      }else{
        res.json({
            error: true,
            items: null,
            itemCount: 0,
            message: "user not exists to our system",
          })
      }
    }catch(err: any){
        res.json({
            error: true,
            items: null,
            itemCount: 0,
            message: err.message,
          })
    }
}