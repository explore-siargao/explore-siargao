import { Application } from 'express'
import AssetsRoute from '@/routes/assets'
import UsersRoute from '@/routes/users'
import ListingRoute from '@/routes/listing'
import PaymentRoute from '@/routes/payments'
import CountriesRoute from '@/routes/countries'
import TaxesRoute from '@/routes/taxes'
import XenditRoute from '@/routes/xendit'
import { API_ROOT } from '@repo/constants'

export default function (app: Application) {
  app.use(`/assets`, AssetsRoute)
  app.use(`${API_ROOT}/users`, UsersRoute)
  app.use(`${API_ROOT}/bookings`, ListingRoute)
  app.use(`${API_ROOT}/payments`, PaymentRoute)
  app.use(`${API_ROOT}/countries`, CountriesRoute)
  app.use(`${API_ROOT}/taxes`, TaxesRoute)
  app.use(`${API_ROOT}/listing`, ListingRoute)
  app.use(`${API_ROOT}/xendit`, XenditRoute)
}
