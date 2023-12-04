import { Response, Request } from 'express'
import { PrismaClient } from '@prisma/client'
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
