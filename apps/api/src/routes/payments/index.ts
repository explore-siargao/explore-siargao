import isUserLoggedIn from '@/common/middleware/isLoggedIn'
import express from 'express'
import { addpaymentMethod, getPaymentMethods } from './service/paymentMethod'

const router = express.Router()
router.post('/:userId/paymentMethod', isUserLoggedIn, addpaymentMethod)
router.get('/:userId/paymentMethod', isUserLoggedIn, getPaymentMethods)
export default router
