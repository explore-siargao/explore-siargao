import { ResponseService } from '@/common/service/response'
import { prisma } from '@/common/helpers/prismaClient'
import { REQUIRED_VALUE_EMPTY, USER_NOT_EXIST } from '@repo/constants'
import { Z_Taxes } from '@repo/contract'
import { Request, Response } from 'express'

const response = new ResponseService()

export const getTax = async (req: Request, res: Response) => {
  const userId = Number(req.params.userId)
  try {
    const getTaxesByUserId = await prisma.tax.findMany({
      where: {
        userId: userId,
      },
    })

    if (getTaxesByUserId.length > 0) {
      res.json({
        success: true,
        data: {
          items: getTaxesByUserId,
          allItemCount: getTaxesByUserId.length,
          message: '',
        },
      })
    } else {
      res.json({
        success: true,
        data: {
          items: getTaxesByUserId,
          allItemCount: 0,
          message: 'No tax records found for the given userId!',
        },
      })
    }
  } catch (err: any) {
    res.json(response.error({ message: err.message }))
  }
}

export const addTaxes = async (req: Request, res: Response) => {
  const {
    countryRegion,
    vatId,
    nameOnRegistration,
    addressLine1,
    addressLine2,
    city,
    provinceRegion,
    zipPostalCode,
  } = req.body
  const userId = Number(req.params.userId)
  try {
    const getUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })
    if (getUser) {
      if (
        countryRegion &&
        vatId &&
        nameOnRegistration &&
        addressLine1 &&
        addressLine2 &&
        city &&
        provinceRegion &&
        zipPostalCode
      ) {
        const inputIsValid = Z_Taxes.safeParse(req.body)
        if (inputIsValid.success) {
          const newTaxes = await prisma.tax.create({
            data: {
              userId: userId,
              countryRegion: countryRegion,
              vatId: vatId,
              nameOnRegistration: nameOnRegistration,
              addressLine1: addressLine1,
              addressLine2: addressLine2,
              city: city,
              provinceRegion: provinceRegion,
              zipPostalCode: zipPostalCode,
            },
          })
          res.json({
            success: true,
            data: {
              item: newTaxes,
              allItemCount: 1,
              message: 'New Tax successfully created',
            },
          })
        } else {
          res.json(
            response.error({
              message: JSON.parse(inputIsValid.error.message),
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
    } else {
      res.json(response.error({ message: USER_NOT_EXIST }))
    }
  } catch (err: any) {
    res.json(response.error({ message: err.message }))
  }
}
