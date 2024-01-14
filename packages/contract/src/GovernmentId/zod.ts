import { z } from "zod"

export const Z_GovernmentId = z.object({
  imageKey: z.string(),
  type: z.enum(["DriversLicense", "Passport", "NationalID", "PostalD"]),
  createdAt: z.date(),
})

export const Z_Add_GovernmentId = Z_GovernmentId.pick({
  type: true,
})
