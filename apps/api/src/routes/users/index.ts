import express from 'express'
import { addUser, getAllUsers } from './service/default'
import { verifySession, manual, google, facebook } from './service/auth'

const router = express.Router()

// DEFAULT
router.get('/', getAllUsers)
router.post('/', addUser)

// AUTH
router.get('/auth/verify-session', verifySession)
router.post('/auth/register', manual)
router.post('/auth/manual', manual)
router.post('/auth/google', google)
router.post('/auth/facebook', facebook)

export default router
