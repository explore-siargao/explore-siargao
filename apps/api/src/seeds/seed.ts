
import {User} from './models/User'
import mysql from 'mysql2'
const connection = mysql.createConnection(process.env.DATABASE_URL || '')
export const loadAndSaveData = async () => {
  try {
     connection.query(User)
    console.log('***created user table***')
  } catch (err) {
    console.error(err)
  }
}
loadAndSaveData()
process.exit(0)
