import express from 'express'
import { addListing, getAllListing, getListing } from './service/listing'
import isCsrfTokenValid from '@/common/middleware/auth/isCsrfTokenValid'
import isOriginValid from '@/common/middleware/auth/isOriginValid'
import {
  addNewWishGroup,
  addToExistingWishGroup,
  addWishGroup,
  deleteWishGroup,
  getWishGroupsByUser,
  wishGroupByUserAndTitle,
} from './service/wishGroup'
import isUserLoggedIn from '@/common/middleware/auth/isUserLoggedIn'

const router = express.Router()

// DEFAULT
router.get('/', getAllListing)
router.get('/:id', isCsrfTokenValid, isOriginValid, getListing)
router.post('/:hostId', isOriginValid, isCsrfTokenValid, addListing)
router.get(
  '/:userId/wish-group',
  isOriginValid,
  isCsrfTokenValid,
  isUserLoggedIn,
  getWishGroupsByUser
)
router.get(
  '/:userId/wishes',
  isOriginValid,
  isCsrfTokenValid,
  isUserLoggedIn,
  wishGroupByUserAndTitle
)

router.post(
  '/:userId/wish/:listingId',
  isOriginValid,
  isCsrfTokenValid,
  isUserLoggedIn,
  addWishGroup
)

router.post(
  '/:userId/wish',
  isOriginValid,
  isCsrfTokenValid,
  isUserLoggedIn,
  addNewWishGroup
)

router.post(
  '/:userId/:wishGroupId/add-existing-group/:listingId',
  isOriginValid,
  isCsrfTokenValid,
  isUserLoggedIn,
  addToExistingWishGroup
)

router.delete(
  '/wish-group/delete/:userId/:wishGroupId',
  isOriginValid,
  isCsrfTokenValid,
  isUserLoggedIn,
  deleteWishGroup
  )

export default router
