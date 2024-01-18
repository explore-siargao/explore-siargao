import { z } from "zod"

export const Z_GovernmentId = z.object({
  imageKey: z.string(),
  type: z.enum(["DriversLicense", "Passport", "NationalID", "PostalID"]),
  createdAt: z.date().optional(),
})
