import { z } from "zod"
import { Z_Listing, Z_SectionInfo } from "./zod"

export type T_Listing = z.infer<typeof Z_Listing>
export type T_SectionInfo = z.infer<typeof Z_SectionInfo>
