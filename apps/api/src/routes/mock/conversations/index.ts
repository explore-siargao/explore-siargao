import express from 'express'
import { getConversationByListingAndUserGuest } from './default'

const router = express.Router()

// DEFAULT
router.get('/listing/:listingId/user-guest/:userId', getConversationByListingAndUserGuest)


export default router
