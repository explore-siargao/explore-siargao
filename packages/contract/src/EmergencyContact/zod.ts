import { z } from "zod"

export const Z_EmergencyContact = z.object({
  id: z.number(),
  peronalInfoId: z.number(),
  name: z.string(),
  relationship: z.string(),
  email: z.string(),
  phoneNumber: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().nullable().optional(),
  deletedAt: z.date().nullable().optional(),
})