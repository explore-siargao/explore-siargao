import { z } from "zod"

export const Z_Address = z.object({
  id: z.number(),
  peronalInfoId: z.number(),
  streetAddress: z.string(),
  city: z.string(),
  stateProvince: z.string(),
  aptSuite: z.string().optional().nullable(),
  zipCode: z.number(),
  country: z.string(),
  createdAt: z.string().optional(),
  updatedAt: z.string().nullable().optional(),
  deletedAt: z.string().nullable().optional(),
})

export const Z_AddUpdateAddress = z.object({
  streetAddress: z.string(),
  city: z.string(),
  stateProvince: z.string(),
  aptSuite: z.string().optional(),
  zipCode: z.number(),
  country: z.string(),
})
