import express from 'express'
import cors from 'cors'
import cookies from 'cookie-parser'
import fileupload from 'express-fileupload'
import routes from '@/routes'
import { ALLOWED_CLIENTS, API_PORT } from '@/common/constants/ev'
import '@/common/utils/redisClient'

const es = express()
es.disable('x-powered-by')
es.use(cookies())
es.use(express.json())
es.use(fileupload())
es.use(
  cors({
    origin: ALLOWED_CLIENTS,
    credentials: true,
  })
)
routes(es)
es.listen(API_PORT, () => {
  console.log(`API server is running at http://localhost:${API_PORT}`)
})
