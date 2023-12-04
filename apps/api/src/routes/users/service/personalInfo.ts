import { Response, Request } from 'express'
import { PrismaClient } from '@prisma/client'
import { REQUIRED_VALUE_EMPTY } from '@repo/constants'
export const getPersonalInfo = async (req: Request, res: Response) => {
  try {
    const prisma = new PrismaClient()
    const getPersonalInfo = await prisma.personalInfo.findFirst({
      where: { userId: Number(req?.params?.userId) },
      include: {
        user: true,
        emergrncyContacts: true,
        address: true,
      },
    })
    if (getPersonalInfo !== null) {
      res.json({
        error: false,
        items: getPersonalInfo,
        itemCount: 1,
        message: '',
      })
    } else {
      res.json({
        error: false,
        items: null,
        itemCount: 0,
        message: 'No data found',
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

export const addEmergencyContact = async (req: Request, res: Response) => {
  try {
    const prisma = new PrismaClient()
    const { email, phoneNumber, name, relationship } = req.body
    const personalInfoId = Number(req.params.personalInfoId)
    if (name && relationship && (email || phoneNumber)) {
      const getPersonalInfo = await prisma.personalInfo.findFirst({
        where: {
          id: personalInfoId,
          deletedAt: null,
        },
      })

      if (getPersonalInfo) {
        const newEmergencyContact = await prisma.emergencyContacts.create({
          data: {
            peronalInfoId: personalInfoId,
            email: email,
            phoneNumber: phoneNumber,
            name: name,
            relationship: relationship,
          },
        })

        res.json({
          error: false,
          items: newEmergencyContact,
          itemCount: 1,
          message: 'Emergency Contact Successfully Added',
        })
      } else {
        res.json({
          error: true,
          items: getPersonalInfo,
          itemCount: 0,
          message: 'No personal information data found',
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
  } catch (err: any) {
    res.json({
      error: true,
      items: null,
      itemCount: 0,
      message: err.message,
    })
  }
}

export const addAddress = async (req: Request, res: Response) => {
  try {
    const prisma = new PrismaClient()
    const { streetAddress, city, province, zipCode } = req.body
    const personalInfoId = Number(req.params.personalInfoId)
    if (streetAddress && city && province && zipCode) {
      const getPersonalInfo = await prisma.personalInfo.findFirst({
        where: {
          id: personalInfoId,
          deletedAt: null,
        },
      })

      if (getPersonalInfo) {
        const newAddress = await prisma.addresses.create({
          data: {
            peronalInfoId: personalInfoId,
            streetAddress: streetAddress,
            city: city,
            province: province,
            zipCode: zipCode,
          },
        })
        res.json({
          error: false,
          items: newAddress,
          itemCount: 1,
          message: 'Address successfully added',
        })
      } else {
        res.json({
          error: true,
          items: getPersonalInfo,
          itemCount: 0,
          message: 'No personal information data found',
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
  } catch (err: any) {
    res.json({
      error: true,
      items: null,
      itemCount: 0,
      message: err.message,
    })
  }
}
