import { xenditUrl } from '@/common/config'
import { ApiService } from '@/common/service/api'
import { ResponseService } from '@/common/service/response'
import { Response, Request } from 'express'
import { randomUUID } from 'crypto'

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
      description: 'This is a description.',
      metadata: {
        foo: 'bar',
      },
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
      reusability: 'MULTIPLE_USE',
      description: 'This is a description.',
      metadata: {
        foo: 'bar',
      },
    }
    const req = await apiXendit.post(`/v2/payment_methods`, data, false, true)
    return res.json(response.success({ item: req }))
  } catch (err: any) {
    return res.json(response.error({ message: err.message }))
  }
}

export const cardCreatePayment = async (req: Request, res: Response) => {
  try {
    const data = {
      amount: 15000,
      currency: 'PHP',
      payment_method_id: '<linked payment method id>',
      description: 'This is a description.',
      metadata: {
        foo: 'bar',
      },
      capture_method: 'MANUAL',
    }
    const req = await apiXendit.post(`/payment_requests`, data, false, true)
    return res.json(response.success({ item: req }))
  } catch (err: any) {
    return res.json(response.error({ message: err.message }))
  }
}

export const cardInitiatePayment = async (req: Request, res: Response) => {
  try {
    const data = {
      capture_amount: 1500,
      reference_id: `capture-reference-${randomUUID}`,
    }
    const req = await apiXendit.post(
      `/payment_requests/:id/captures`,
      data,
      false,
      true
    )
    return res.json(response.success({ item: req }))
  } catch (err: any) {
    return res.json(response.error({ message: err.message }))
  }
}
