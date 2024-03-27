import express from 'express'
import { getConversations, addMessage } from './default'

const router = express.Router()

// DEFAULT
router.get('/', getConversations)
router.post('/', addMessage)

export default router
