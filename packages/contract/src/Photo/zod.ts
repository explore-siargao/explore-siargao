import z from "zod"

export const Z_Photo = z.object({
  id: z.number().optional(),
  bookableUnitTypeId: z.number().optional(),
  propertyId: z.number().optional(),
  key: z.string(),
  thumbKey: z.string(),
  caption: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().nullable().optional(),
  deletedAt: z.date().nullable().optional(),
})
