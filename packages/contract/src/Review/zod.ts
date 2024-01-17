import { z } from "zod"

export const Z_Review = z.object({
  id: z.number().optional(),
  userId: z.number().optional(),
  listingId: z.number(),
  rates: z.number().min(1.0).max(5.0),
  comment: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().nullable().optional(),
  deletedAt: z.date().nullable().optional(),
})
