import express from 'express'
import { getBookingsToreviews, getToReviewById } from './services/default'
import { paginatedBooking } from './services/paginatedBooking.ts'
import { getThisMonthEarnings } from './services/thisMonth'
import { getUpcomingEarnings } from './services/upcoming'
import { getPaidEarnings } from './services/paid'
import { getMonthYearEarnings } from './services/monthYear'
import { getThisMonthBookings } from './services/thisMonthBooking'
import { getPaidBookings } from './services/paidBooking'
import { getUpcomingBookings } from './services/upcomingBooking'
import { getMonthYearBookings } from './services/monthYearBooking'

const router = express.Router()

// DEFAULT
router.get('/to-review', getBookingsToreviews)
router.get('/to-review/:id', getToReviewById)
router.get('/paginated', paginatedBooking)

//eranings
router.get('/earnings/this-month', getThisMonthEarnings)
router.get('/earnings/this-month/bookings', getThisMonthBookings)
router.get('/earnings/upcoming', getUpcomingEarnings)
router.get('/earnings/upcoming/bookings', getUpcomingBookings)
router.get('/earnings/paid', getPaidEarnings)
router.get('/earnings/paid/bookings', getPaidBookings)
router.get('/earnings/:monthYear', getMonthYearEarnings)
router.get('/earnings/:monthYear/bookings', getMonthYearBookings)

export default router
