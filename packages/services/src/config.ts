import dotenv from "dotenv"
import path from "path"

dotenv.config({ path: path.join(__dirname, "../../../.env") })

export const passwordEncryptKey = process.env.PASSWORD_ENCRYPT_KEY || ""
export const cardEncryptKey = process.env.CARD_ENCRYPT_KEY || ""
