import { z } from "zod"

export const Z_Highlights = z.object({
  id: z.number().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  icon: z.string().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().nullable().optional(),
  deletedAt: z.string().nullable().optional(),
})
