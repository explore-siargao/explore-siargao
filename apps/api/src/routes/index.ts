import { Application } from 'express'
import AssetsRoute from '@/routes/assets'
import UsersRoute from '@/routes/users'
import ListingRoute from '@/routes/listing'
import PaymentRoute from '@/routes/payments'
import CountriesRoute from '@/routes/countries'
import taxesRoute from '@/routes/taxes'
import { API_ROOT } from '@repo/constants'

export default function (app: Application) {
  app.use(`/assets`, AssetsRoute)
  app.use(`${API_ROOT}/users`, UsersRoute)
  app.use(`${API_ROOT}/bookings`, ListingRoute)
  app.use(`${API_ROOT}/payments`, PaymentRoute)
  app.use(`${API_ROOT}/countries`, CountriesRoute)
  app.use(`${API_ROOT}/taxes`, taxesRoute)
  app.use(`${API_ROOT}/listing`, ListingRoute)
}
