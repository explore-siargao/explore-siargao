import express from 'express'
import {
  addReservation,
  deleteReservation,
  getReservationsByGuest,
  getReservationsByHost,
  getReservationsById,
  updateReservation,
} from './service/default'

const router = express.Router()

// DEFAULT
router.get('/guest/:guestId', getReservationsByGuest)
router.get('/host/:hostId', getReservationsByHost)
router.get('/:id', getReservationsById)
router.post('/:userId', addReservation)
router.patch('/:reservationId', updateReservation)
router.delete('/:reservationId', deleteReservation)

export default router
