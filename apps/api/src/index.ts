import express from 'express'
import cors from 'cors'
import { port } from './config'
import dotenv from 'dotenv'
import routes from './routes'
dotenv.config()

const es = express()
es.disable("x-powered-by");
es.use(express.json())
es.use(
  cors({
    origin: process.env.ORIGINS,
    credentials: true,
  })
)
routes(es)
es.listen(port, () => {
  console.log(`🚀 SERVER is running at http://localhost:${port}`)
})
