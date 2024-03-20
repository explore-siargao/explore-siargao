import express from 'express'
import {
  addBookableUnit, getBookableUnitByHost, getBookableUnitById, getBookableUnitByType, updateBookableUnit
} from './service/default'

const router = express.Router()

// DEFAULT
router.get('/host/:id', getBookableUnitByHost)
router.get('/bookable-unit-type/:bookableUnitTypeId', getBookableUnitByType)
router.get('/:id', getBookableUnitById)
router.post('/host/:hostId', addBookableUnit)
router.patch('/:id', updateBookableUnit)
// router.delete('/', deleteReservation)

export default router
