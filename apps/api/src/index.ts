import express from 'express'
import cors from 'cors'
import cookies from 'cookie-parser'
import { port, origins } from '@/common/config'
import fileupload from 'express-fileupload'
import routes from '@/routes'

const es = express()
es.disable('x-powered-by')
es.use(cookies())
es.use(express.json())
es.use(fileupload())
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
