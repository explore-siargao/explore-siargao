import { z } from "zod"
import { Z_Address, Z_PersonalInfo } from ".."

export const Z_Review = z.object({
  id: z.number().optional(),
  userId: z.number().optional(),
  listingId: z.number(),
  cleanLinessRates: z.number().min(1).max(5),
  accuracyRates: z.number().min(1).max(5),
  checkInRates: z.number().min(1).max(5),
  communicationRates: z.number().min(1).max(5),
  locationRates: z.number().min(1).max(5),
  valueRates: z.number().min(1).max(5),
  comment: z.string(),
  user:z.object({
  profilePicture:z.string().optional().nullable(),
  personalInfo:z.object({
    firstName:z.string(),
    lastName:z.string(),
    address:z.lazy(()=>Z_Address)
  })
  }),
  average:z.number().optional(),
  createdAt: z.string(),
  updatedAt: z.string().nullable().optional(),
  deletedAt: z.string().nullable().optional(),
})
