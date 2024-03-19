import express from 'express'
import {getReservationsByGuest, getReservationsByHost} from "./service/default"

const router = express.Router()

// DEFAULT
router.get('/guest/:guestId', getReservationsByGuest)
router.get('/host/:hostId', getReservationsByHost)

export default router