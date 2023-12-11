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
  updateUserEmail,
  userDetails,
} from './service/auth'
import {
  addAddress,
  addEmergencyContact,
  editAddress,
  getPersonalInfo,
  removeEmergencyContact,
  updatePersonalInfo,
} from './service/personalInfo'
import isUserLoggedIn from '@/common/middleware/isLoggedIn'

const router = express.Router()

// DEFAULT
router.get('/', isUserLoggedIn, getAllUsers)
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
router.patch('/auth/:userId', updateUserEmail)
router.get('/auth/user-details', isUserLoggedIn, userDetails)

//Personal Info
router.get('/personal-info/:userId', isUserLoggedIn, getPersonalInfo)
router.post(
  '/:personalInfoId/emergency-contact/add/',
  isUserLoggedIn,
  addEmergencyContact
)
router.post('/:personalInfoId/address/add/', isUserLoggedIn, addAddress)
router.patch('/address/:userId', isUserLoggedIn, editAddress)
router.patch('/personal-info/:userId', isUserLoggedIn, updatePersonalInfo)
router.delete(
  '/:peronalInfoId/emergency-contact/:emergencyContactId',
  isUserLoggedIn,
  removeEmergencyContact
)

export default router
