import { z } from "zod"
import { Z_Properties } from "./zod"

export type T_Property = z.infer<typeof Z_Properties>
