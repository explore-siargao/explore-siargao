import express from 'express'
import {
  deactivateAccount,
  getAllUsers,
  getUserProfile,
  updatePassword,
} from './service/default'
import {
  verifySignIn,
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
  setCanReceiveEmail,
} from './service/auth'
import {
  addAddress,
  addEmergencyContact,
  addGovernmentId,
  editAddress,
  getAllGovernmentIdByPersonInfoId,
  getPersonalInfo,
  removeEmergencyContact,
  updateCurrency,
  updateLanguage,
  updatePersonalInfo,
} from './service/personalInfo'
import isUserLoggedIn from '@/common/middleware/auth/isUserLoggedIn'
import isOriginValid from '@/common/middleware/auth/isOriginValid'
import isCsrfTokenValid from '@/common/middleware/auth/isCsrfTokenValid'
import { getHostDetailsInListing } from './service/hostDetails'

const router = express.Router()

// DEFAULT
router.get('/', getAllUsers)

// AUTH
router.post('/auth/info', info) // Use for Manual log in for Next-Auth
router.get(
  '/auth/verify-session',
  isOriginValid,
  isCsrfTokenValid,
  isUserLoggedIn,
  verifySession
)
router.get(
  '/auth/verify-sign-in',
  isOriginValid,
  isCsrfTokenValid,
  verifySignIn
)
router.post('/auth/register', isOriginValid, isCsrfTokenValid, register)
router.post('/auth/manual', isOriginValid, isCsrfTokenValid, manual)
router.post('/auth/forgot-password', isOriginValid, isCsrfTokenValid, forgot)
router.post(
  '/auth/forgot-password/verify',
  isOriginValid,
  isCsrfTokenValid,
  forgotVerify
)
router.post('/auth/mfa', isOriginValid, isCsrfTokenValid, mfa)
router.post('/auth/mfa/verify', isOriginValid, isCsrfTokenValid, mfaVerify)
router.patch('/auth/:userId', isCsrfTokenValid, isOriginValid, updateUserEmail)
router.get(
  '/auth/user-details',
  isCsrfTokenValid,
  isOriginValid,
  isUserLoggedIn,
  userDetails
)
router.patch(
  '/deactivate/:userId',
  isCsrfTokenValid,
  isOriginValid,
  isUserLoggedIn,
  deactivateAccount
)
router.patch(
  '/change-password/:userId',
  isCsrfTokenValid,
  isOriginValid,
  isUserLoggedIn,
  updatePassword
)
router.get(
  '/personal-info/:userId',
  isCsrfTokenValid,
  isOriginValid,
  isUserLoggedIn,
  getPersonalInfo
)
router.post(
  '/:personalInfoId/emergency-contact/add/',
  isCsrfTokenValid,
  isOriginValid,
  isUserLoggedIn,
  addEmergencyContact
)
router.post('/:personalInfoId/address/add/', addAddress)
router.patch(
  '/address/:userId',
  isUserLoggedIn,
  isCsrfTokenValid,
  isOriginValid,
  editAddress
)
router.patch(
  '/personal-info/:userId',
  isCsrfTokenValid,
  isOriginValid,
  isUserLoggedIn,
  updatePersonalInfo
)
router.patch(
  '/:userId/received-email',
  isCsrfTokenValid,
  isOriginValid,
  isUserLoggedIn,
  setCanReceiveEmail
)
router.delete(
  '/:peronalInfoId/emergency-contact/:emergencyContactId',
  isCsrfTokenValid,
  isOriginValid,
  isUserLoggedIn,
  removeEmergencyContact
)

router.patch('/personal-info/language/:personalInfoId', updateLanguage)
router.patch('/personal-info/currency/:personalInfoId', updateCurrency)

//Government Id
router.get('/:peronalInfoId/government-id', getAllGovernmentIdByPersonInfoId)
router.post('/:peronalInfoId/government-id', addGovernmentId)

//Host Details
router.get('/:hostId/host-details-listing/:listingId', getHostDetailsInListing)

//user profile
router.get('/:id', getUserProfile)

export default router
