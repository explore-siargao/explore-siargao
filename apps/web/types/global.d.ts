import z from "zod"
import { LoginZodSchema, UserBasicForEdit, ZBackendResponse } from "contract"

export interface I_User {
  id?: number
  firstName: string
  middleName?: string
  lastName: string
  role?: UserRole
  registrationType?: RegistrationType
  email: string
  address: string
  password: string
  contactNumber: number
  birthdate: string
  createdAt?: string
  deletedAt?: string
  updatedAt?: string
}

//stores
type Email = {
  email: string
}
type Action = {
  updateEmail: (email: Email["email"]) => void
}

enum UserRole {
  Admin,
  Host,
  User,
}

enum RegistrationType {
  Manual,
  Facebook,
  Google,
}

export type T_LOGIN = z.input<typeof LoginZodSchema>
export type T_LOGOUT = { token: string }
export type T_BACKEND_RESPONSE = z.input<typeof ZBackendResponse>
export type T_USER_FOR_EDIT = z.input<typeof UserBasicForEdit>

export type T_SESSION_ACTIONS = {
  update: (session: T_SESSION) => void
  reset: () => void
}
