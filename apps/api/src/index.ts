import express, { Request } from 'express'
import cors from 'cors'
import cookies from 'cookie-parser'
import { port, origins } from '@/common/config'
import routes from '@/routes'

const es = express()
es.disable('x-powered-by')
es.use(cookies())
es.use(express.json())
es.use(
  cors({
    origin: origins,
    credentials: true,
  })
)
routes(es)
es.listen(port, () => {
  console.log(`API server is running at http://localhost:${port}`)
})
