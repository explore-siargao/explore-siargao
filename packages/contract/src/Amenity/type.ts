import { z } from "zod"
import { Z_PropertyAmenities } from "./zod"


export type T_PropertyAmenety = z.infer<typeof Z_PropertyAmenities>
