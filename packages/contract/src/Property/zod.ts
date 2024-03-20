import {z} from "zod";
import { Z_Photo } from "../Photo";
import { Z_BookableUnit } from "../BookableUnit";
import { Z_Address } from "../Address";
import { Z_User } from "../User";
import { Z_PropertyAmenities } from "../Amenity";

export const Z_Properties = z.object({
    id: z.number().optional(),
    offerBy: Z_User,
    propertyName: z.string(),
    propertyDescription: z.string(),
    propertyCurrency: z.string(),
    propertyPrimaryLanguage: z.string(),
    propertyPhotos: z.array(Z_Photo),
    propertyPhone: z.string(),
    propertyEmail: z.string(),
    PropertyAddress: z.array(Z_Address),
    propertyCheckInTime: z.union([z.string(), z.date()]),
    propertyCheckOutTime: z.union([z.string(), z.date()]),
    propertyLateCheckOutAllowed: z.boolean(),
    propertyLateCheckOutType: z.string(),
    propertyLateCheckoutValue: z.number(),
    propertyTermsAndConditions: z.string(),
    PropertyAmenities: z.array(Z_PropertyAmenities),
    taxId: z.number(),
    taxId2: z.number(),
    companyLegalName: z.string(),
    propertyType: z.enum(["Hostel", "Homestay", "Hotel", "Apartment", "Resort", "Villa"]),
    BookableUnit: z.array(Z_BookableUnit),
    createdAt: z.date().optional(),
    updatedAt: z.date().nullable().optional(),
    deletedAt: z.date().nullable().optional(),
})