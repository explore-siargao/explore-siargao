import express from 'express'
import { getBookingsToreviews, getToReviewById } from './services/default'
import { paginatedBooking } from './services/paginatedBooking.ts'
import { getThisMonthEarnings } from './services/thisMonth'
import { getUpcomingEarnings } from './services/upcoming'
import { getPaidEarnings } from './services/paid'
import { getMonthYearEarnings } from './services/monthYear'

const router = express.Router()

// DEFAULT
router.get('/to-review', getBookingsToreviews)
router.get('/to-review/:id', getToReviewById)
router.get('/paginated', paginatedBooking)

//eranings
router.get('/earnings/this-month', getThisMonthEarnings)
router.get('/earnings/upcoming', getUpcomingEarnings)
router.get('/earnings/paid', getPaidEarnings)
router.get('/earnings/month-year', getMonthYearEarnings)

export default router
