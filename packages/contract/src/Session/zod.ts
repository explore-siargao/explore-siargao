import { z } from "zod"
import { Z_PersonalInfo } from ".."

export const Z_Session = z.object({
  id: z.number().nullable(),
  email: z.string().nullable(),
  profilePicture: z.string().nullable(),
  registrationType: z.string().nullable(),
  deactivated: z.string().nullable(),
  role: z.string().nullable(),
  personalInfo: z.nullable(Z_PersonalInfo),
})