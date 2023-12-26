import { z } from "zod"
import { Z_Address } from "../Address"
import { Z_EmergencyContact } from "../EmergencyContact"

export const Z_PersonalInfo = z.object({
  id: z.number(),
  userId: z.string(),
  firstName: z.string(),
  middleName: z.string(),
  lastName: z.string(),
  birthDate: z.string(),
  governMentId: z.string(),
  address: Z_Address,
  emergrncyContacts: z.array(Z_EmergencyContact),
  phoneNumber: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().nullable().optional(),
  deletedAt: z.date().nullable().optional(),
})
