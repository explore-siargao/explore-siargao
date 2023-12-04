import express from 'express'
import { getAllListing, getListing } from './service/default'

const router = express.Router()

// DEFAULT
router.get("/", getAllListing)
router.get("/:id", getListing)

export default router
