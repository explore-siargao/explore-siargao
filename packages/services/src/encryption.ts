import { cardEncyptkey } from "./config"
import CryptoJS from "crypto-js"

export class EncryptionService {
  encrypt(val: object | any[] | string) {
    let encyptValue = ""
    if (typeof val === "object" || Array.isArray(val)) {
      encyptValue = String(
        CryptoJS.AES.encrypt(JSON.stringify(val), cardEncyptkey)
      )
    }
    if (typeof val === "string") {
      encyptValue = String(CryptoJS.AES.encrypt(val, cardEncyptkey))
    }
    return encyptValue
  }

  decrypt(encryptedValue: string): object | any[] | string {
    let decryptedValue = ""
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedValue, cardEncyptkey)
      const originalValue = bytes.toString(CryptoJS.enc.Utf8)
      const parsedValue = JSON.parse(originalValue)

      if (Array.isArray(parsedValue)) {
        decryptedValue = JSON.stringify(parsedValue)
      } else if (typeof parsedValue === "object" && parsedValue !== null) {
        decryptedValue = parsedValue
      }
    } catch (error: any) {
      try {
        const bytes = CryptoJS.AES.decrypt(encryptedValue, cardEncyptkey)
        decryptedValue = bytes.toString(CryptoJS.enc.Utf8)
      } catch (error: any) {
        console.error("Decryption failed:", error.message)
      }
    }

    if (decryptedValue === "") {
      decryptedValue = encryptedValue
    }

    return decryptedValue
  }
}
