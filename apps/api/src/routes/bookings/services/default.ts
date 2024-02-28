import { Response, Request } from 'express'
import {
  REQUIRED_VALUE_EMPTY,
  UNKNOWN_ERROR_OCCURRED,
} from '@/common/constants'
import { ResponseService } from '@/common/service/response'
import { prisma } from '@/common/helpers/prismaClient'
import {
  T_AddBooking,
  T_Booking,
  Z_AddBooking,
  Z_Booking,
} from '@repo/contract'
import { ApiService } from '@/common/service/api'
import { getListingPrice } from '@/common/helpers/getListingPrice'

const apiService = new ApiService()
const XENDIT_ROOT_URL = '/api/xendit'

const response = new ResponseService()
export const getBookings = async (req: Request, res: Response) => {
  try {
    const bookings = await prisma.booking.findMany({
      where: {
        userId: res.locals.user.id,
        deletedAt: null,
      },
    })
    res.json(
      response.success({
        item: bookings,
        allItemCount: bookings.length,
      })
    )
  } catch (err: any) {
    const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED
    res.json(response.error({ message }))
  }
}

export const addBooking = async (req: Request, res: Response) => {
  const inputIsValid = Z_AddBooking.safeParse(req.body)
  if (inputIsValid.success) {
    const { paymentType, cardInfo } = req.body as T_AddBooking
    try {
      if (paymentType === 'GCASH') {
        const newBooking = await prisma.booking.create({
          data: {
            ...req.body,
            userId: res.locals.user.id,
          },
        })

        const totalPrice = await getListingPrice({
          listingId: newBooking.listingId,
          childrenCount: newBooking.childrenCount,
          adultCount: newBooking.adultCount,
          fromDate: String(newBooking.fromDate),
          toDate: String(newBooking.toDate),
        })
        const paymentRequest = await apiService.post(
          `${XENDIT_ROOT_URL}/gcash-create-payment`,
          { amount: totalPrice, bookingId: newBooking.id }
        )
        const newTransaction = await prisma.transaction.create({
          data: {
            userId: res.locals.user.id,
            xenditPaymentRequestId: paymentRequest.item?.id,
          },
        })
        const updatedBooking = await prisma.booking.update({
          where: {
            id: newBooking.id,
          },
          data: {
            ...req.body,
            transactionId: newTransaction.id,
            totalFee:totalPrice,
            xenditPaymentRequestId: paymentRequest.item?.id,
            xenditPaymentReferenceId: paymentRequest.item?.reference_id,
          },
        })

        res.json(
          response.success({
            item: updatedBooking,
            message: 'Successfully confirmed booking',
            action: {
              type: 'GCASH_PAYMENT',
              description: paymentType,
              link: paymentRequest.item?.actions[0].url,
            },
          })
        )
      } else if (
        paymentType === 'CreditDebit' ||
        paymentType === 'SavedCreditDebit'
      ) {
        const newBooking = await prisma.booking.create({
          data: {
            ...req.body,
            userId: res.locals.user.id,
          },
        })
        const totalPrice = await getListingPrice({
          listingId: newBooking.listingId,
          childrenCount: newBooking.childrenCount,
          adultCount: newBooking.adultCount,
          fromDate: String(newBooking.fromDate),
          toDate: String(newBooking.toDate),
        })
        const paymentMethod = await apiService.post(
          `${XENDIT_ROOT_URL}/card-single-use`,
          { cardInfo, bookingId: newBooking.id }
        )
        const paymentRequest = await apiService.post(
          `${XENDIT_ROOT_URL}/card-create-payment`,
          { paymentMethodId: paymentMethod.item?.id, amount: totalPrice }
        )
        const newTransaction = await prisma.transaction.create({
          data: {
            userId: res.locals.user.id,
            xenditPaymentRequestId: paymentRequest.item?.id,
          },
        })
        const updatedBooking = await prisma.booking.update({
          where: {
            id: newBooking.id,
          },
          data: {
            ...req.body,
            totalFee:totalPrice,
            transactionId: newTransaction.id,
            xenditPaymentMethodId: paymentMethod.item?.id,
            xenditPaymentRequestId: paymentRequest.item?.id,
            xenditPaymentReferenceId: paymentRequest.item?.reference_id,
          },
        })
        res.json(
          response.success({
            item: updatedBooking,
            message: 'Successfully paid and booked',
            action: {
              type: 'CARD_PAYMENT',
              description: paymentType,
              link: paymentRequest.item?.actions[0].url,
            },
          })
        )
      }
    } catch (err: any) {
      const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED
      res.json(response.error({ message: message }))
    }
  } else {
    res.json(
      response.error({
        message: JSON.parse(inputIsValid.error.message),
      })
    )
  }
}

export const updateBooking = async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const inputIsValid = Z_Booking.safeParse(req.body)
  if (id) {
    if (inputIsValid.success) {
      try {
        const updatedBooking = await prisma.booking.update({
          where: {
            id: id,
          },
          data: req.body,
        })
        res.json(
          response.success({
            item: updatedBooking,
            message: 'Successfully updated booking',
          })
        )
      } catch (err: any) {
        const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED
        res.json(response.error({ message: message }))
      }
    } else {
      res.json(
        response.error({
          message: JSON.parse(inputIsValid.error.message),
        })
      )
    }
  } else {
    res.json(
      response.error({
        message: REQUIRED_VALUE_EMPTY,
      })
    )
  }
}

export const deleteBooking = async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  if (id) {
    try {
      const deletedBooking = await prisma.booking.update({
        where: {
          id: id,
        },
        data: {
          deletedAt: new Date(),
        },
      })
      res.json(
        response.success({
          item: deletedBooking,
          message: 'Successfully updated booking',
        })
      )
    } catch (err: any) {
      const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED
      res.json(response.error({ message: message }))
    }
  } else {
    res.json(
      response.error({
        message: REQUIRED_VALUE_EMPTY,
      })
    )
  }
}
