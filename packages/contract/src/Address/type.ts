import { z } from "zod"
import { Z_Address } from "./zod"

export type T_Address = z.infer<typeof Z_Address>
