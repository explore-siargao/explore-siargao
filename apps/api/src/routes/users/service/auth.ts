import { Response, Request } from 'express'
import { PrismaClient } from '@prisma/client'

export const manual = async (req: Request, res: Response) => {
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

export const facebook = async (req: Request, res: Response) => {
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

export const google = async (req: Request, res: Response) => {
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