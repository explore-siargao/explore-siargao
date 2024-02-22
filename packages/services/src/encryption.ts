import CryptoJS from "crypto-js"
import { passwordEncryptKey, cardEncryptKey } from "./config"

export class EncryptionService {
  private KEY: string | undefined = ""
  constructor(source: "password" | "card") {
    if (source === "password") {
      this.KEY = passwordEncryptKey
    } else if (source === "card") {
      this.KEY = cardEncryptKey
    }
  }
  encrypt(val: object | any[] | string) {
    let encyptValue = ""
    if (typeof val === "object" || Array.isArray(val)) {
      encyptValue = String(
        CryptoJS.AES.encrypt(JSON.stringify(val), String(this.KEY))
      )
    }
    if (typeof val === "string") {
      encyptValue = String(CryptoJS.AES.encrypt(val, String(this.KEY)))
    }
    return encyptValue
  }

  decrypt(encryptedValue: string): object | any[] | string {
    let decryptedValue = ""
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedValue, String(this.KEY))
      const originalValue = bytes.toString(CryptoJS.enc.Utf8)
      const parsedValue = JSON.parse(originalValue)

      if (Array.isArray(parsedValue)) {
        decryptedValue = JSON.stringify(parsedValue)
      } else if (typeof parsedValue === "object" && parsedValue !== null) {
        decryptedValue = parsedValue
      }
    } catch (error: any) {
      try {
        const bytes = CryptoJS.AES.decrypt(encryptedValue, String(this.KEY))
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