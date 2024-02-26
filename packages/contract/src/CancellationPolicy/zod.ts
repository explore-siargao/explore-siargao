import { z } from "zod"
import { Z_Rule } from "../Rule"

export const Z_CancellationPolicy = z.object({
  id: z.number().optional(),
  title: z.string(),
  listingId: z.number(),
  cancelationDueDate: z.string().optional(),
  rules:z.array(z.lazy(()=>Z_Rule)).optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().nullable().optional(),
  deletedAt: z.date().nullable().optional(),
})
