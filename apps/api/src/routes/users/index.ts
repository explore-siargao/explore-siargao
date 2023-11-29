import express from 'express'
import { addUser, getAllUsers } from './service/default'

const router = express.Router()

//default
router.get('/', getAllUsers)
router.post('/', addUser)

export default router
