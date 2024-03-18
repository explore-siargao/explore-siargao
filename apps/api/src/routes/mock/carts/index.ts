import express from 'express'
import { addCart, deleteCart, getCartsByHost, getCartsByListing, getCartsByUser, updateCart } from './default'


const router = express.Router()

// DEFAULT
router.get('/user/:userId', getCartsByUser)
router.get('/host/:hostId', getCartsByHost)
router.get('/listing/:listingId', getCartsByListing)
router.post('/:userId', addCart)
router.patch('/:cartId', updateCart)
router.delete('/:cartId', deleteCart)

export default router
