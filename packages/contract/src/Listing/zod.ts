import { z } from "zod"
import { E_ListingCategory } from "./enum"
import { Z_Address, Z_BasicAboutPlace, Z_Highlights, Z_ListingDescription, Z_ListingHighlight, Z_ListingPrice, Z_Review, Z_User } from ".."

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
  listingDescription:z.lazy(()=>Z_ListingDescription).optional(),
  address: z.string(),
  longitude: z.string().optional(),
  latitude: z.string().optional(),
  basicAboutPlace:z.lazy(() => Z_BasicAboutPlace).nullable(),
  hostedById: z.number().int().optional(),
  hostedBy: z.lazy(()=>Z_User).nullable(),
  highLights:z.array(z.lazy(()=>Z_Highlights).optional()).optional().nullable(),
  basicAboutPlaceId: z.number().optional().nullable(),
  listingPriceId: z.number().int().optional(),
  price:z.lazy(()=>Z_ListingPrice).optional(),
  review:z.array(z.object({})).optional().nullable(),
  totalRates: z.object({
    rates: z.number().optional(),
    cleanlinessAverage: z.number().optional(),
    accuracyAverage: z.number().optional(),
    checkInAverage: z.number().optional(),
    communicationAverage: z.number().optional(),
    locationAverage: z.number().optional(),
    valueAverage: z.number().optional(),
}),
  createdAt: z.string().optional(),
  updatedAt: z.string().nullable().optional(),
  deletedAt: z.string().nullable().optional(),
})
