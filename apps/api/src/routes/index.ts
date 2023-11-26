import { Application } from 'express'
import UsersRoute from '@/routes/users'
import { API_ROOT_ROOT } from '@repo/constants'

export default function (app: Application) {
  app.use(`${API_ROOT_ROOT}/users`, UsersRoute)
}
