import isCsrfTokenValid from '@/common/middleware/auth/isCsrfTokenValid'
import isOriginValid from '@/common/middleware/auth/isOriginValid'
import isUserLoggedIn from '@/common/middleware/auth/isUserLoggedIn'
import express from 'express'
import { getProfile } from './userProfile'

const router = express.Router()

// DEFAULT
router.get('/', () => console.log('test user mock'))
router.get(
    '/:id',
    getProfile
  )
export default router
