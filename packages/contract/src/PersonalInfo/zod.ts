import { z } from "zod"
import { Z_Address } from "../Address"
import { Z_EmergencyContact } from "../EmergencyContact"
import { Z_GovernmentId } from ".."

export const Z_PersonalInfo = z.object({
  id: z.number().optional(),
  userId: z.string().optional(),
  firstName: z.string(),
  middleName: z.string().optional(),
  lastName: z.string().optional(),
  birthDate: z.string().optional(),
  governmentId: z.array(Z_GovernmentId).optional(),
  address: z.lazy(()=>Z_Address).optional().nullable(),
  currency: z.string().optional(),
  language: z.string(),
  emergencyContacts: z.array(Z_EmergencyContact).optional(),
  phoneNumber: z.string(),
  createdAt: z.string().optional(),
  updatedAt: z.string().nullable().optional(),
  deletedAt: z.string().nullable().optional(),
})
