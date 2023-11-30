import express from 'express'
import { addUser, getAllUsers } from './service/default'
import { verifySession, register, manual, info } from './service/auth'

const router = express.Router()

// DEFAULT
router.get('/', getAllUsers)
router.post('/', addUser)

// AUTH
router.get('/auth/verify-session', verifySession)
router.post('/auth/info', info)
router.post('/auth/register', register)
router.post('/auth/manual', manual)

export default router
