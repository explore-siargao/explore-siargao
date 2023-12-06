import { Application } from 'express'
import UsersRoute from '@/routes/users'
import ListingRoute from '@/routes/listing'
import PaymentRoute from '@/routes/payments'
import { API_ROOT } from '@repo/constants'

export default function (app: Application) {
  app.use(`${API_ROOT}/users`, UsersRoute)
  app.use(`${API_ROOT}/listing`, ListingRoute)
  app.use(`${API_ROOT}/payments`, PaymentRoute)
}
