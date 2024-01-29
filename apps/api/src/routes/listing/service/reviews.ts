import { ResponseService } from '@/common/service/response'
import { PrismaClient } from '@prisma/client'
import { REQUIRED_VALUE_EMPTY, USER_NOT_EXIST } from '@repo/constants'
import { Z_Review } from '@repo/contract'
import { Request, Response } from 'express'

const prisma = new PrismaClient()
const response = new ResponseService()

export const getReviewByListing = async (req: Request, res: Response) => {
  const listingId = Number(req.params.listingId)
  try {
    const listing = await prisma.listing.findUnique({
      where: {
        id: listingId,
      },
    })
    if (listing) {
      const reviews = await prisma.review.findMany({
        where: {
          listingId: listingId,
        },
      })
      if (reviews.length !== 0) {
        res.json(
          response.success({
            items: reviews,
            allItemCount: reviews.length,
            message: '',
          })
        )
      } else {
        res.json(
          response.success({
            items: reviews,
            allItemCount: reviews.length,
            message: 'No reviews found on this listing item.',
          })
        )
      }
    } else {
      res.json(response.error({ message: 'Listing not exist on our system' }))
    }
  } catch (err: any) {
    res.json(response.error({ message: err.message }))
  }
}

export const getReviewById = async (req: Request, res: Response) => {
  const reviewId = Number(req.params.reviewId)
  try {
    const getReviewById = await prisma.review.findFirst({
      where: {
        id: reviewId,
        deletedAt: null,
      },
    })
    if (getReviewById) {
      res.json(
        response.success({
          item: getReviewById,
          allItemCount: 0,
          message: '',
        })
      )
    } else {
      res.json(response.error({ message: 'Review not found' }))
    }
  } catch (err: any) {
    res.json(response.error({ message: err.message }))
  }
}

export const addReview = async (req: Request, res: Response) => {
  const userId = Number(req.params.userId)
  const {
    listingId,
    cleanLinessRates,
    accuracyRates,
    checkInRates,
    communicationRates,
    locationRates,
    valueRates,
    comment,
  } = req.body
  const inputIsValid = Z_Review.safeParse(req.body)
  if (!inputIsValid.success) {
    return res.json(
      response.error({ message: JSON.parse(inputIsValid.error.message) })
    )
  }
  try {
    const getUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })
    const getListing = await prisma.listing.findUnique({
      where: {
        id: listingId,
      },
    })
    if (!getUser) {
      return res.json(response.error({ message: USER_NOT_EXIST }))
    }
    if (!getListing) {
      return res.json(response.error({ message: 'Listing not found' }))
    }
    const newReview = await prisma.review.create({
      data: {
        userId: userId,
        listingId: listingId,
        cleanLinessRates: cleanLinessRates,
        accuracyRates: accuracyRates,
        checkInRates: checkInRates,
        communicationRates: communicationRates,
        locationRates: locationRates,
        valueRates: valueRates,
        comment: comment,
      },
    })
    res.json(
      response.success({
        item: newReview,
        allItemCount: 1,
        message: 'Your Review successfully posted',
      })
    )
  } catch (err: any) {
    res.json(response.error({ message: err.message }))
  }
}

export const updateReview = async (req: Request, res: Response) => {
  const userId = Number(req.params.userId)
  const reviewId = Number(req.params.reviewId)
  const {
    cleanLinessRates,
    accuracyRates,
    checkInRates,
    communicationRates,
    locationRates,
    valueRates,
    comment,
  } = req.body
  if (
    cleanLinessRates ||
    accuracyRates ||
    checkInRates ||
    communicationRates ||
    locationRates ||
    valueRates ||
    comment
  ) {
    try {
      const getUser = await prisma.user.findUnique({
        where: {
          id: userId,
        },
      })
      const getReview = await prisma.review.findUnique({
        where: {
          id: reviewId,
        },
      })
      if (!getUser) {
        return res.json(response.error({ message: USER_NOT_EXIST }))
      }
      if (!getReview) {
        return res.json(response.error({ message: 'Review not found' }))
      }
      const updatereview = await prisma.review.update({
        where: {
          id: reviewId,
        },
        data: {
          cleanLinessRates: cleanLinessRates,
          accuracyRates: accuracyRates,
          checkInRates: checkInRates,
          communicationRates: communicationRates,
          locationRates: locationRates,
          valueRates: valueRates,
          comment: comment,
        },
      })
      res.json(
        response.success({
          item: updatereview,
          allItemCount: 1,
          message: 'Review successfully updated',
        })
      )
    } catch (err: any) {
      res.json(response.error({ message: err.message }))
    }
  } else {
    res.json(response.error({ message: REQUIRED_VALUE_EMPTY }))
  }
}

export const deleteReview = async (req: Request, res: Response) => {
  const userId = Number(req.params.userId)
  const reviewId = Number(req.params.reviewId)
  try {
    const getUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })
    const getReview = await prisma.review.findUnique({
      where: {
        id: reviewId,
      },
    })
    if (!getUser) {
      return res.json(
        response.error({
          message: USER_NOT_EXIST,
        })
      )
    }
    if (!getReview) {
      return res.json(
        response.error({
          message: 'Review not found or already deleted',
        })
      )
    }
    const removeReview = await prisma.review.delete({
      where: {
        id: reviewId,
      },
    })
    res.json(
      response.success({
        item: removeReview,
        allItemCount: 1,
        message: 'Review sucessfully deleted',
      })
    )
  } catch (err: any) {
    res.json(response.error({ message: err.message }))
  }
}
