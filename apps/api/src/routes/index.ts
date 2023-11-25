import { Application } from 'express'
import UsersRoute from '@/routes/users'
import { API_ROOT } from '@/common/constants'

export default function (app: Application) {
  app.use(`${API_ROOT}/users`, UsersRoute)
}
