import { Application } from 'express'
import { API_ROOT, MOCK_ROOT } from '@repo/constants'
import AssetsRoute from '@/routes/assets'

// api
import UsersRoute from '@/routes/api/users'
import ListingsRoute from '@/routes/api/listings'
import PaymentRoute from '@/routes/api/payments'
import TaxesRoute from '@/routes/api/taxes'
import XenditRoute from '@/routes/api/xendit'
import BookingsRoute from '@/routes/api/bookings'
import TransactionsRoute from '@/routes/api/transactions'
import ReportsRoute from '@/routes/api/reports'

// mock
import MockUsersRoute from '@/routes/mock/users'
import MockBookingsRoute from '@/routes/mock/bookings'
import MockListingsRoute from '@/routes/mock/listings'
import MockCartRoute from '@/routes/mock/carts'
import MockPropertiesRoute from '@/routes/mock/properties'
import MockBookableUnitTypeRoute from '@/routes/mock/bookableUnitType'
import MockReservationsRoute from '@/routes/mock/reservations'
import MockBookableUnit from '@/routes/mock/bookableUnit'

export default function (app: Application) {
  app.use(`/assets`, AssetsRoute)
  // API
  app.use(`${API_ROOT}/users`, UsersRoute)
  app.use(`${API_ROOT}/payments`, PaymentRoute)
  app.use(`${API_ROOT}/taxes`, TaxesRoute)
  app.use(`${API_ROOT}/listings`, ListingsRoute)
  app.use(`${API_ROOT}/xendit`, XenditRoute)
  app.use(`${API_ROOT}/bookings`, BookingsRoute)
  app.use(`${API_ROOT}/transactions`, TransactionsRoute)
  app.use(`${API_ROOT}/reports`, ReportsRoute)

  // MOCK
  app.use(`${MOCK_ROOT}/users`, MockUsersRoute)
  app.use(`${MOCK_ROOT}/bookings`, MockBookingsRoute)
  app.use(`${MOCK_ROOT}/listings`, MockListingsRoute)
  app.use(`${MOCK_ROOT}/carts`, MockCartRoute)
  app.use(`${MOCK_ROOT}/properties`, MockPropertiesRoute)
  app.use(`${MOCK_ROOT}/bookable-unit-type`, MockBookableUnitTypeRoute)
  app.use(`${MOCK_ROOT}/reservations`, MockReservationsRoute)
  app.use(`${MOCK_ROOT}/bookable-unit`, MockBookableUnit)
}
