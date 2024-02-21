import { ApiService } from '@/common/service/api';
import { ResponseService } from '@/common/service/response';
import { Response, Request } from 'express'
import { randomUUID } from 'crypto'
import { REQUIRED_VALUE_EMPTY } from '@/common/constants';

const response = new ResponseService()
const apiXendit = new ApiService('xendit')

export const cardSingleUse = async (req: Request, res: Response) => {
  try {
    const data = {
      type: 'CARD',
      card: {
        currency: 'PHP',
        channel_properties: {
          success_return_url: 'https://redirect.me/goodstuff',
          failure_return_url: 'https://redirect.me/badstuff',
        },
        card_information: {
          card_number: '4000000000001091',
          expiry_month: '12',
          expiry_year: '2027',
          cvv: '123',
          cardholder_name: 'John Doe',
        },
      },
      reusability: 'ONE_TIME_USE',
    }
    const req = await apiXendit.post(`/v2/payment_methods`, data, false, true)
    return res.json(response.success({ item: req }))
  } catch (err: any) {
    return res.json(response.error({ message: err.message }))
  }
}

export const cardMultiUse = async (req: Request, res: Response) => {
  try {
    const data = {
      type: 'CARD',
      card: {
        currency: 'PHP',
        channel_properties: {
          skip_three_d_secure: true,
          success_return_url: 'https://redirect.me/goodstuff',
          failure_return_url: 'https://redirect.me/badstuff',
        },
        card_information: {
          card_number: '4000000000001091',
          expiry_month: '12',
          expiry_year: '2027',
          cvv: '123',
          cardholder_name: 'John Doe',
        },
      },
      "reusability": "MULTIPLE_USE",
    }
    const req = await apiXendit.post(`/v2/payment_methods`, data, false, true)
    return res.json(response.success({ item: req }))
  } catch (err: any) {
    return res.json(response.error({ message: err.message }))
  }
}

export const cardCreatePayment = async (req: Request, res: Response) => {
  const { paymentMethodId, amount } = req.body
  if (paymentMethodId && amount) {
    try {
      const data = {
        "amount": amount,
        "currency": "PHP",
        "payment_method_id": paymentMethodId,
        "capture_method": "MANUAL"
      }
      const req = await apiXendit.post(`/payment_requests`, data, false, true);
      return res.json(response.success({ item: req }))
    } catch (err: any) {
      return res.json(response.error({ message: err.message }))
    }
  } else {
    return res.json(response.error({ message: REQUIRED_VALUE_EMPTY }))
  }
}

export const cardInitiatePayment = async (req: Request, res: Response) => {
  const { paymentRequestId } = req.body
  if (paymentRequestId) {
    try {
      const data = {
        "capture_amount": 1500,
        "reference_id": `capture-reference-${randomUUID}`
      }
      const req = await apiXendit.post(`/payment_requests/${paymentRequestId}/captures`, data, false, true);
      return res.json(response.success({ item: req }))
    } catch (err: any) {
      return res.json(response.error({ message: err.message }))
    }
  } else {
    return res.json(response.error({ message: REQUIRED_VALUE_EMPTY }))
  }
}

export const gcashCreatePayment = async (req: Request, res: Response) => {
  const { amount } = req.body
  if (amount) {
    try {
      const data = {
        "amount": amount,
        "currency": "PHP",
        "country": "PH",
        "payment_method": {
          "type": "EWALLET",
          "ewallet": {
            "channel_code": "GCASH",
            "channel_properties": {
              "success_return_url": "https://redirect.me/goodstuff",
              "failure_return_url": "https://redirect.me/goodstuff"
            }
          },
          "reusability": "ONE_TIME_USE"
        }
      }
      const req = await apiXendit.post(`/payment_requests`, data, false, true);
      return res.json(response.success({ item: req }))
    } catch (err: any) {
      return res.json(response.error({ message: err.message }))
    }
  } else {
    return res.json(response.error({ message: REQUIRED_VALUE_EMPTY }))
  }
}
