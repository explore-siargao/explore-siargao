import express from 'express'
import { addUpdateVat, getVat } from './services/default'
import isUserLoggedIn from '@/common/middleware/auth/isUserLoggedIn'
import isOriginValid from '@/common/middleware/auth/isOriginValid'
import isCsrfTokenValid from '@/common/middleware/auth/isCsrfTokenValid'

const router = express.Router()

router.post(
  '/', 
  isOriginValid,
  isCsrfTokenValid,
  isUserLoggedIn,
  addUpdateVat
)
router.get(
  '/:userId',
  isOriginValid,
  isCsrfTokenValid,
  isUserLoggedIn,
  getVat
)

export default router
