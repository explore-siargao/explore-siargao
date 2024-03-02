import express from 'express'
import isUserLoggedIn from '@/common/middleware/auth/isUserLoggedIn'
import isOriginValid from '@/common/middleware/auth/isOriginValid'
import isCsrfTokenValid from '@/common/middleware/auth/isCsrfTokenValid'
import {
  getBookings,
  addBooking,
  updateBooking,
  deleteBooking,
  getBookingByHost,
} from './services/default'
import {
  getPaidEarnings,
  getThisMonthEarnings,
  getUpcomingEarnings,
} from './services/earnings'

const router = express.Router()

router.get('/', isCsrfTokenValid, isOriginValid, isUserLoggedIn, getBookings)
router.get(
  '/:hostId',
  isCsrfTokenValid,
  isOriginValid,
  isUserLoggedIn,
  getBookingByHost
)
router.post('/', isCsrfTokenValid, isOriginValid, isUserLoggedIn, addBooking)
router.patch(
  '/:id',
  isCsrfTokenValid,
  isOriginValid,
  isUserLoggedIn,
  updateBooking
)
router.delete(
  '/:id',
  isCsrfTokenValid,
  isOriginValid,
  isUserLoggedIn,
  deleteBooking
)

router.get('/this-month', getThisMonthEarnings)
router.get('/upcoming', getUpcomingEarnings)
router.get('/paid', getPaidEarnings)

export default router
