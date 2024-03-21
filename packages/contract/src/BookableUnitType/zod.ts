import { Z_Photo } from "../Photo"
import { Z_Feature } from "../Feature"
import { Z_BookableUnitBedConfig } from "../BookableUnitBedConfig"
import {z} from "zod";
import { Z_BookableUnit } from "../BookableUnit"
export const Z_BookableUnitTypes = z.object({
  id: z.number().optional(),
 hostId: z.number().optional(),
 Host:z.object({
    id:z.number(),
    firstname:z.string(),
    lastName:z.string()
 }).optional(),
 category: z.string(),
 name: z.string(),
 description:z.string(),
 isPrivate:z.boolean().optional(),
 maxGuests:z.number(),
 adultsIncluded:z.number(),
 childrenIncluded:z.number(),
 isMultiRoomUnit:z.boolean(),
 Photos:z.array(Z_Photo).optional(),
 Features:z.array(Z_Feature).optional(),
 BedConfigs:z.array(Z_BookableUnitBedConfig).optional(),
 BookableUnit:z.array(Z_BookableUnit).optional(),
 numBedrooms:z.number().optional(),
 numBathrooms:z.number().optional(),
 minNightlyRate:z.number(),
 totalSizeSqm:z.number(), 
 additionalPricePerPerson:z.number(),
 thresholdOccupancyForAdditionalCharge:z.number(),
  createdAt: z.date().optional(),
  updatedAt: z.date().nullable().optional(),
  deletedAt: z.date().nullable().optional(),
})

