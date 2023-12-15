import express from 'express'
import { getAllListing, getListing } from './service/default'
import isCsrfTokenValid from '@/common/middleware/auth/isCsrfTokenValid'
import isOriginValid from '@/common/middleware/auth/isOriginValid'

const router = express.Router()

// DEFAULT
router.get('/', isCsrfTokenValid, isOriginValid, getAllListing)
router.get('/:id', isCsrfTokenValid, isOriginValid, getListing)

export default router
