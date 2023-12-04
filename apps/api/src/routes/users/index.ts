import express from 'express'
import { addUser, getAllUsers } from './service/default'
import {
  verifySession,
  register,
  manual,
  info,
  forgot,
  forgotVerify,
  mfa,
  mfaVerify,
} from './service/auth'
import { addAddress, addEmergencyContact } from './service/personalInfo'

const router = express.Router()

// DEFAULT
router.get('/', getAllUsers)
router.post('/', addUser)

// AUTH
router.get('/auth/verify-session', verifySession)
router.post('/auth/info', info)
router.post('/auth/register', register)
router.post('/auth/manual', manual)
router.post('/auth/forgot-password', forgot)
router.post('/auth/forgot-password/verify', forgotVerify)
router.post('/auth/mfa', mfa)
router.post('/auth/mfa/verify', mfaVerify)

//Personal Info
router.post('/:personalInfoId/emergencyContact/add/', addEmergencyContact)
router.post('/:personalInfoId/address/add/', addAddress)

export default router
