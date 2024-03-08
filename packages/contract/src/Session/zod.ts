import { z } from "zod"
import { E_UserRole, Z_PersonalInfo } from ".."

export const Z_Session = z.object({
  id: z.number().nullable(),
  email: z.string().nullable(),
  profilePicture: z.string().nullable(),
  registrationType: z.string().nullable(),
  deactivated: z.boolean().nullable(),
  changePasswordAt: z.string().nullable(),
  role: z.nativeEnum(E_UserRole),
  canReceiveEmail: z.boolean(),
  isHost: z.boolean(),
  personalInfo: z.nullable(Z_PersonalInfo),
})
