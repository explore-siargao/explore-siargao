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
  wishGroupByTitle,
  wishGroupByUserAndTitle,
} from './service/wishGroup'
import isUserLoggedIn from '@/common/middleware/auth/isUserLoggedIn'
import {
  addHighLight,
  deleteHighLight,
  getAllHighLights,
  getHighLight,
  updateHighLight,
} from './service/highLights'
import {
  addListingHighlight,
  deleteListingHighlight,
  getAllListingHighlights,
  getListingHighlightsByListing,
} from './service/listingHighlights'

const router = express.Router()

// DEFAULT
router.get('/', getAllListing)
router.get('/:id', isCsrfTokenValid, isOriginValid, getListing)
router.post('/:hostId', addListing)

//wish group
router.get(
  '/:userId/wish-group',
  // isOriginValid,
  // isCsrfTokenValid,
  // isUserLoggedIn,
  getWishGroupsByUser
)
router.get(
  '/:userId/:title/wishes',
  // isOriginValid,
  // isCsrfTokenValid,
  // isUserLoggedIn,
  wishGroupByUserAndTitle
)

router.post(
  '/:userId/wish/',
  // isOriginValid,
  // isCsrfTokenValid,
  // isUserLoggedIn,
  addWishGroup
)

router.post(
  '/:userId/wish-group',
  // isOriginValid,
  // isCsrfTokenValid,
  // isUserLoggedIn,
  addNewWishGroup
)

router.post(
  '/:userId/add-existing-group',
  // isOriginValid,
  // isCsrfTokenValid,
  // isUserLoggedIn,
  addToExistingWishGroup
)

router.delete(
  '/:userId/wish-group/delete/:wishGroupId',
  // isOriginValid,
  // isCsrfTokenValid,
  // isUserLoggedIn,
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

router.get('/:userId/group/wish', wishGroupByTitle)

//highlights
router.get('/all/highlights', getAllHighLights)
router.get('/highlights/:id', getHighLight)
router.post('/:userId/highlights', addHighLight)
router.patch('/:userId/highlights/:highLightId', updateHighLight)
router.delete('/:userId/highlights/:highLightId', deleteHighLight)

//listing-highlights
router.get('/all/listing-highlights', getAllListingHighlights)
router.get('/listing-highlights/:listingId', getListingHighlightsByListing)
router.post('/:userId/listing-highlights', addListingHighlight)
router.delete(
  '/:userId/listing-highlights/delete/:listingHighlightId',
  deleteListingHighlight
)
export default router
