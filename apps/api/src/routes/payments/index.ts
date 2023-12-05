import isUserLoggedIn from '@/common/middleware/isLoggedIn'
import express from 'express'
import { addpaymentMethod } from './service/paymentMethod'

const router = express.Router()
router.post('/:userId/paymentMethod', isUserLoggedIn, addpaymentMethod)

export default router
