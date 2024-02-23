import { z } from "zod"

export const Z_BasicAboutPlace = z.object({
  id: z.number().optional(),
  guests: z.number(),
  bedRooms: z.number(),
  beds: z.number(),
  bathRooms: z.number(),
  createdAt: z.string().optional(),
  updatedAt: z.string().nullable().optional(),
  deletedAt: z.string().nullable().optional(),
})
