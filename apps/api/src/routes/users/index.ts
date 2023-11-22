import express, { Response, Request } from 'express'
import { addUser, getAllUsers } from './default'
import { loginAuth } from './login'
import { sendResetPassword } from './sendResetPassword'
const router = express.Router()

//default
router.get('/', getAllUsers)
router.post('/', addUser)


//auth
router.post('/login', loginAuth)

//send reset password link
router.post("/send/reset-password", sendResetPassword)
export default router
