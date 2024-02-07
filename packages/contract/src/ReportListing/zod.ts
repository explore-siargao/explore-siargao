import { z } from "zod"

export const Z_ReportListing = z.object({
  id: z.number().optional(),
  name: z.string(),
  reason: z.string(),
  description: z.string().optional(),
  reportedBy: z.number().optional(),
  listingId: z.number(),
  createdAt: z.date().optional(),
  updatedAt: z.date().nullable().optional(),
  deletedAt: z.date().nullable().optional(),
})
