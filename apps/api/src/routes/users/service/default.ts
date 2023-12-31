import { Response, Request } from 'express'
import { PrismaClient } from '@prisma/client'
import CryptoJS from 'crypto-js'
import { encryptKey } from '@/common/config'

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const prisma = new PrismaClient()
    const users = await prisma.user.findMany({})
    if (users.length > 0) {
      res.json({
        error: false,
        items: users,
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
        firstName: req.body.firstName,
        middleName: '',
        registrationType: req.body.registrationType,
        lastName: req.body.lastName,
        address: '',
        birthDate: req.body.birthDate,
        contactNumber: '',
        role: 'User',
        password: req.body.password ? String(encryptPassword) : null,
      },
    })
    res.json({
      error: false,
      item: newUser,
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
