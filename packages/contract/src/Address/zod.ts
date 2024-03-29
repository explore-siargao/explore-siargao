import { z } from "zod"

export const Z_Address = z.object({
  id: z.number(),
  peronalInfoId: z.number(),
  streetAddress: z.string(),
  city: z.string(),
  stateProvince: z.string(),
  aptSuite: z.string().optional(),
  zipCode: z.number(),
  country: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().nullable().optional(),
  deletedAt: z.date().nullable().optional(),
})
