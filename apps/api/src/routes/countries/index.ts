import express from 'express'
import { getCountries } from './service/country'

const router = express.Router()

// DEFAULT
router.get('/', getCountries)

export default router
