import {z} from "zod";

export const Z_PropertyAmenities = z.object({
    id: z.number().optional(),
    amenity: z.string(),
})