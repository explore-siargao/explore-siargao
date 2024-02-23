import { z } from "zod"
import { Z_Highlights } from ".."

export const Z_ListingHighlight = z.object({
  id: z.number().optional(),
  listingId: z.number().optional(),
  highlightId: z.number().optional(),
  highLights:z.lazy(()=>Z_Highlights).nullable().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().nullable().optional(),
  deletedAt: z.string().nullable().optional(),
})
