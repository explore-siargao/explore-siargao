import { Response, Request } from 'express'
import { PrismaClient } from '@prisma/client'
import CryptoJS from 'crypto-js'
import {
  REQUIRED_VALUE_EMPTY,
  UNKNOWN_ERROR_OCCURRED,
  USER_NOT_EXIST,
} from '@/common/constants'
import { ResponseService } from '@/common/service/response'
import { passwordEncryptKey } from '@/common/config'
import { currencyByCountry } from '@/common/helpers/currencyByCountry'
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

export const deactivateAccount = async (req: Request, res: Response) => {
  const response = new ResponseService()
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
  const response = new ResponseService()
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
      passwordEncryptKey
    )
    const encryptCurrentPassword = CryptoJS.AES.encrypt(
      currentPassword,
      passwordEncryptKey
    )
    const decryptCurrentPassword = CryptoJS.AES.decrypt(
      encryptCurrentPassword.toString(),
      passwordEncryptKey
    )
    if (decryptCurrentPassword.toString() !== decryptPassword.toString()) {
      return res.json(response.error({ message: 'Wrong old password' }))
    }
    const encryptNewPassword = CryptoJS.AES.encrypt(
      newPassword,
      passwordEncryptKey
    )
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
