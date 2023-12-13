import isUserLoggedIn from '@/common/middleware/auth/isUserLoggedIn'
import express from 'express'
import {
  addpaymentMethod,
  getPaymentMethods,
  removePaymentmethod,
  updatePaymentMethod,
} from './service/paymentMethod'

const router = express.Router()
router.post('/:userId/payment-method', isUserLoggedIn, addpaymentMethod)
router.get('/:userId/payment-method', isUserLoggedIn, getPaymentMethods)
router.patch('/:userId/payment-method/:paymentMethodId', updatePaymentMethod)
router.delete(
  '/:userId/payment-method/:paymentMethodId',
  isUserLoggedIn,
  removePaymentmethod
)
export default router
