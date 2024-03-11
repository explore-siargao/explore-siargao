import express from 'express'
import isUserLoggedIn from '@/common/middleware/auth/isUserLoggedIn'
import isOriginValid from '@/common/middleware/auth/isOriginValid'
import isCsrfTokenValid from '@/common/middleware/auth/isCsrfTokenValid'
import { getTransaction, updateTransaction } from './services/default'

const router = express.Router()

router.get('/', isCsrfTokenValid, isOriginValid, isUserLoggedIn, getTransaction)
router.patch(
  '/:bookingId',
  isCsrfTokenValid,
  isOriginValid,
  isUserLoggedIn,
  updateTransaction
)

export default router
