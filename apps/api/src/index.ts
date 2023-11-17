import express, { Application } from 'express'
import cors from 'cors'
import { port, origins } from './config'
import dotenv from 'dotenv'
import mysql from 'mysql2'
import routes from './routes'
dotenv.config()

const connection = mysql.createConnection(process.env.DATABASE_URL || '')
const app: Application = express()
app.use(express.json())
app.use(
  cors({
    origin: '*',
    credentials: true,
  })
)

routes(app)

connection.connect((err: any) => console.log('PlannetScale Connected'))

app.listen(port, () => {
  console.log(`🚀 SERVER is running at http://localhost:${port}`)
})
