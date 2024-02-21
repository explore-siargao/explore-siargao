import express from 'express'
import isUserLoggedIn from '@/common/middleware/auth/isUserLoggedIn'
import isOriginValid from '@/common/middleware/auth/isOriginValid'
import isCsrfTokenValid from '@/common/middleware/auth/isCsrfTokenValid'
import { cardMultiUse, cardSingleUse, cardCreatePayment, cardInitiatePayment, gcashCreatePayment } from './services/default'

const router = express.Router()

router.post('/card-single-use', cardSingleUse)
router.post('/card-multi-use', cardMultiUse)
router.post('/card-create-payment', cardCreatePayment)
router.post('/card-initiate-payment', cardInitiatePayment)
router.post('/gcash-create-payment', gcashCreatePayment)

export default router
