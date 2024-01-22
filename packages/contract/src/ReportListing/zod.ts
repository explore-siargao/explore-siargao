import { z } from "zod"

export const Z_ReportListing = z.object({
  id: z.number().optional(),
  reason: z.string(),
  otherdetails: z.string(),
  reportedBy: z.number().optional(),
  listingId: z.number(),
  createdAt: z.date().optional(),
  updatedAt: z.date().nullable().optional(),
  deletedAt: z.date().nullable().optional(),
})
