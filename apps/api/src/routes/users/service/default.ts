import { Response, Request } from 'express'
import { PrismaClient } from '@prisma/client'
import CryptoJS from 'crypto-js'
import {
  REQUIRED_VALUE_EMPTY,
  UNKNOWN_ERROR_OCCURRED,
  USER_NOT_EXIST,
} from '@/common/constants'
import { ResponseService } from '@/common/service/response'
import { encryptKey } from '@/common/config'
import { currencyByCountry } from '@/common/helpers/currencyByCountry'
import { prisma } from '@/common/helpers/prismaClient'

const response = new ResponseService()
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const prisma = new PrismaClient()
    const users = await prisma.user.findMany({
      include: {
        personalInfo: {
          include: {
            emergencyContacts: true,
            address: true,
          },
        },
      },
    })
    const addresses = await prisma.addresses.findMany({})
    if (users.length > 0) {
      res.json({
        error: false,
        items: [users, addresses],
        itemCount: users.length,
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

export const addUser = async (req: Request, res: Response) => {
  try {
    const prisma = new PrismaClient()
    const encryptPassword = CryptoJS.AES.encrypt(req.body.password, encryptKey)
    const newUser = await prisma.user.create({
      data: {
        email: req.body.email,
        registrationType: req.body.registrationType,
        role: 'User',
        password: req.body.password ? String(encryptPassword) : null,
      },
    })

    const currency: string =
      currencyByCountry[req.body.country as keyof typeof currencyByCountry]
    const finalCurrency = currency ?? 'USD'
    const newPersonalInfo = await prisma.personalInfo.create({
      data: {
        firstName: req.body.firstName,
        middleName: '',
        lastName: req.body.lastName,
        birthDate: req.body.birthDate,
        phoneNumber: '',
        governmentId: '',
        userId: newUser.id,
        country: req.body.country,
        language: 'English',
        currency: finalCurrency,
        confirm: JSON.stringify({
          identity: false,
          email: false,
          phone: false,
        }),
      },
    })

    const [createUser, createpersonalInfo] = await Promise.all([
      newUser,
      newPersonalInfo,
    ])
    res.json({
      error: false,
      item: [createUser, createpersonalInfo],
      itemCount: 1,
      message: 'User Successfully Created',
    })
  } catch (err: any) {
    res.json({
      error: true,
      item: 0,
      itemCount: 0,
      message: err.message,
    })
  }
}

export const deactivateAccount = async (req: Request, res: Response) => {
  const prisma = new PrismaClient()
  const userId = Number(req.params.userId)
  try {
    const getUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })
    if (!getUser) {
      return res.json(response.error({ message: USER_NOT_EXIST }))
    }
    const deactivateUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        deactivated: true,
      },
    })
    res.json(
      response.success({
        item: deactivateUser,
        allItemCount: 1,
        message: 'User Account successfully deactivated',
      })
    )
  } catch (err: any) {
    const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED
    res.json(response.error({ message: message }))
  }
}

export const updatePassword = async (req: Request, res: Response) => {
  const prisma = new PrismaClient()
  const userId = Number(req.params.userId)
  const { currentPassword, newPassword, confirmNewPassword } = req.body
  try {
    const getUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })
    if (!getUser) {
      return res.json(response.error({ message: USER_NOT_EXIST }))
    }
    if (!(currentPassword && newPassword && confirmNewPassword)) {
      return res.json(response.error({ message: REQUIRED_VALUE_EMPTY }))
    }
    if (newPassword !== confirmNewPassword) {
      return res.json(response.error({ message: 'Password not matched' }))
    }
    const decryptPassword = CryptoJS.AES.decrypt(
      getUser.password as string,
      encryptKey
    )
    const encryptCurrentPassword = CryptoJS.AES.encrypt(
      currentPassword,
      encryptKey
    )
    const decryptCurrentPassword = CryptoJS.AES.decrypt(
      encryptCurrentPassword.toString(),
      encryptKey
    )
    if (decryptCurrentPassword.toString() !== decryptPassword.toString()) {
      return res.json(response.error({ message: 'Wrong old password' }))
    }
    const encryptNewPassword = CryptoJS.AES.encrypt(newPassword, encryptKey)
    const updateUserPassword = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        password: encryptNewPassword.toString(),
        changePasswordAt: new Date(),
      },
    })
    res.json(
      response.success({
        item: updateUserPassword,
        allItemCount: 1,
        message: 'Password successfully updated',
      })
    )
  } catch (err: any) {
    const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED
    res.json(response.error({ message: message }))
  }
}

export const getUserProfile = async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const getUser = await prisma.user.findFirst({
    where: {
      id: id,
    },
    select: {
      profilePicture: true,
      role: true,
      hostInfo: {
        select: {
          work: true,
          hostedSince: true,
        },
      },
      listing: {
        include: {
          review: {
            include: {
              user: {
                select: {
                  personalInfo: {
                    select: {
                      firstName: true,
                      lastName: true,
                    },
                  },
                },
              },
            },
          },
        },
      },
      personalInfo: {
        select: {
          firstName: true,
          lastName: true,
          confirm: true,
          address: {
            select: {
              city: true,
              country: true,
            },
          },
        },
      },
    },
  })
  if (!getUser) {
    return res.json(response.error({ message: USER_NOT_EXIST }))
  }
  let countReviews = 0
  let listingReviewRating: number[] = []
  let totalRatings = 0
  let individualRating = 0
  getUser.listing.forEach((data) => {
    countReviews = countReviews + data.review.length
    data.review.forEach((reviewData) => {
      individualRating =
        (reviewData.accuracyRates +
          reviewData.checkInRates +
          reviewData.cleanLinessRates +
          reviewData.communicationRates +
          reviewData.locationRates +
          reviewData.valueRates) /
        6
      listingReviewRating.push(individualRating)
    })
  })
  listingReviewRating.forEach(
    (reviewRate) => (totalRatings = totalRatings + reviewRate)
  )
  let rating = totalRatings / listingReviewRating.length
  const newData = {
    profilePicture: getUser.profilePicture,
    userName:
      getUser.personalInfo?.firstName + ' ' + getUser.personalInfo?.lastName,
    role: getUser.role,
    countReviews: countReviews,
    ratings: Number.isNaN(rating) ? 0 : rating.toFixed(2),
    listingWithReviews: getUser.listing,
    work: getUser.hostInfo?.work ? getUser.hostInfo.work : null,
    hostedSince: getUser.hostInfo?.hostedSince
      ? getUser.hostInfo.hostedSince
      : null,
    confirmInfo: JSON.parse(String(getUser.personalInfo?.confirm)),
  }
  res.json(
    response.success({
      item: newData,
      allItemCount: 1,
      message: '',
    })
  )
}
