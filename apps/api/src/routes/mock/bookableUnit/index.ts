import express from 'express'
import {
  addBookableUnit, updateBookableUnit
} from './service/default'

const router = express.Router()

// DEFAULT
// router.get('/guest/:guestId', getReservationsByGuest)
router.post('/host/:hostId', addBookableUnit)
router.patch('/:id', updateBookableUnit)
// router.delete('/', deleteReservation)

export default router
