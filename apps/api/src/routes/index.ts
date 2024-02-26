import { Application } from 'express'
import AssetsRoute from '@/routes/assets'
import UsersRoute from '@/routes/users'
import ListingsRoute from '@/routes/listings'
import PaymentRoute from '@/routes/payments'
import TaxesRoute from '@/routes/taxes'
import XenditRoute from '@/routes/xendit'
import BookingsRoute from '@/routes/bookings'
import TransactionsRoute from '@/routes/transactions'
import { API_ROOT } from '@repo/constants'

export default function (app: Application) {
  app.use(`/assets`, AssetsRoute)
  app.use(`${API_ROOT}/users`, UsersRoute)
  app.use(`${API_ROOT}/payments`, PaymentRoute)
  app.use(`${API_ROOT}/taxes`, TaxesRoute)
  app.use(`${API_ROOT}/listings`, ListingsRoute)
  app.use(`${API_ROOT}/xendit`, XenditRoute)
  app.use(`${API_ROOT}/bookings`, BookingsRoute)
  app.use(`${API_ROOT}/transactions`, TransactionsRoute)
}
