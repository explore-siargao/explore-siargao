import { Request, Response } from 'express'
import { properties } from './jsons/property'
import { ResponseService } from '@/common/service/response'
import { Z_Properties } from '@repo/contract'
import { USER_NOT_AUTHORIZED } from '@/common/constants'

const response = new ResponseService()

export const getPropertyByMainGuestId = async (req: Request, res: Response) => {
  const mainGuestId = Number(req.params.mainGuestId)
  const filterProperties = properties.filter((property) =>
    property.reservation.some(
      (reservation) => reservation.mainGuestId === mainGuestId
    )
  )
  const filteredProperties = filterProperties
    .map((property) => ({
      ...property,
      reservation: property.reservation.filter(
        (reservation) => reservation.mainGuestId === mainGuestId
      ),
    }))
    .filter((property) => property.reservation.length > 0)
  res.json(
    response.success({
      items: filteredProperties,
    })
  )
}

export const getPropertyByHostId = async (req: Request, res: Response) => {
  const hostId = Number(req.params.hostId)
  const filteredProperties = properties.filter((item) => {
    return hostId === item.Host.id
  })
  res.json(
    response.success({
      items: filteredProperties,
      allItemCount: filteredProperties.length,
    })
  )
}

export const getPropertyById = async (req: Request, res: Response) => {
  const propertyId = Number(req.params.id)
  const property = properties.find((item) => item.id === propertyId)
  res.json(response.success({ item: property }))
}

export const addProperty = async (req: Request, res: Response) => {
  const hostId = Number(req.params.hostId)
  const {
    propertyName,
    propertyDescription,
    propertyCurrency,
    propertyPrimaryLanguage,
    propertyPhone,
    propertyEmail,
    propertyAddress,
    propertyCheckInTime,
    propertyCheckOutTime,
    propertyLateCheckOutAllowed,
    propertyLateCheckOutType,
    propertyLateCheckoutValue,
    propertyTermsAndConditions,
    taxId,
    taxId2,
    companyLegalName,
    propertyType,
  } = req.body

  const isValidInput = Z_Properties.safeParse(req.body)
  if (!hostId) {
    return res.json(response.error({ message: USER_NOT_AUTHORIZED }))
  }
  if (!isValidInput.success) {
    return res.json(
      response.error({ message: JSON.parse(isValidInput.error.message) })
    )
  }

  const propertyPhotos = [
    {
      id: 1,
      thumbKey: '1.jpg',
      key: '2.jpg',
      caption: 'Outside view',
    },
    {
      id: 2,
      thumbKey: '3.jpg',
      key: '4.jpg',
      caption: 'Interior view',
    },
  ]

  const propertyAmenities = [
    {
      id: 1,
      amenity: 'Free WiFi',
    },
    {
      id: 2,
      amenity: 'Free Coffee',
    },
  ]

  const bookableUnit = [
    {
      id: 1,
      bookableUnitTypeId: 1,
      propertyId: 1,
      BookableUnitType: {
        id: 1,
        Category: 'Bed in Room',
        Name: 'Amazing Room',
        Description: 'Clean and big room',
        isPrivate: true,
        maxGuests: 10,
        adultsIncluded: 5,
        childrenIncluded: 4,
        isMultiroomUnit: false,
        photos: [
          {
            id: 1,
            key: '1.jpg',
            thumbKey: '1.jpg',
            caption: 'Bed Photo',
          },
          {
            id: 2,
            key: '2.jpg',
            thumbKey: '2.jpg',
            caption: 'Bed Photo',
          },
        ],

        features: [
          {
            id: 1,
            feature: 'Single Bed',
          },
          {
            id: 2,
            feature: 'for 4 persons',
          },
        ],
        bedconfigs: [
          {
            id: 1,
            roomName: 'Yahoo room',
            bedType: 'Single Bed',
            bedQty: 1,
          },
        ],
        numBedrooms: 10,
        numBathrooms: 6,
        minNightlyRate: 1050.75,
        totalSizeSqm: 36.75,
        additionalPricePerPerson: 370.75,
        thresholdOccupancyForAdditionalCharge: 299.5,
      },
    },
  ]

  const host = {
    id: hostId,
    firstName: 'Lebron',
    lastName: 'James',
  }

  const propertyData = {
    id: 10,
    hostId: hostId,
    offerBy: host,
    propertyName: propertyName,
    propertyDescription: propertyDescription,
    propertyCurrency: propertyCurrency,
    propertyPrimaryLanguage: propertyPrimaryLanguage,
    propertyPhotos: propertyPhotos,
    propertyPhone: propertyPhone,
    propertyEmail: propertyEmail,
    propertyAddress: propertyAddress,
    propertyCheckInTime: propertyCheckInTime,
    propertyCheckOutTime: propertyCheckOutTime,
    propertyLateCheckOutAllowed: propertyLateCheckOutAllowed,
    propertyLateCheckOutType: propertyLateCheckOutType,
    propertyLateCheckoutValue: propertyLateCheckoutValue,
    propertyTermsAndConditions: propertyTermsAndConditions,
    PropertyAmenities: propertyAmenities,
    taxId: taxId,
    taxId2: taxId2,
    companyLegalName: companyLegalName,
    propertyType: propertyType,
    BookableUnit: bookableUnit,
  }

  //@ts-ignore
  const newProperty = properties.push(propertyData)
  res.json(
    response.success({
      item: propertyData,
      message: 'New property added successfully',
    })
  )
}

export const updateProperty = async (req: Request, res: Response) => {
  const hostId = Number(req.params.hostId)
  const propertyId = Number(req.params.id)
  const propertyIndex = properties.findIndex(
    (item) => item.hostId === hostId && item.id === propertyId
  )
  if (propertyIndex === -1) {
    return res.json(
      response.error({
        message: 'Property not found for the given host id and property id',
      })
    )
  }
  const updatedProperty = { ...properties[propertyIndex], ...req.body }
  properties[propertyIndex] = updatedProperty
  res.json(
    response.success({
      message: 'Property updated successfully',
      item: updatedProperty,
    })
  )
}

export const deleteProperty = async (req: Request, res: Response) => {
  const hostId = Number(req.params.hostId)
  const propertyId = Number(req.params.id)
  const propertyIndex = properties.findIndex(
    (item) => item.hostId === hostId && item.id === propertyId
  )
  if (propertyIndex === -1) {
    return res.json(
      response.error({
        message: 'Property not found for the given host ID and ID',
      })
    )
  }
  const deletedProperty = properties.splice(propertyIndex, 1)[0]
  res.json(
    response.success({
      message: 'Property deleted successfully',
      item: deletedProperty,
    })
  )
}
