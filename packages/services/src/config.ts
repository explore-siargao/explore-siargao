import dotenv from "dotenv"
import path from "path"

dotenv.config({ path: path.join(__dirname, "../../../.env") })

export const encryptKey = process.env.API_ENCRYPT_KEY || ""
export const cardEncyptkey = process.env.CARD_ENCRYPT_KEY || ""
