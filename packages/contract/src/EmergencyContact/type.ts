import { z } from "zod"
import { Z_EmergencyContact } from "./zod"

export type T_EmergencyContact = z.infer<typeof Z_EmergencyContact>
