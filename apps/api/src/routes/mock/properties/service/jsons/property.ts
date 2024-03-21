export const properties = [
  {
    id: 1,

    // Host
    hostId: 4,
    Host: {
      id: 4,
      firstName: 'Richard',
      lastName: 'Dela pena',
    },

    propertyName: 'Mountain top house',
    propertyDescription: 'House in the top of the mountain',
    propertyCurrency: 'PHP',
    propertyPrimaryLanguage: 'Tagalog',

    // Property Photos
    propertyPhotos: [
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
    ],

    propertyPhone: '09492622242',
    propertyEmail: 'supermario@gmail.com',
    propertyAddress: 'Kalayaan, Laguna',
    propertyCheckInTime: '2024-03-14 03:09:52.697',
    propertyCheckOutTime: '2024-03-17 03:09:52.697',
    propertyLateCheckOutAllowed: true,
    propertyLateCheckOutType: 'Type C',
    propertyLateCheckoutValue: 25.5,
    propertyTermsAndConditions: 'No payment no check in',

    // Property Amenities
    propertyAmenities: [
      {
        id: 1,
        amenity: 'Free WiFi',
      },
      {
        id: 2,
        amenity: 'Free Coffee',
      },
    ],

    taxId: 20032024,
    taxId2: 21032024,
    companyLegalName: 'Mario Bros real estate',
    propertyType: 'Villa',

    // Bookable Unit
    bookableUnit: [
      {
        id: 1,
        bookableUnitTypeId: 1,
        BookableUnitType: [
          {
            category: 'Bed in room',
            name: 'room 1',
            isPrivate: true,
            maxGuest: 5,
            adultsIncluded: 2,
            childrenIncluded: 1,
            isMultiRoomUnit: false,
          },
          {
            category: 'Bed in room',
            name: 'room 2',
            isPrivate: true,
            maxGuest: 8,
            adultsIncluded: 2,
            childrenIncluded: 4,
            isMultiRoomUnit: false,
          },
        ],
      },
      {
        id: 2,
        bookableUnitTypeId: 2,
        BookableUnitType: [
          {
            category: 'Bed in room',
            name: 'room 3',
            isPrivate: true,
            maxGuest: 10,
            adultsIncluded: 5,
            childrenIncluded: 5,
            isMultiRoomUnit: false,
          },
          {
            category: 'Bed in room',
            name: 'room 4',
            isPrivate: true,
            maxGuest: 5,
            adultsIncluded: 1,
            childrenIncluded: 1,
            isMultiRoomUnit: false,
          },
        ],
      },
    ],

    // Reservation
    reservation: [
      {
        id: 1,
        mainGuestId: 1,
        status: 'confirmed',
        startDate: '2024-03-14 03:09:52.697',
        endDate: '2024-03-15 03:09:52.697',
      },
      {
        id: 2,
        mainGuestId: 2,
        status: 'not_confirmed',
        startDate: '2024-03-16 03:09:52.697',
        endDate: '2024-03-17 03:09:52.697',
      },
    ],
  },

  {
    id: 2,

    // Host
    hostId: 2,
    Host: {
      id: 2,
      firstName: 'Ramil',
      lastName: 'Kaharian',
    },

    propertyName: 'Mountain top house',
    propertyDescription: 'House in the top of the mountain',
    propertyCurrency: 'PHP',
    propertyPrimaryLanguage: 'Tagalog',

    // Property Photos
    propertyPhotos: [
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
    ],

    propertyPhone: '09492622242',
    propertyEmail: 'supermario@gmail.com',
    propertyAddress: 'Santa Maria',
    propertyCheckInTime: '2024-03-14 03:09:52.697',
    propertyCheckOutTime: '2024-03-17 03:09:52.697',
    propertyLateCheckOutAllowed: true,
    propertyLateCheckOutType: 'Type C',
    propertyLateCheckoutValue: 25.5,
    propertyTermsAndConditions: 'No payment no check in',

    // Property Amenities
    propertyAmenities: [
      {
        id: 1,
        amenity: 'Free WiFi',
      },
      {
        id: 2,
        amenity: 'Free Coffee',
      },
    ],

    taxId: 20032024,
    taxId2: 21032024,
    companyLegalName: 'Mario Bros real estate',
    propertyType: 'Villa',

    // Bookable Unit
    bookableUnit: [
      {
        id: 1,
        bookableUnitTypeId: 1,
        BookableUnitType: [
          {
            category: 'Bed in room',
            name: 'room 1',
            isPrivate: true,
            maxGuest: 5,
            adultsIncluded: 2,
            childrenIncluded: 1,
            isMultiRoomUnit: false,
          },
          {
            category: 'Bed in room',
            name: 'room 2',
            isPrivate: true,
            maxGuest: 8,
            adultsIncluded: 2,
            childrenIncluded: 4,
            isMultiRoomUnit: false,
          },
        ],
      },
      {
        id: 2,
        bookableUnitTypeId: 2,
        BookableUnitType: [
          {
            category: 'Bed in room',
            name: 'room 3',
            isPrivate: true,
            maxGuest: 10,
            adultsIncluded: 5,
            childrenIncluded: 5,
            isMultiRoomUnit: false,
          },
          {
            category: 'Bed in room',
            name: 'room 4',
            isPrivate: true,
            maxGuest: 5,
            adultsIncluded: 1,
            childrenIncluded: 1,
            isMultiRoomUnit: false,
          },
        ],
      },
    ],

    // Reservation
    reservation: [
      {
        id: 1,
        mainGuestId: 4,
        status: 'confirmed',
        startDate: '2024-03-14 03:09:52.697',
        endDate: '2024-03-15 03:09:52.697',
      },
      {
        id: 2,
        mainGuestId: 4,
        status: 'not_confirmed',
        startDate: '2024-03-16 03:09:52.697',
        endDate: '2024-03-17 03:09:52.697',
      },
    ],
  },
]
