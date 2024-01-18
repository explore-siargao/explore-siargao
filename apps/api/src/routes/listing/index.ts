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
import {
  addPlaceOffer,
  deletePlaceOffers,
  getAllPlaceOffers,
  getPlaceOffersById,
  updatePlaceOffers,
} from './service/placeOffers'
import {
  addListingPlaceOffer,
  deleteListingPlaceOffer,
  getAllListingPlaceOffers,
  getListingPlaceOffersByListing,
} from './service/listingPlaceOffers'
import {
  addReview,
  deleteReview,
  getReviewById,
  getReviewByListing,
  updateReview,
} from './service/reviews'
import {
  deleteBasicAboutPlace,
  getBasicAboutPlaceById,
  updateBasicAboutPlace,
} from './service/basicAboutPlace'
import {
  addCancellationPolicy,
  addHouseRule,
  addSafetypropertyRule,
  getAllRules,
  getRulesByCancellationPolicy,
  getRulesByHouseRule,
  getRulesBySafetyProperty,
  updateRule,
} from './service/rules'
import {
  deleteHouseRule,
  getAllHouseRules,
  getAllHouseRulesByListing,
  getHouseRule,
  updateHouseRule,
} from './service/houseRules'
import {
  deleteSafetyProperty,
  getAllSafetyProperties,
  getAllSafetyPropertiesByListing,
  getSafetyProperty,
  updateSafetyProperty,
} from './service/safetyProperty'
import { deleteCancellationPolicy, getAllCancellationPolicies, getCancellationPoliciesByListing, getCancellationPolicy, updateCancellationPolicy } from './service/cancellationPolicies'

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

//place to offers
router.get('/all/place-offers', getAllPlaceOffers)
router.get('/place-offers/:id', getPlaceOffersById)
router.post('/:userId/place-offers', addPlaceOffer)
router.patch('/:userId/place-offers/:placeOfferId', updatePlaceOffers)
router.delete('/:userId/place-offers/delete/:placeOfferId', deletePlaceOffers)

//listing place offers
router.get('/all/listing-place-offers', getAllListingPlaceOffers)
router.get('/listing-place-offers/:listingId', getListingPlaceOffersByListing)
router.post('/:userId/listing-place-offers', addListingPlaceOffer)
router.delete(
  '/:userId/listing-place-offers/delete/:listingPlaceOfferId',
  deleteListingPlaceOffer
)

//reviews
router.get('/reviews/:listingId', getReviewByListing)
router.get('/reviews/view/:reviewId', getReviewById)
router.post('/:userId/reviews/post', addReview)
router.patch('/:userId/reviews/update/:reviewId', updateReview)
router.delete('/:userId/reviews/delete/:reviewId', deleteReview)

//Basic about place
router.get('/basic-about-place/:id', getBasicAboutPlaceById)
router.patch('/:userId/basic-about-place/:id', updateBasicAboutPlace)
router.delete('/:userId/basic-about-place/:id', deleteBasicAboutPlace)

//rules
router.get('/all/rules', getAllRules)
router.get('/rules/house-rule/:houseRuleId', getRulesByHouseRule)
router.get('/rules/safety-property/:safetyPropertyId', getRulesBySafetyProperty)
router.get(
  '/rules/cancellation-policy/:cancelPolicyId',
  getRulesByCancellationPolicy
)
router.post('/:userId/rules/house-rule', addHouseRule)
router.post('/:userId/rules/safety-property', addSafetypropertyRule)
router.post('/:userId/rules/cancellation-policy', addCancellationPolicy)
router.patch('/:userId/rules/:ruleId', updateRule)
router.delete('/:userId/rules/:ruleId', updateRule)

//house rules
router.get('/all/house-rules', getAllHouseRules)
router.get('/house-rules/:listingId', getAllHouseRulesByListing)
router.get('/house-rules/id/:id', getHouseRule)
router.patch('/:userId/house-rules/:id', updateHouseRule)
router.delete('/:userId/house-rules/:id', deleteHouseRule)

//safety properties
router.get('/all/safety-properties', getAllSafetyProperties)
router.get('/safety-properties/:listingId', getAllSafetyPropertiesByListing)
router.get('/safety-properties/id/:id', getSafetyProperty)
router.patch('/:userId/safety-properties/:id', updateSafetyProperty)
router.delete('/:userId/safety-properties/:id', deleteSafetyProperty)

//cancellation policies
router.get('/all/cancellation-policies', getAllCancellationPolicies)
router.get('/cancellation-policies/:listingId', getCancellationPoliciesByListing)
router.get('/cancellation-policies/id/:id', getCancellationPolicy)
router.patch('/:userId/cancellation-policies/:id', updateCancellationPolicy)
router.delete('/:userId/cancellation-policies/:id', deleteCancellationPolicy)

export default router
