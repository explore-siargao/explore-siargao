import express from 'express'
import { addTaxes, getTax } from './services/addVatIdNumber'

const router = express.Router()

router.post('/:userId', addTaxes)
router.get('/:userId', getTax)

export default router
