import { z } from "zod"
export const Z_Listing = z.object({
  id: z.number().optional(),
  imageUrls: z.array(
    z.object({
      url: z.string(),
      alt: z.string(),
    })
  ),
  title: z.string(),
  category: z.enum(["Accomodation", "Rentals", "Activity"]),
  description: z.string(),
  address: z.string(),
  longitude: z.number().optional(),
  latitude: z.number().optional(),
  hostedById: z.number().int().optional(),
  listingPriceId: z.number().int().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().nullable().optional(),
  deletedAt: z.date().nullable().optional(),
})
