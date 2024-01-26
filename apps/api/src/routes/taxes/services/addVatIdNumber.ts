import { ResponseService } from '@/common/service/response'
import { PrismaClient } from '@prisma/client'
import { REQUIRED_VALUE_EMPTY, USER_NOT_EXIST } from '@repo/constants'
import { Z_Taxes } from '@repo/contract'
import { Request, Response } from 'express'

const prisma = new PrismaClient()
const response = new ResponseService()

export const getTax = async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  try {
    const getTaxByUserId = await prisma.taxes.findUnique({
      where: {
        id: id,
      },
    })
    if (getTaxByUserId !== null) {
      res.json(
        response.success({
          item: getTaxByUserId,
          allItemCount: 1,
          message: '',
        })
      )
    } else {
      res.json({
        success: true,
        data: {
          item: getTaxByUserId,
          allItemCount: 0,
          message: 'No tax record found!',
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
          const newTaxes = await prisma.taxes.create({
            data: {
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

