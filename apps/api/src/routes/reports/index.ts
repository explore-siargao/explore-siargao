import express from 'express'
import {
  addReport,
  deleteReport,
  getAllReportListingByReportedBy,
  getAllReports,
  getReport,
  getReportsByListing,
  updateReport,
} from './services/reportListing'
const router = express.Router()

//reports
router.get('/listing', getAllReports)
router.get('/listing/to/:listingId', getReportsByListing)
router.get('/listing/from/:userId', getAllReportListingByReportedBy)
router.get('/listing/:id', getReport)
router.post('/:userId/reports', addReport)
router.patch('/:userId/reports/:id', updateReport)
router.delete('/:userId/reports/:id', deleteReport)
export default router
