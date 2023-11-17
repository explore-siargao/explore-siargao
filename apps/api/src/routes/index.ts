import { Application } from 'express'
import { API_ROOT } from 'constants/'
import UsersRoute from './users'

export default function (app: Application) {
  app.use(`${API_ROOT}/users`, UsersRoute)
}
