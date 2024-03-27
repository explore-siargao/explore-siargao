import express from 'express'
import { getConversations, addMessage, getMessages } from './default'

const router = express.Router()

// DEFAULT
router.get('/', getConversations)
router.get('/:conversationId/messages', getMessages)
router.post('/', addMessage)

export default router
