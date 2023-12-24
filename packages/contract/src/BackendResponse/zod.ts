import { z } from "zod"

export const Z_BackendResponse = z.object({
  error: z.boolean(),
  message: z.nullable(z.union([z.string(), z.string().array()])),
  item: z.record(z.any()).optional(),
  items: z.array(z.record(z.any())).optional(),
  pageItemCount: z.number().optional(),
  allItemCount: z.number().optional(),
  currPage: z.number().optional(),
})
