import { z } from "zod"

export const Z_GovernmentId = z.object({
  imagePath: z.string(),
  type: z.enum(["DriversLicense", "Passport", "NationalID", "PostalD"]),
  createdAt: z.date().optional(),
})
