import isUserLoggedIn from '@/common/middleware/isLoggedIn'
import express from 'express'
import {
  addpaymentMethod,
  getPaymentMethods,
  removePaymentmethod,
} from './service/paymentMethod'

const router = express.Router()
router.post('/:userId/payment-method', isUserLoggedIn, addpaymentMethod)
router.get('/:userId/payment-method', isUserLoggedIn, getPaymentMethods)
router.delete(
  '/:userId/payment-method/remove/:paymentMethodId',
  isUserLoggedIn,
  removePaymentmethod
)
export default router
