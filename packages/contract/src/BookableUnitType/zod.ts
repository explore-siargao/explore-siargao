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
 isPrivate:z.boolean(),
 maxGuest:z.number(),
 adultsIncluded:z.number(),
 childrenIncluded:z.number(),
 isMultiRoomUnit:z.boolean(),
 Photos:z.array(Z_Photo),
 Features:z.array(Z_Feature),
 BedConfigs:z.array(Z_BookableUnitBedConfig),
 BookableUnit:z.array(Z_BookableUnit),
 numBedrooms:z.number(),
 numBathrooms:z.number(),
 minNightlyRate:z.number(),
 totalSizeSqm:z.number(),
 additionalPricePerPerson:z.number(),
 thresholdOccupancyForAdditionalCharge:z.number(),
  createdAt: z.date().optional(),
  updatedAt: z.date().nullable().optional(),
  deletedAt: z.date().nullable().optional(),
})

