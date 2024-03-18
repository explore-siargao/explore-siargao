import { z } from "zod"
import { Z_User, Z_Listing } from ".."

export const Z_Carts = z.object({
  id: z.number().optional(),
  userId: z.number().optional(),
  user: Z_User.optional(),
  listingId: z.number(),
  listing: Z_Listing.optional(),
  guestCounts: z.string(),
  totalFee: z.number(),
  dateFrom: z.union([z.string(), z.date()]),
  dateTo: z.union([z.string(), z.date()]),
  createdAt: z.date().optional(),
  updatedAt: z.date().nullable().optional(),
  deletedAt: z.date().nullable().optional(),
})
