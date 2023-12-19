import { Response, Request } from 'express'
import { PrismaClient } from '@prisma/client'
import { REQUIRED_VALUE_EMPTY } from '@repo/constants'
export const getAllListing = async (req: Request, res: Response) => {
  try {
    const prisma = new PrismaClient()
    const listings = await prisma.listing.findMany({
      include: {
        price: true,
        highLights: true,
        hostedBy: true,
        placeOffers: true,
        thingsToKnow: true,
        review: true,
      },
    })
    if (listings.length > 0) {
      res.json({
        error: false,
        items: listings,
        itemCount: listings.length,
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
      where: { id: Number(req.params.id) },
      include: {
        price: true,
        highLights: true,
        hostedBy: true,
        placeOffers: true,
        thingsToKnow: true,
        review: true,
      },
    })
    if (listing !== null) {
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

export const addListing = async (req: Request, res: Response) => {
  const prisma = new PrismaClient()
  const hostId = Number(req.params.hostId)
  const {
    imageUrls,
    title,
    category,
    description,
    address,
    fee,
    cleaningFee,
    serviceFee,
    checkIn,
    checkOut,
    countGuest,
    isNight,
  } = req.body
  try {
    const getHost = await prisma.user.findFirst({
      where: {
        id: hostId,
        // role:"Host"
      },
    })

    if (getHost !== null) {
      if (
        imageUrls &&
        title &&
        category &&
        description &&
        address &&
        fee &&
        cleaningFee &&
        serviceFee &&
        checkIn &&
        checkOut &&
        countGuest
      ) {
        const newPrice = await prisma.listingPrice.create({
          data: {
            fee: fee,
            cleaningFee: cleaningFee,
            serviceFee: serviceFee,
            checkIn: checkIn,
            checkOut: checkOut,
            countGuest: countGuest,
            isNight: isNight
          },
        })
        const newListing = await prisma.listing.create({
          data: {
            imageUrls: JSON.stringify(imageUrls),
            title: title,
            category: category,
            description: description,
            address: address,
            hostedById: hostId,
            listingPriceId: newPrice.id,
          },
        })

        res.json({
          error: false,
          item: newListing,
          itemCount: 1,
          message: 'Listing successfully added',
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
        message: 'This host not exist to our system',
      })
    }
  } catch (e: any) {
    res.json({
      error: true,
      items: null,
      itemCount: 0,
      message: e.message,
    })
  }
}
