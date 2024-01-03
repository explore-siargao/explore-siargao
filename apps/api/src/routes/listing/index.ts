import express from 'express'
import { addListing, getAllListing, getListing } from './service/listing'
import isCsrfTokenValid from '@/common/middleware/auth/isCsrfTokenValid'
import isOriginValid from '@/common/middleware/auth/isOriginValid'
import {
  addEditWishListNote,
  addNewWishGroup,
  addToExistingWishGroup,
  addWishGroup,
  deleteWishGroup,
  deleteWishGroupByTitle,
  editTitle,
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
  '/:userId/:title/wishes',
  isOriginValid,
  isCsrfTokenValid,
  isUserLoggedIn,
  wishGroupByUserAndTitle
)

router.post(
  '/:userId/wish/',
  isOriginValid,
  isCsrfTokenValid,
  isUserLoggedIn,
  addWishGroup
)

router.post(
  '/:userId/wish-group',
  isOriginValid,
  isCsrfTokenValid,
  isUserLoggedIn,
  addNewWishGroup
)

router.post(
  '/:userId/:wishGroupId/add-existing-group',
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

router.patch(
  '/:userId/note/:wishGroupId',
  isOriginValid,
  isCsrfTokenValid,
  isUserLoggedIn,
  addEditWishListNote
)
router.patch(
  '/:userId/wish-group/update-title',
  isOriginValid,
  isCsrfTokenValid,
  isUserLoggedIn,
  editTitle
)
router.delete(
  '/:userId/wish-group/delete/:title',
  isOriginValid,
  isCsrfTokenValid,
  isUserLoggedIn,
  deleteWishGroupByTitle
)

export default router
