import express, { Response, Request } from 'express'
const router = express.Router()

//default
router.get('/', (req: Request, res: Response) => {
  return res.json({ data: 'hello World' })
})

export default router
