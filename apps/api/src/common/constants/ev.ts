import path from 'path'
import dotenv from 'dotenv'

dotenv.config({ path: path.join(__dirname, '../../../../../.env') })

export const API_PORT = process.env.API_PORT || 9000
export const PASSWORD_ENCRYPT_KEY = process.env.PASSWORD_ENCRYPT_KEY || ''
export const CARD_ENCRYPT_KEY = process.env.CARD_ENCRYPT_KEY || ''
export const API_SIGN_KEY = process.env.API_SIGN_KEY || ''
export const ALLOWED_CLIENTS = process.env.ALLOWED_CLIENTS?.split(
  ','
) as unknown as string[]
export const WEB_URL = process.env.WEB_URL || ''
export const API_URL = process.env.API_URL || ''
export const API_MOCK_URL = process.env.API_MOCK_URL || ''
export const RECAPTCHA_KEY_SECRET = process.env.RECAPTCHA_KEY_SECRET || ''
export const NODE_ENV = process.env.NODE_ENV || ''
export const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET || ''
export const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY || ''
export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY || ''
export const AWS_REGION = process.env.AWS_REGION || ''
export const XENDIT_URL = process.env.XENDIT_URL || ''
export const XENDIT_SECRET = process.env.XENDIT_SECRET || ''