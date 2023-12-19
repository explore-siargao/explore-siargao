import express from 'express'
import { addListing, deleteListing, getAllListing, getListing } from './service/listing'
import isCsrfTokenValid from '@/common/middleware/auth/isCsrfTokenValid'
import isOriginValid from '@/common/middleware/auth/isOriginValid'
import { getWishGroupsByUser } from './service/wishGroup'
import isUserLoggedIn from '@/common/middleware/auth/isUserLoggedIn'

const router = express.Router()

// DEFAULT
router.get('/', getAllListing)
router.get('/:id', isCsrfTokenValid, isOriginValid, getListing)
router.delete('/',deleteListing)
router.post(
  '/:hostId',
  // isOriginValid,
  // isCsrfTokenValid,
  // isUserLoggedIn,
  addListing
)
router.get(
  '/:userId/wish-group',
  isOriginValid,
  isCsrfTokenValid,
  isUserLoggedIn,
  getWishGroupsByUser
)
export default router
