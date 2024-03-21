import { z } from "zod"
import { Z_BookableUnitTypes } from "./zod"

export type T_BookableUnitType = z.infer<typeof Z_BookableUnitTypes>
