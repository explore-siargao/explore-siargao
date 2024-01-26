import express from 'express'
import { addTaxes } from './services/addVatIdNumber'

const router = express.Router()

router.post('/:userId', addTaxes)

export default router
