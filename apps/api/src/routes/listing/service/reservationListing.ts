import { prisma } from '@/common/helpers/prismaClient'
import { Z_ReservationListing } from '@repo/contract'
import { Request, Response } from 'express'
import { ResponseService } from '@/common/service/response'
import { UNKNOWN_ERROR_OCCURRED, USER_NOT_EXIST } from '@/common/constants'

const response = new ResponseService()
export const getReservation = async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  try {
    const getReservation = await prisma.reservationListing.findFirst({
      where: {
        id: id,
      },
      include: {
        user: {
          include: {
            personalInfo: true,
          },
        },
        listing: {
          include: {
            hostedBy: {
              include: {
                personalInfo: true,
              },
            },
            listingDescription: true,
            price: true,
            cancellationPolicies: {
              include: {
                rules: true,
              },
            },
            houseRules: {
              include: {
                rules: true,
              },
            },
            review: true,
          },
        },
      },
    })

    if (getReservation) {
      const newData = {
        user: {
          fullName:
            getReservation.user.personalInfo?.firstName +
            ' ' +
            getReservation.user.personalInfo?.lastName,
          phoneNumber: getReservation.user.personalInfo?.phoneNumber,
        },
        listing: {
          title: getReservation.listing.title,
          image: JSON.parse(getReservation.listing.imageUrls)[0],

          hostedBy:
            getReservation.listing.hostedBy.personalInfo?.firstName +
            ' ' +
            getReservation.listing.hostedBy.personalInfo?.lastName,
          description:
            getReservation.listing.listingDescription?.generalDescription ? 
            getReservation.listing.listingDescription?.generalDescription :
            "No description yet",
            cleaningFee: getReservation.listing.price.cleaningFee,
            serviceFee:getReservation.listing.price.serviceFee,
          cancelationPolicies: getReservation.listing.cancellationPolicies[0],
          generalRule: getReservation.listing.houseRules[0],
          reviewRate: 5.0, // No formula yet because model is not match to latest model of review
        },
        isNight: getReservation.isNight,
        reservationDates: getReservation.reservationDate,
        guestCount: getReservation.guestCount,
        messageToHost: getReservation.messageToHost
          ? getReservation.messageToHost
          : 'No message',
        currentFee: getReservation.currentFee,
        totalFee: getReservation.totalFee,
        balanceFee: getReservation.totalFee - getReservation.currentFee,
      }
      res.json(
        response.success({
          item: newData,
          allItemCount: 1,
          message: '',
        })
      )
    } else {
      res.json(
        response.success({
          item: getReservation,
          allItemCount: 0,
          message: 'No Listing Reservation found',
        })
      )
    }
  } catch (err: any) {
    const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED
    res.json(response.error({ message: message }))
  }
}

export const addReservation = async (req: Request, res: Response) => {
  const userId = Number(req.params.userId)
  const {
    reservationDate,
    currentFee,
    totalFee,
    guestCount,
    isNight,
    messageToHost,
    paymentMethodId,
    listingId,
  } = req.body

  const isValidInput = Z_ReservationListing.safeParse(req.body)
  try {
    const getUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })

    if (!getUser) {
      return res.json(response.error({ message: USER_NOT_EXIST }))
    }
    if (!isValidInput.success) {
      return res.json(
        response.error({ message: JSON.parse(isValidInput.error.message) })
      )
    }

    const newReservation = await prisma.reservationListing.create({
      data: {
        userId: userId,
        listingId: listingId,
        paymentMethodId: paymentMethodId,
        reservationDate: reservationDate,
        currentFee: currentFee,
        totalFee: totalFee,
        guestCount: guestCount,
        status: 'Pending',
        isNight: isNight,
        messageToHost: messageToHost,
      },
    })
    res.json(
      response.success({
        item: [newReservation],
        allItemCount: 1,
        message: 'Reservation successfully added',
      })
    )
  } catch (err: any) {
    const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED
    res.json(response.error({ message: message }))
  }
}
