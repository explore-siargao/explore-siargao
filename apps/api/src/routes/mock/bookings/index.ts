import express from 'express'
import { getBookingsToreviews, getToReviewById } from './services/default'
import { paginatedBooking } from './services/paginatedBooking.ts'

const router = express.Router()

// DEFAULT
router.get('/to-review', getBookingsToreviews)
router.get('/to-review/:id', getToReviewById)
router.get('/paginated', paginatedBooking)

export default router
