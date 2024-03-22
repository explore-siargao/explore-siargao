import { ApiService } from '@/common/service/api'
import { ResponseService } from '@/common/service/response'
import { Response, Request } from 'express'
import { randomUUID } from 'crypto'
import {
  REQUIRED_VALUE_EMPTY,
  UNKNOWN_ERROR_OCCURRED,
} from '@/common/constants'
import { webUrl } from '@repo/env-vars'
import { EncryptionService } from '@repo/services'
import { T_CardInfo } from '@repo/contract'

const response = new ResponseService()
const apiXendit = new ApiService('xendit')

const encryptionService = new EncryptionService('card')

export const getPaymentRequest = async (req: Request, res: Response) => {
  const id = req.query.id
  if (id) {
    try {
      const pr = await apiXendit.get(`/payment_requests/${id}`, undefined, true)
      res.json(
        response.success({
          item: pr,
        })
      )
    } catch (err: any) {
      const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED
      res.json(response.error({ message }))
    }
  } else {
    res.json(
      response.error({
        message: REQUIRED_VALUE_EMPTY,
      })
    )
  }
}

export const getPaymentMethod = async (req: Request, res: Response) => {
  const id = req.query.id
  if (id) {
    try {
      const pm = await apiXendit.get(`/payment_methods/${id}`, undefined, true)
      res.json(
        response.success({
          item: pm,
        })
      )
    } catch (err: any) {
      const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED
      res.json(response.error({ message }))
    }
  } else {
    res.json(
      response.error({
        message: REQUIRED_VALUE_EMPTY,
      })
    )
  }
}

export const cardSingleUse = async (req: Request, res: Response) => {
  const { cardInfo, cvv, bookingId } = req.body
  if (cardInfo && bookingId) {
    const { cardNumber, expirationMonth, expirationYear, cardholderName } =
      encryptionService.decrypt(cardInfo) as T_CardInfo
    try {
      const data = {
        type: 'CARD',
        card: {
          currency: 'PHP',
          channel_properties: {
            success_return_url: `${webUrl}/bookings/${bookingId}/success-payment`,
            failure_return_url: `${webUrl}/bookings/${bookingId}/error-payment`,
          },
          card_information: {
            card_number: cardNumber,
            expiry_month: expirationMonth,
            expiry_year: expirationYear,
            cvv: cvv,
            cardholder_name: cardholderName,
          },
        },
        reusability: 'ONE_TIME_USE',
      }
      const req = await apiXendit.post(`/v2/payment_methods`, data, false, true)
      return res.json(response.success({ item: req }))
    } catch (err: any) {
      return res.json(response.error({ message: err.message }))
    }
  } else {
    return res.json(response.error({ message: REQUIRED_VALUE_EMPTY }))
  }
}

export const cardCreatePayment = async (req: Request, res: Response) => {
  const { paymentMethodId, amount } = req.body
  if (paymentMethodId && amount) {
    try {
      const data = {
        amount: Number(amount),
        currency: 'PHP',
        payment_method_id: paymentMethodId,
      }
      const req = await apiXendit.post(`/payment_requests`, data, false, true)
      return res.json(response.success({ item: req }))
    } catch (err: any) {
      return res.json(response.error({ message: err.message }))
    }
  } else {
    return res.json(response.error({ message: REQUIRED_VALUE_EMPTY }))
  }
}

export const cardInitiatePayment = async (req: Request, res: Response) => {
  const { paymentRequestId, amount } = req.body
  if (paymentRequestId && amount) {
    try {
      const data = {
        capture_amount: amount,
        reference_id: `capture-reference-${randomUUID}`,
      }
      const req = await apiXendit.post(
        `/payment_requests/${paymentRequestId}/captures`,
        data,
        false,
        true
      )
      return res.json(response.success({ item: req }))
    } catch (err: any) {
      return res.json(response.error({ message: err.message }))
    }
  } else {
    return res.json(response.error({ message: REQUIRED_VALUE_EMPTY }))
  }
}

export const gcashCreatePayment = async (req: Request, res: Response) => {
  const { amount, bookingId } = req.body
  if (amount && bookingId) {
    try {
      const data = {
        amount: amount,
        currency: 'PHP',
        country: 'PH',
        payment_method: {
          type: 'EWALLET',
          ewallet: {
            channel_code: 'GCASH',
            channel_properties: {
              success_return_url: `${webUrl}/bookings/${bookingId}/success-payment`,
              failure_return_url: `${webUrl}/bookings/${bookingId}/error-payment`,
            },
          },
          reusability: 'ONE_TIME_USE',
        },
      }
      const req = await apiXendit.post(`/payment_requests`, data, false, true)
      return res.json(response.success({ item: req }))
    } catch (err: any) {
      return res.json(response.error({ message: err.message }))
    }
  } else {
    return res.json(response.error({ message: REQUIRED_VALUE_EMPTY }))
  }
}
