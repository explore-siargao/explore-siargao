import { string, z } from "zod"
import { E_RegistrationType, E_UserRole } from "./enum"
import { Z_PersonalInfo } from ".."

export const Z_User = z.object({
  id: z.number(),
  profilePicture: z.string().nullable(),
  role: z.nativeEnum(E_UserRole),
  email: z.string().email(),
  password: z.string().min(8).optional(),
  changePasswordAt: string().optional().nullable(),
  canReceiveEmail: z.boolean(),
  registrationType: z.nativeEnum(E_RegistrationType),
  personalInfo:z.lazy(()=>Z_PersonalInfo).nullable(),
  createdAt: z.string().optional(),
  updatedAt: z.string().nullable().optional(),
  deletedAt: z.string().nullable().optional(),
})

export const Z_UserRegister = z.object({
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  birthDate: z.string(),
  country: z.string(),
  password: z.string().min(8).nullable(),
  registrationType: z.nativeEnum(E_RegistrationType),
  canReceiveEmail: z.boolean(),
})
