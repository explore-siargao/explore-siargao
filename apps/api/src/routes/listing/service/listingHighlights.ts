import { ResponseService } from '@/common/service/response'
import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()
const response = new ResponseService()

export const getAllListingHighlights = async (req: Request, res: Response) => {
  try {
    const allListingHighlights = await prisma.listingHighLights.findMany({
      where: {
        deletedAt: null,
      },
    })
    res.json(
      response.success({
        items: allListingHighlights,
        allItemCount: allListingHighlights.length,
        message: '',
      })
    )
  } catch (err: any) {
    res.json(response.error({ message: err.message }))
  }
}

export const getListingHighlightsByListing = async (
  req: Request,
  res: Response
) => {
  const listingId = Number(req.params.listingId)
  try {
    const getListing = await prisma.listing.findUnique({
      where: {
        id: listingId,
      },
    })
    if (getListing) {
      const allListingHighlightsByListing =
        await prisma.listingHighLights.findMany({
          where: {
            listingId: listingId,
          },
        })
      res.json(
        response.success({
          items: allListingHighlightsByListing,
          allItemCount: allListingHighlightsByListing.length,
          message: '',
        })
      )
    } else {
      res.json(response.error({ message: 'Listing not found in our system' }))
    }
  } catch (err: any) {
    res.json(response.error({ message: err.message }))
  }
}

export const addListingHighlight = async (req: Request, res: Response) => {}

export const deleteListingHighlight = async (req: Request, res: Response) => {}
