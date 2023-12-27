import { z } from "zod"

export const Z_BackendResponse = z.object({
  error: z.boolean(),
  message: z.nullable(z.union([z.string(), z.string().array()])).optional(),
  item: z.record(z.any()).nullable().optional(),
  items: z.array(z.record(z.any())).nullable().optional(),
  pageItemCount: z.number().optional(),
  allItemCount: z.number().optional(),
  currPage: z.number().optional(),
  action: z
    .object({
      type: z.string(),
      description: z.string(),
    })
    .optional(),
})
