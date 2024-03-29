import path from 'path'
import dotenv from 'dotenv'

dotenv.config({ path: path.join(__dirname, '../../../../../.env') })

export const port = process.env.API_PORT || 9000
export const encryptKey = process.env.API_ENCRYPT_KEY || ''
export const signKey = process.env.API_SIGN_KEY || ''
export const origins = process.env.API_ORIGINS?.split(
  ','
) as unknown as string[]
export const webUrl = process.env.WEB_URL || ''
export const captchaKeySecret = process.env.RECAPTCHA_KEY_SECRET || ''
export const nodeEnv = process.env.NODE_ENV || ''
export const nextAuthSecret = process.env.NEXTAUTH_SECRET || ''

//AWS
export const awsAccessKey = process.env.AWS_ACCESS_KEY || ''
export const awsAccessSecret = process.env.AWS_SECRET_ACCESS_KEY || ''
export const awsRegion = process.env.AWS_REGION
