import express from 'express'
import {
  getAllReportUsers,
  getReportsByResportedByUserId,
  getReportsByReportedUserId,
  getReportUserById,
  addReportUser,
} from './services/users'

const router = express.Router()

//report user
router.get('/user', getAllReportUsers)
router.get('/user/from/:userId', getReportsByResportedByUserId)
router.get('/user/to/:userId', getReportsByReportedUserId)
router.get('/user/:reportId', getReportUserById)
router.post('/:userId/user', addReportUser)

export default router
