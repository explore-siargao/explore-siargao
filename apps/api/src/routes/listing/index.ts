import express from 'express'
import { addListing, getAllListing, getListing } from './service/listing'
import isCsrfTokenValid from '@/common/middleware/auth/isCsrfTokenValid'
import isOriginValid from '@/common/middleware/auth/isOriginValid'
import { addNewWishGroup, addToExistingWishGroup, addWishGroup, getWishGroupsByUser } from './service/wishGroup'
import isUserLoggedIn from '@/common/middleware/auth/isUserLoggedIn'

const router = express.Router()

// DEFAULT
router.get('/', getAllListing)
router.get('/:id', isCsrfTokenValid, isOriginValid, getListing)
router.post(
  '/:hostId',
  isOriginValid,
  isCsrfTokenValid,
  isUserLoggedIn,
  addListing
)
router.get(
  '/:userId/wish-group',
  isOriginValid,
  isCsrfTokenValid,
  isUserLoggedIn,
  getWishGroupsByUser
)

router.post('/:userId/wish/:listingId',addWishGroup)
router.post('/:userId/wish', addNewWishGroup)
router.post('/:userId/:wishGroupId/add-existing-group/:listingId', addToExistingWishGroup)

export default router
