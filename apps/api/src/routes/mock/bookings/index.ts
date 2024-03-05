import express from 'express'
import { getBookingsToreviews, getToReviewById } from './default'

const router = express.Router()

// DEFAULT
router.get('/to-review', getBookingsToreviews)
router.get('/to-review/:id', getToReviewById)

export default router
