import express from 'express'
import {
  getPropertyById,
  getPropertyByHostId,
  addProperty,
  deleteProperty,
  updateProperty,
  getPropertyByMainGuestId,
} from './service/default'

const router = express.Router()

router.get('/guest/:mainGuestId', getPropertyByMainGuestId)
router.get('/:id', getPropertyById)
router.get('/offer-by/:hostId', getPropertyByHostId)
router.post('/:hostId', addProperty)
router.patch('/:hostId/:id', updateProperty)
router.delete('/:hostId/:id', deleteProperty)

export default router
