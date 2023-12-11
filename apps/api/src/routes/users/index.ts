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
import isUserLoggedIn from '@/common/middleware/auth/isUserLoggedIn'
import isOriginValid from '@/common/middleware/auth/isOriginValid'
import isCsrfTokenValid from '@/common/middleware/auth/isCsrfTokenValid'

const router = express.Router()

// DEFAULT
router.get('/', isOriginValid, isCsrfTokenValid, isUserLoggedIn, getAllUsers)
router.post('/', isOriginValid, isCsrfTokenValid, isUserLoggedIn, addUser)

// AUTH
router.post('/auth/info', info) // Use for Manual log in for Next-Auth
router.get('/auth/verify-session', isOriginValid, isCsrfTokenValid, verifySession)
router.post('/auth/register', isOriginValid, isCsrfTokenValid, register)
router.post('/auth/manual', isOriginValid, isCsrfTokenValid, manual)
router.post('/auth/forgot-password', isOriginValid, isCsrfTokenValid, forgot)
router.post('/auth/forgot-password/verify', isOriginValid, isCsrfTokenValid, forgotVerify)
router.post('/auth/mfa', isOriginValid, isCsrfTokenValid, mfa)
router.post('/auth/mfa/verify', isOriginValid, isCsrfTokenValid, mfaVerify)
router.patch('/auth/:userId', updateUserEmail)
router.get('/auth/user-details', isUserLoggedIn, userDetails)

// PERSONAL INFO
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
  '/:userId/emergency-contact/remove/:emergencyContactId',
  isUserLoggedIn,
  removeEmergencyContact
)

export default router
