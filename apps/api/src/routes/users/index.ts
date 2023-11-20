import express, { Response, Request } from 'express'
import { addUser, getAllUsers } from './default'
import { loginAuth } from './login'
const router = express.Router()

//default
router.get('/', getAllUsers)
router.post('/', addUser)


//auth
router.post('/login', loginAuth)
export default router
