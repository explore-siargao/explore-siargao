import { z } from "zod"
import { Z_HouseReview } from "./zod"

export type T_HouseRule = z.infer<typeof Z_HouseReview>
