import { prisma } from '@/common/helpers/prismaClient'
import { Z_ReservationListing } from '@repo/contract'
import { Request, Response } from 'express'
import { ResponseService } from '@/common/service/response'
import {
  REQUIRED_VALUE_EMPTY,
  UNKNOWN_ERROR_OCCURRED,
  USER_NOT_EXIST,
} from '@/common/constants'

const response = new ResponseService()

export const getAllReservationByUser = async (req: Request, res: Response) => {
  const userId = Number(req.params.userId)
  try {
    const getUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })
    if (!getUser) {
      return res.json(response.error({ message: 'No user found!' }))
    }
    const getAllReservationByUserId = await prisma.reservationListing.findMany({
      where: {
        userId: userId,
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
    if (getAllReservationByUserId.length === 0) {
      return res.json(
        response.success({
          items: getAllReservationByUserId,
          allItemCount: getAllReservationByUserId.length,
          message: 'No Listing reservation found!',
        })
      )
    }
    const dataFinal = getAllReservationByUserId.map((newDataEntry) => ({
      user: {
        fullName:
          newDataEntry.user.personalInfo?.firstName +
          ' ' +
          newDataEntry.user.personalInfo?.lastName,
        phoneNumber: newDataEntry.user.personalInfo?.phoneNumber,
      },
      listing: {
        title: newDataEntry.listing.title,
        image: JSON.parse(newDataEntry.listing.imageKeys)[0],

        hostedBy:
          newDataEntry.listing.hostedBy.personalInfo?.firstName +
          ' ' +
          newDataEntry.listing.hostedBy.personalInfo?.lastName,
        description: newDataEntry.listing.listingDescription?.generalDescription
          ? newDataEntry.listing.listingDescription?.generalDescription
          : 'No description yet!',
        cleaningFee: newDataEntry.listing.price.cleaningFee,
        serviceFee: newDataEntry.listing.price.serviceFee,
        cancelationPolicies: newDataEntry.listing.cancellationPolicies[0],
        generalRule: newDataEntry.listing.houseRules[0],
        reviewRate: 5.0,
      },
      isNight: newDataEntry.isNight,
      reservationDates: newDataEntry.reservationDate,
      guestCount: JSON.parse(newDataEntry.guestCount),
      messageToHost: newDataEntry.messageToHost
        ? newDataEntry.messageToHost
        : 'No message!',
      currentFee: newDataEntry.currentFee,
      totalFee: newDataEntry.totalFee,
      balanceFee: newDataEntry.totalFee - newDataEntry.currentFee,
    }))
    res.json(
      response.success({
        items: dataFinal,
        allItemCount: getAllReservationByUserId.length,
        message: '',
      })
    )
  } catch (err: any) {
    const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED
    res.json(response.error({ message: message }))
  }
}

export const getReservationByListing = async (req: Request, res: Response) => {
  const listingId = Number(req.params.listingId)
  try {
    const getListing = await prisma.listing.findUnique({
      where: {
        id: listingId,
      },
    })
    if (!getListing) {
      return res.json(response.error({ message: 'No Listing found' }))
    }
    const getReservationsByListingId = await prisma.reservationListing.findMany(
      {
        where: {
          listingId: listingId,
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
      }
    )
    if (getReservationsByListingId.length === 0) {
      return res.json(
        response.success({
          items: getReservationsByListingId,
          allItemCount: getReservationsByListingId.length,
          message: 'No Listing reservation found',
        })
      )
    }
    const finalData = getReservationsByListingId.map((newData) => ({
      user: {
        fullName:
          newData.user.personalInfo?.firstName +
          ' ' +
          newData.user.personalInfo?.lastName,
        phoneNumber: newData.user.personalInfo?.phoneNumber,
      },
      listing: {
        title: newData.listing.title,
        image: JSON.parse(newData.listing.imageKeys)[0],

        hostedBy:
          newData.listing.hostedBy.personalInfo?.firstName +
          ' ' +
          newData.listing.hostedBy.personalInfo?.lastName,
        description: newData.listing.listingDescription?.generalDescription
          ? newData.listing.listingDescription?.generalDescription
          : 'No description yet',
        cleaningFee: newData.listing.price.cleaningFee,
        serviceFee: newData.listing.price.serviceFee,
        cancelationPolicies: newData.listing.cancellationPolicies[0],
        generalRule: newData.listing.houseRules[0],
        reviewRate: 5.0, // No formula yet because model is not match to latest model of review
      },
      isNight: newData.isNight,
      reservationDates: newData.reservationDate,
      guestCount: JSON.parse(newData.guestCount),
      messageToHost: newData.messageToHost
        ? newData.messageToHost
        : 'No message',
      currentFee: newData.currentFee,
      totalFee: newData.totalFee,
      balanceFee: newData.totalFee - newData.currentFee,
    }))
    res.json(
      response.success({
        items: finalData,
        allItemCount: getReservationsByListingId.length,
        message: '',
      })
    )
  } catch (err: any) {
    const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED
    res.json(response.error({ message: message }))
  }
}

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
          image: JSON.parse(getReservation.listing.imageKeys)[0],

          hostedBy:
            getReservation.listing.hostedBy.personalInfo?.firstName +
            ' ' +
            getReservation.listing.hostedBy.personalInfo?.lastName,
          description: getReservation.listing.listingDescription
            ?.generalDescription
            ? getReservation.listing.listingDescription?.generalDescription
            : 'No description yet',
          cleaningFee: getReservation.listing.price.cleaningFee,
          serviceFee: getReservation.listing.price.serviceFee,
          cancelationPolicies: getReservation.listing.cancellationPolicies[0],
          generalRule: getReservation.listing.houseRules[0],
          reviewRate: 5.0, // No formula yet because model is not match to latest model of review
        },
        isNight: getReservation.isNight,
        reservationDates: getReservation.reservationDate,
        guestCount: JSON.parse(getReservation.guestCount),
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

export const updateReservation = async (req: Request, res: Response) => {
  const userId = Number(req.params.userId)
  const id = Number(req.params.id)
  const { reservationDate, currentFee, guestCount, isNight, messageToHost } =
    req.body

  try {
    const getUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })
    const getReservation = await prisma.reservationListing.findUnique({
      where: {
        id: id,
      },
    })
    if (!getUser) {
      return res.json(response.error({ message: USER_NOT_EXIST }))
    }
    if (!getReservation) {
      return res.json(response.error({ message: 'No reservation found' }))
    }
    if (
      reservationDate ||
      currentFee ||
      guestCount ||
      isNight ||
      messageToHost
    ) {
      const updateReservationListing = await prisma.reservationListing.update({
        where: {
          id: id,
        },
        data: {
          reservationDate: reservationDate,
          currentFee: currentFee,
          guestCount: guestCount,
          isNight: isNight,
          messageToHost: messageToHost,
        },
      })
      res.json(
        response.success({
          item: updateReservationListing,
          allItemCount: 1,
          message: 'Reservation listing successfully updated',
        })
      )
    } else {
      return res.json(response.error({ message: REQUIRED_VALUE_EMPTY }))
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
        guestCount: JSON.stringify(guestCount),
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

export const deleteReservation = async (req: Request, res: Response) => {
  const userId = Number(req.params.userId)
  const id = Number(req.params.id)
  try {
    const getUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })
    const getReservation = await prisma.reservationListing.findUnique({
      where: {
        id: id,
      },
    })
    if (!getUser) {
      return res.json(
        response.error({
          message: USER_NOT_EXIST,
        })
      )
    }
    if (!getReservation) {
      return res.json(
        response.error({
          message: 'Reservation not found or already deleted',
        })
      )
    }
    const removeReservation = await prisma.reservationListing.delete({
      where: {
        id: id,
      },
    })
    res.json(
      response.success({
        item: removeReservation,
        allItemCount: 1,
        message: 'Listing Reservation sucessfully deleted',
      })
    )
  } catch (err: any) {
    res.json(response.error({ message: err.message }))
  }
}
