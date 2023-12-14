import isUserLoggedIn from '@/common/middleware/auth/isUserLoggedIn'
import express from 'express'
import {
  addpaymentMethod,
  getPaymentMethods,
  removePaymentmethod,
  updatePaymentMethod,
} from './service/paymentMethod'
import { addCoupon, getUsedCoupons } from './service/coupons'

const router = express.Router()
//payment method
router.post('/:userId/payment-method', isUserLoggedIn, addpaymentMethod)
router.get('/:userId/payment-method', isUserLoggedIn, getPaymentMethods)
router.patch(
  '/:userId/payment-method/:paymentMethodId',
  isUserLoggedIn,
  updatePaymentMethod
)
router.delete(
  '/:userId/payment-method/:paymentMethodId',
  isUserLoggedIn,
  removePaymentmethod
)

//coupons
router.get('/:userId/coupon', getUsedCoupons)
router.post('/:userId/coupon', addCoupon)

export default router
