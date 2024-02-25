import express from 'express'
import isUserLoggedIn from '@/common/middleware/auth/isUserLoggedIn'
import isOriginValid from '@/common/middleware/auth/isOriginValid'
import isCsrfTokenValid from '@/common/middleware/auth/isCsrfTokenValid'
import {
  getBookings,
  addBooking,
  updateBooking,
  deleteBooking,
} from './services/default'

const router = express.Router()

router.get(
  '/',
  isCsrfTokenValid,
  isOriginValid,
  isUserLoggedIn,
  getBookings
)
router.post(
  '/',
  isCsrfTokenValid,
  isOriginValid,
  isUserLoggedIn,
  addBooking
)
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

export default router
