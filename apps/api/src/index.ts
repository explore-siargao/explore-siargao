import express from 'express'
import cors from 'cors'
import { port } from './config'
import dotenv from 'dotenv'
import mysql from 'mysql2'
dotenv.config()

const connection = mysql.createConnection(process.env.DATABASE_URL || '')
const es = express()
es.disable("x-powered-by");
es.use(express.json())
es.use(
  cors({
    origin: process.env.ORIGINS,
    credentials: true,
  })
)

connection.connect((err: any) => console.log('PlannetScale Connected'))

es.listen(port, () => {
  console.log(`🚀 SERVER is running at http://localhost:${port}`)
})
