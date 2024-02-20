import { xenditSecret } from '@/common/config'
import { ResponseService } from '@/common/service/response';
import { Response, Request } from 'express'
import { PaymentMethod as PaymentMethodClient } from 'xendit-node';
import { PaymentMethodParameters, PaymentMethod } from 'xendit-node/payment_method/models'

const xenditPaymentMethodClient = new PaymentMethodClient({secretKey: xenditSecret ?? ''})
const response = new ResponseService()

export const xendit = async (req: Request, res: Response) => {
  const data: PaymentMethodParameters = {
    "type": "CARD",
    "card": {
        "currency": "PHP",
        "channelProperties": {
            "successReturnUrl": "https://redirect.me/goodstuff",
            "failureReturnUrl": "https://redirect.me/badstuff"
        },
        "cardInformation": {
            "cardNumber": "4000000000001091",
            "expiryMonth": "12",
            "expiryYear": "2027",
            "cvv": "123",
            "cardholderName": "John Doe"
        }
    },
    "reusability": "ONE_TIME_USE",
    "description": "This is a description.",
    "metadata": {
        "foo": "bar"
    }
}
  const ress: PaymentMethod = await xenditPaymentMethodClient.createPaymentMethod({
    data
  })
  return res.json(response.success({ message: ress.country }))
}
