import { ResponseService } from '@/common/service/response'
import { PrismaClient } from '@prisma/client'
import { REQUIRED_VALUE_EMPTY, USER_NOT_EXIST } from '@/common/constants'
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
        include: {
          user: {
            select: {
              personalInfo: {
                select: {
                  firstName: true,
                  middleName: true,
                  lastName: true,
                  address: true,
                },
              },
            },
          },
        },
      })
      let overallRating = 0
      let cleanlinessAverage = 0
      let accuracyAverage = 0
      let checkInAverage = 0
      let communicationAverage = 0
      let locationAverage = 0
      let valueAverage = 0
      let totalCleanliness = 0
      let totalAccuracy = 0
      let totalCheckIn = 0
      let totalCommunication = 0
      let totalLocation = 0
      let totalValue = 0
      let totalRating = 0
      const transformedReviews = reviews.map((review) => {
        totalCleanliness = totalCleanliness + review.cleanLinessRates
        totalAccuracy = totalAccuracy + review.accuracyRates
        totalCheckIn = totalCheckIn + review.checkInRates
        totalCommunication = totalCommunication + review.communicationRates
        totalLocation = totalLocation + review.locationRates
        totalValue = totalValue + review.valueRates
        cleanlinessAverage = totalCleanliness / reviews.length
        accuracyAverage = totalAccuracy / reviews.length
        checkInAverage = totalCheckIn / reviews.length
        communicationAverage = totalCommunication / reviews.length
        locationAverage = totalLocation / reviews.length
        valueAverage = totalValue / reviews.length
        return {
          name: `${review?.user?.personalInfo?.firstName} ${review?.user?.personalInfo?.lastName}`,
          rating:
            (review.cleanLinessRates +
              review.accuracyRates +
              review.checkInRates +
              review.communicationRates +
              review.locationRates +
              review.valueRates) /
            6,
          description: review.comment,
          reviewDate: review.createdAt,
          country: review.user.personalInfo?.address?.country,
        }
      })
      if (reviews.length !== 0) {
        res.json(
          response.success({
            item: {
              reviews: transformedReviews,
              average: {
                cleanliness: cleanlinessAverage,
                accuracy: accuracyAverage,
                checkIn: checkInAverage,
                communication: communicationAverage,
                location: locationAverage,
                value: valueAverage,
              },
              overallRating:
                (cleanlinessAverage +
                  accuracyAverage +
                  checkInAverage +
                  communicationAverage +
                  locationAverage +
                  valueAverage) /
                6,
              allItemCount: reviews.length,
            },
            message: '',
          })
        )
      } else {
        res.json(
          response.success({
            item: {
              items: transformedReviews,
              allItemCount: reviews.length,
            },
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

export const getReviewsByUserId = async (req: Request, res: Response) => {
  const userId = Number(req.params.userId)
  try {
    const getReviewByUserId = await prisma.review.findMany({
      where: {
        userId,
        deletedAt: null,
      },
    })
    if (getReviewByUserId) {
      res.json(
        response.success({
          items: getReviewByUserId,
          allItemCount: getReviewByUserId.length,
          message: '',
        })
      )
    } else {
      res.json(response.error({ message: 'User has no reviews' }))
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
