import { Response, Request } from 'express'
import { PrismaClient } from '@prisma/client'
export const getAllListing = async (req: Request, res: Response) => {
  try {
    const prisma = new PrismaClient()
    const listings = await prisma.listing.findMany({
        where:{deletedAt: null}
    })
    if (listings.length >0) {
      res.json({
        error: false,
        items: listings,
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



export const getListing = async (req: Request, res: Response) => {
    try {
      const prisma = new PrismaClient()
      const listing = await prisma.listing.findFirst({
        where:{id: Number(req.params.id)},
        include:{
            price:true,
            highLights:true,
            hostedBy:true,
            placeOffers:true,
            thingsToKnow:true
        }
      })
      if (listing!==null) {
        res.json({
          error: false,
          items: listing,
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
