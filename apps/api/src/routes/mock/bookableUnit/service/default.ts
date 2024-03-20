import { Request, Response } from 'express'
import { bookableUnit } from './jsons/bookableUnit'
import { ResponseService } from '@/common/service/response'
import { REQUIRED_VALUE_EMPTY } from '@/common/constants'

const response = new ResponseService()

// export const getReservationsByGuest = async (req: Request, res: Response) => {
//   const guestId = Number(req.params.guestId)

//   const filterReservations = bookableUnit.filter((item) => {
//     return guestId === item.mainGuestId
//   })

//   res.json(
//     response.success({
//       items: filterReservations,
//       allItemCount: filterReservations.length,
//     })
//   )
// }

export const addBookableUnit = async (req: Request, res: Response) => {
    const hostId = Number(req.params.hostId)
  
    const { propertyId, bookableUnitTypeId } = req.body
  
    if (!propertyId || !bookableUnitTypeId) {
      return res.json(response.error({ message: REQUIRED_VALUE_EMPTY }))
    }
  
    const bookableUnitData = {
      id: 11,
      bookableUnitTypeId: bookableUnitTypeId,
      propertyId: propertyId,
      BookableUnitType: {
        id: 11,
        Category: 'Entire Villa',
        Name: 'Villa Aurora',
        Description: 'Tropical paradise perched on the cliffs',
        isPrivate: true,
        maxGuests: 6,
        adultsIncluded: 1,
        childrenIncluded: 1,
        isMultiroomUnit: false,
        photos: [
          {
            id: 10,
            key: '3.jpg',
            thumbKey: '3.jpg',
            caption: 'Cabin Photo',
          },
          {
            id: 11,
            key: '2.jpg',
            thumbKey: '2.jpg',
            caption: 'Cabin Photo',
          },
        ],
        features: [
          {
            id: 10,
            feature: 'Infinity Pool',
          },
          {
            id: 11,
            feature: 'Forest View',
          },
        ],
        bedconfigs: [
          {
            id: 10,
            roomName: 'Master Suite',
            bedType: 'King Bed',
            bedQty: 1,
          },
          {
            id: 11,
            roomName: 'Guest Room',
            bedType: 'Queen Bed',
            bedQty: 2,
          },
        ],
        numBedrooms: 2,
        numBathrooms: 1,
        minNightlyRate: 900.0,
        totalSizeSqm: 85.0,
        additionalPricePerPerson: 100.0,
        thresholdOccupancyForAdditionalCharge: 199.99,
      },
      Property: {
        id: 7,
        propertyName: 'Mountain Vista',
        propertyDescription: 'Tranquil villa with stunning mountain vistas',
        propertyCurrency: 'USD',
        propertyPrimaryLanguage: 'English',
        propertyPhone: '555-9876',
        propertyEmail: 'mountainvista@example.com',
        propertyAddress: {
          aptSuite: 'Villa 101',
          streetAddress: '456 Mountain Road',
          city: 'Aspen',
          stateProvince: 'Colorado',
          country: 'US',
          zipCode: 81611,
        },
        propertyCheckInTime: '2024-03-20 16:00:00.000',
        propertyCheckOutTime: '2024-03-25 11:00:00.000',
        propertyLateCheckOutAllowed: true,
        propertyLateCheckOutType: 'percent',
        propertyLateCheckOutValue: 0.5,
        propertyTermsAndConditions:
          'Guests are required to keep noise levels to a minimum, especially during quiet hours. Excessive noise or disruptive behavior will result in a warning, followed by eviction without refund if the behavior persists. The property is not responsible for any inconvenience caused by neighboring noise or construction.',
        taxID: '987-654-321-777',
        taxID2: '987-654-321-888',
        companyLegalName: 'Mountain Escapes LLC',
        propertyType: 'Villa',
        Address: {
          aptSuite: 'Villa 101',
          streetAddress: '456 Mountain Road',
          city: 'Aspen',
          stateProvince: 'Colorado',
          country: 'US',
          zipCode: 81611,
        },
        propertyPhotos: [
          {
            id: 7,
            key: '3.jpg',
            thumbKey: '3.jpg',
            caption: 'Villa Photo',
          },
          {
            id: 8,
            key: '4.jpg',
            thumbKey: '4.jpg',
            caption: 'Villa Photo',
          },
        ],
        propertyAmenities: [
          { id: 1, amenity1: 'Mountain View Terrace' },
          { id: 2, amenity2: 'Fire Pit' },
          { id: 3, amenity3: 'Hot Tub' },
          { id: 4, amenity4: 'Ski Storage' },
        ],
      },
    }
    
    const newBookableUnit = bookableUnit.push(bookableUnitData)
    res.json(
    response.success({
      item: bookableUnitData,
      message: 'New bookable unit has been successfully added.',
    })
  )
}

export const updateBookableUnit = async (req: Request, res: Response) => {
  const bookableUnitId = Number(req.params.id)

  const { propertyId, bookableUnitTypeId } = req.body

  const findBookableUnit = bookableUnit.findIndex(
    (item) => item.id === bookableUnitId
  )

  if (findBookableUnit === -1) {
    return res.json(
      response.error({ message: 'No bookable unit found or already deleted' })
    )
  }

  const updatedBookable = {
    ...bookableUnit[findBookableUnit],
    propertyId: propertyId,
    bookableUnitTypeId: bookableUnitTypeId,
  }
  // @ts-ignore
  bookableUnit[findBookableUnit] = updatedBookable
  res.json(
    response.success({
      item: bookableUnit[findBookableUnit],
      message: 'Bookable unit successfully updated',
    })
  )
}