import { z } from "zod"
import { Z_AddUpdateAddress, Z_Address } from "./zod"

export type T_Address = z.infer<typeof Z_Address>
export type T_AddUpdateAddress = z.infer<typeof Z_AddUpdateAddress>
