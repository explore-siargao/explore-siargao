import express from 'express'
import { addUser, getAllUsers } from './service/default'
import { loginAuth } from './service/login'

const router = express.Router()
//default
router.get('/', getAllUsers)
router.post('/', addUser)

//auth
router.post('/login', loginAuth)
// router.get('/signup', authController.SignUp);
// router.get('/signin', authController.SignIn);
// router.get('/verify', authController.Verify);
export default router
