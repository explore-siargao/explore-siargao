import { Response, Request } from 'express'
import { PrismaClient } from '@prisma/client'
import { REQUIRED_VALUE_EMPTY } from '@repo/constants'
import { ResponseService } from '@/common/service/response'
import { Z_Listing } from '@repo/contract'

const prisma = new PrismaClient()
const response = new ResponseService()
export const getAllListing = async (req: Request, res: Response) => {
  try {
    const listings = await prisma.listing.findMany({
      include: {
        price: true,
        highLights: {
          include: {
            highlights: true,
          },
        },
        hostedBy: true,
        placeOffers: {
          include: {
            placeOffer: true,
          },
        },
        thingsToKnow: true,
        review: true,
        wishes: true,
      },
    })
    if (listings.length > 0) {
      res.json(
        response.success({
          items: listings,
          allItemCount: listings.length,
          message: '',
        })
      )
    } else {
      res.json(
        response.success({
          items: listings,
          allItemCount: listings.length,
          message: 'No data found',
        })
      )
    }
  } catch (err: any) {
    res.json(response.error({ message: err.message }))
  }
}

export const getListing = async (req: Request, res: Response) => {
  try {
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
      res.json(
        response.success({
          item: listing,
          allItemCount: 1,
          message: '',
        })
      )
    } else {
      res.json(
        response.success({
          item: listing,
          allItemCount: 0,
          message: 'No data found',
        })
      )
    }
  } catch (err: any) {
    res.json(response.error({ message: err.message }))
  }
}

export const addListing = async (req: Request, res: Response) => {
  const hostId = Number(req.params.hostId)
  const isValidInput = Z_Listing.safeParse(req.body)
  const {
    imageUrls,
    title,
    category,
    description,
    address,
    fee,
    latitude,
    longitude,
    cleaningFee,
    serviceFee,
    checkIn,
    checkOut,
    countGuest,
    isNight,
    guests,
    bedRooms,
    beds,
    bathRooms
  } = req.body
  if (isValidInput.success) {
    try {
      const getHost = await prisma.user.findFirst({
        where: {
          id: hostId,
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
          countGuest &&
          guests &&
          bedRooms &&
          beds && 
          bathRooms
        ) {
          const newPrice = await prisma.listingPrice.create({
            data: {
              fee: fee,
              cleaningFee: cleaningFee,
              serviceFee: serviceFee,
              checkIn: checkIn,
              checkOut: checkOut,
              countGuest: countGuest,
              isNight: isNight,
            },
          })

          const newBasicAboutPlace = await prisma.basicAboutPlace.create({
            data:{
              guests:guests,
              bedRooms:bedRooms,
              beds:beds,
              bathRooms:bathRooms
            }
          })
          const newListing = await prisma.listing.create({
            data: {
              imageUrls: JSON.stringify(imageUrls),
              title: title,
              category: category,
              description: description,
              address: address,
              longitude: longitude,
              latitude: latitude,
              hostedById: hostId,
              listingPriceId: Number(newPrice.id),
              basicAboutPlaceId:Number(newBasicAboutPlace.id)
            },
          })

          res.json(
            response.success({
              item: newListing,
              allItemCount: 1,
              message: 'Listing item successfully added',
            })
          )
        } else {
          res.json(response.error({ message: REQUIRED_VALUE_EMPTY }))
        }
      } else {
        res.json(
          response.error({ message: 'This host not exist to our system' })
        )
      }
    } catch (e: any) {
      res.json(response.error({ message: e.message }))
    }
  } else {
    res.json(response.error({ message: JSON.parse(isValidInput.error.message) }))
  }
}
