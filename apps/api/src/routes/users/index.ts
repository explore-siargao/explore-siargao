import express, { Response, Request } from 'express'
import { addUser, getAllUsers } from './default'
const router = express.Router()

//default
router.get('/', getAllUsers)
router.post('/', addUser)

export default router
