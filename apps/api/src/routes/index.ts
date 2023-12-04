import { Application } from 'express'
import UsersRoute from '@/routes/users'
import ListingRoute from '@/routes/listing'
import { API_ROOT } from '@repo/constants'

export default function (app: Application) {
  app.use(`${API_ROOT}/users`, UsersRoute)
  app.use(`${API_ROOT}/listing`, ListingRoute)
}
