import { z } from "zod"
import { E_ListingCategory } from "./enum"
import { Z_Address } from ".."

export const Z_Listing = z.object({
  id: z.number().optional(),
  images: z
    .array(
      z.object({
        fileKey: z.string(),
        alt: z.string(),
      })
    )
    .optional(),
  title: z.string(),
  category: z.nativeEnum(E_ListingCategory),
  descriptionId: z.number().optional().nullable(),
  address: z.string(),
  longitude: z.string().optional(),
  latitude: z.string().optional(),
  fee: z.number().optional(),
  cleaningFee: z.number().optional(),
  serviceFee: z.number().optional(),
  checkIn: z.string().optional(),
  checkOut: z.string().optional(),
  countGuest: z.number().optional(),
  isNight: z.boolean().optional(),
  guests: z.number().optional(),
  bedRooms: z.number().optional(),
  beds: z.number().optional(),
  bathRooms: z.number().optional(),
  hostedById: z.number().int().optional(),
  basicAboutPlaceId: z.number().optional().nullable(),
  listingPriceId: z.number().int().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().nullable().optional(),
  deletedAt: z.string().nullable().optional(),
})
