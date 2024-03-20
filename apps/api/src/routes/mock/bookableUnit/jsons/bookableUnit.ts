export const bookableUnit = [
  {
    id: 1,
    bookabeUnitTypeId: 1,
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
          key: '1.jpgs',
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
    Property: {
      id: 1,
      propertyName: 'Paradise View',
      propertyDescription: 'Clean and affordable',
      propertyCurrency:'PHP',
      propertyPrimaryLanguage: 'Tagalog',
      propertyPhone: '586-6420',
      propertyEmail: 'paradiseview@gmail.com',
      propertyAddress: {
        aptSuite: null,
        streetAddress: '4013 High Hills',
        city: 'Silang',
        stateProvince: 'Cavite',
        country: 'PH',
        zipCode: 1052,
      },
      propertyCheckInTime: '2024-03-20 01:05:43.736',
      propertyCheckOutTime: '2024-03-25 01:05:43.736',
      propertyLateCheckOutAllowed: true,
      propertyLateCheckOutType: 'percent',
      propertyLateCheckOutValue: 0.50,
      propertyTermsAndConditions:
        'Guests must adhere to a no-smoking policy within the property premises and agree to vacate the premises by the specified check-out time.',
      taxID: '123-456-789-000',
      taxID2: '123-456-789-111',
      companyLegalName: 'Amazing Places Group of Hostels',
      propertyType: 'Hostel',
      Address: {
        aptSuite: null,
        streetAddress: '4013 High Hills',
        city: 'Silang',
        stateProvince: 'Cavite',
        country: 'PH',
        zipCode: 1052,
      },
      propertyPhotos: [
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
      propertyAmenities: [
        { id: 1, amenity1: 'Swimming pool'},
        { id: 1, amenity2: 'Fitness center'},
        { id: 1, amenity3: 'On-site restaurant'},
        { id: 1, amenity4: 'Complimentary breakfast'},
        { id: 1, amenity5: 'Free Wi-Fi'},
        { id: 1, amenity6: 'Parking'},
      ]
    },
  },

  {
    id: 2,
    bookabeUnitTypeId: 2,
    propertyId: 2,
    BookableUnitType: {
      id: 2,
      Category: 'Bed in Room',
      Name: 'Cozy Room',
      Description: 'Comfortable and warm room',
      isPrivate: true,
      maxGuests: 8,
      adultsIncluded: 4,
      childrenIncluded: 3,
      isMultiroomUnit: false,
      photos: [
        {
          id: 2,
          key: '1.jpg',
          thumbKey: '1.jpg',
          caption: 'Room Photo',
        },
        {
          id: 3,
          key: '2.jpg',
          thumbKey: '2.jpg',
          caption: 'Room Photo',
        },
      ],
      features: [
        {
          id: 2,
          feature: 'Double Bed',
        },
        {
          id: 3,
          feature: 'for 2 persons',
        },
      ],
      bedconfigs: [
        {
          id: 2,
          roomName: 'Zen room',
          bedType: 'Double Bed',
          bedQty: 1,
        },
      ],
      numBedrooms: 8,
      numBathrooms: 4,
      minNightlyRate: 950.50,
      totalSizeSqm: 32.50,
      additionalPricePerPerson: 320.50,
      thresholdOccupancyForAdditionalCharge: 249.75,
    },
    Property: {
      id: 2,
      propertyName: 'Sunset Retreat',
      propertyDescription: 'Tranquil and scenic',
      propertyCurrency:'PHP',
      propertyPrimaryLanguage: 'English',
      propertyPhone: '586-6421',
      propertyEmail: 'sunsetretreat@gmail.com',
      propertyAddress: {
        aptSuite: null,
        streetAddress: '215 Ocean Boulevard',
        city: 'Tagaytay',
        stateProvince: 'Cavite',
        country: 'PH',
        zipCode: 4120,
      },
      propertyCheckInTime: '2024-03-20 01:05:43.736',
      propertyCheckOutTime: '2024-03-25 01:05:43.736',
      propertyLateCheckOutAllowed: true,
      propertyLateCheckOutType: 'percent',
      propertyLateCheckOutValue: 0.50,
      propertyTermsAndConditions:
        'Guests must respect the quiet hours from 10:00 PM to 7:00 AM and refrain from bringing pets into the property.',
      taxID: '987-654-321-000',
      taxID2: '987-654-321-111',
      companyLegalName: 'Sunset Escapes Co.',
      propertyType: 'Vacation Rental',
      Address: {
        aptSuite: null,
        streetAddress: '215 Ocean Boulevard',
        city: 'Tagaytay',
        stateProvince: 'Cavite',
        country: 'PH',
        zipCode: 4120,
      },
      propertyPhotos: [
        {
          id: 2,
          key: '1.jpg',
          thumbKey: '1.jpg',
          caption: 'Room Photo',
        },
        {
          id: 3,
          key: '2.jpg',
          thumbKey: '2.jpg',
          caption: 'Room Photo',
        },
      ],
      propertyAmenities: [
        { id: 1, amenity1: 'Private beach access'},
        { id: 2, amenity2: 'Garden'},
        { id: 3, amenity3: 'Barbecue facilities'},
        { id: 4, amenity4: 'Terrace'},
        { id: 5, amenity5: 'Free parking'},
        { id: 6, amenity6: 'Wi-Fi'},
      ]
    },
  },

  {
    id: 3,
    bookabeUnitTypeId: 1,
    propertyId: 3,
    BookableUnitType: {
      id: 3,
      Category: 'Room in Building',
      Name: 'Luxury Suite',
      Description: 'Exquisite and lavish suite',
      isPrivate: true,
      maxGuests: 6,
      adultsIncluded: 3,
      childrenIncluded: 2,
      isMultiroomUnit: false,
      photos: [
        {
          id: 3,
          key: '1.jpg',
          thumbKey: '1.jpg',
          caption: 'Suite Photo',
        },
        {
          id: 4,
          key: '2.jpg',
          thumbKey: '2.jpg',
          caption: 'Suite Photo',
        },
      ],
      features: [
        {
          id: 3,
          feature: 'King Bed',
        },
        {
          id: 4,
          feature: 'for 2 persons',
        },
      ],
      bedconfigs: [
        {
          id: 3,
          roomName: 'Royal suite',
          bedType: 'King Bed',
          bedQty: 1,
        },
      ],
      numBedrooms: 6,
      numBathrooms: 3,
      minNightlyRate: 1500.00,
      totalSizeSqm: 45.00,
      additionalPricePerPerson: 500.00,
      thresholdOccupancyForAdditionalCharge: 399.99,
    },
    Property: {
      id: 3,
      propertyName: 'Royal Palace',
      propertyDescription: 'Opulent and grand',
      propertyCurrency:'PHP',
      propertyPrimaryLanguage: 'English',
      propertyPhone: '586-6422',
      propertyEmail: 'royalpalace@gmail.com',
      propertyAddress: {
        aptSuite: null,
        streetAddress: '123 Majestic Road',
        city: 'Makati',
        stateProvince: 'Metro Manila',
        country: 'PH',
        zipCode: 1234,
      },
      propertyCheckInTime: '2024-03-20 01:05:43.736',
      propertyCheckOutTime: '2024-03-25 01:05:43.736',
      propertyLateCheckOutAllowed: true,
      propertyLateCheckOutType: 'percent',
      propertyLateCheckOutValue: 0.50,
      propertyTermsAndConditions:
        'Guests are required to present a valid ID upon check-in and provide a security deposit for incidentals.',
      taxID: '555-123-987-000',
      taxID2: '555-123-987-111',
      companyLegalName: 'Royal Hospitality Group',
      propertyType: 'Hotel',
      Address: {
        aptSuite: null,
        streetAddress: '123 Majestic Road',
        city: 'Makati',
        stateProvince: 'Metro Manila',
        country: 'PH',
        zipCode: 1234,
      },
      propertyPhotos: [
        {
          id: 3,
          key: '1.jpg',
          thumbKey: '1.jpg',
          caption: 'Suite Photo',
        },
        {
          id: 4,
          key: '2.jpg',
          thumbKey: '2.jpg',
          caption: 'Suite Photo',
        },
      ],
      propertyAmenities: [
        { id: 1, amenity1: '24-hour front desk'},
        { id: 2, amenity2: 'Concierge service'},
        { id: 3, amenity3: 'Valet parking'},
        { id: 4, amenity4: 'Spa'},
        { id: 5, amenity5: 'Restaurant'},
        { id: 6, amenity6: 'Room service'},
      ]
    },
  },

  {
    id: 4,
    bookabeUnitTypeId: 4,
    propertyId: 4,
    BookableUnitType: {
      id: 4,
      Category: "Entire Villa",
      Name: "Seaside Sanctuary",
      Description: "Luxurious villa with stunning ocean views",
      isPrivate: true,
      maxGuests: 8,
      adultsIncluded: 6,
      childrenIncluded: 2,
      isMultiroomUnit: false,
      photos: [
        {
          id: 4,
          key: "2.jpg",
          thumbKey: "2.jpg",
          caption: "Villa Photo"
        },
        {
          id: 5,
          key: "3.jpg",
          thumbKey: "3.jpg",
          caption: "Villa Photo"
        }
      ],
      features: [
        {
          id: 4,
          feature: "Infinity Pool"
        },
        {
          id: 5,
          feature: "Private Beach Access"
        }
      ],
      bedconfigs: [
        {
          id: 4,
          roomName: "Master Suite",
          bedType: "King Bed",
          bedQty: 1
        },
        {
          id: 5,
          roomName: "Guest Bedroom",
          bedType: "Queen Bed",
          bedQty: 2
        }
      ],
      numBedrooms: 3,
      numBathrooms: 3,
      minNightlyRate: 3000.00,
      totalSizeSqm: 250.00,
      additionalPricePerPerson: 700.00,
      thresholdOccupancyForAdditionalCharge: 599.99
    },
    Property: {
      id: 4,
      propertyName: "Oceanfront Oasis",
      propertyDescription: "Spectacular villa perched on the edge of the ocean",
      propertyCurrency: "USD",
      propertyPrimaryLanguage: "English",
      propertyPhone: "555-1234",
      propertyEmail: "oceanfrontoasis@example.com",
      propertyAddress: {
        aptSuite: "Villa 101",
        streetAddress: "789 Oceanfront Drive",
        city: "Malibu",
        stateProvince: "California",
        country: "US",
        zipCode: 90265
      },
      propertyCheckInTime: "2024-03-20 14:00:00.000",
      propertyCheckOutTime: "2024-03-25 10:00:00.000",
      propertyLateCheckOutAllowed: true,
      propertyLateCheckOutType: "fixed",
      propertyLateCheckOutValue: 200.00,
      propertyTermsAndConditions: "No smoking allowed. Pets are not permitted.",
      taxID: "987-654-321-123",
      taxID2: "987-654-321-456",
      companyLegalName: "Oceanfront Escapes Inc.",
      propertyType: "Villa",
      Address: {
        aptSuite: "Villa 101",
        streetAddress: "789 Oceanfront Drive",
        city: "Malibu",
        stateProvince: "California",
        country: "US",
        zipCode: 90265
      },
      propertyPhotos: [
        {
          id: 4,
          key: "2.jpg",
          thumbKey: "2.jpg",
          caption: "Villa Photo"
        },
        {
          id: 5,
          key: "3.jpg",
          thumbKey: "3.jpg",
          caption: "Villa Photo"
        }
      ],
      propertyAmenities: [
        { id: 1, amenity1: "Ocean View Terrace" },
        { id: 2, amenity2: "Hot Tub" },
        { id: 3, amenity3: "Wi-Fi" },
        { id: 4, amenity4: "Housekeeping Service" }
      ]
    }
  },
 
  {
    id: 5,
    bookabeUnitTypeId: 5,
    propertyId: 5,
    BookableUnitType: {
      id: 5,
      Category: "Entire Villa",
      Name: "Tropical Paradise",
      Description: "Luxurious villa surrounded by lush greenery",
      isPrivate: true,
      maxGuests: 10,
      adultsIncluded: 6,
      childrenIncluded: 2,
      isMultiroomUnit: false,
      photos: [
        {
          id: 5,
          key: "3.jpg",
          thumbKey: "3.jpg",
          caption: "Villa Photo"
        },
        {
          id: 6,
          key: "4.jpg",
          thumbKey: "4.jpg",
          caption: "Villa Photo"
        }
      ],
      features: [
        {
          id: 5,
          feature: "Private Pool"
        },
        {
          id: 6,
          feature: "Garden View"
        }
      ],
      bedconfigs: [
        {
          id: 7,
          roomName: "Master Suite",
          bedType: "King Bed",
          bedQty: 1
        },
        {
          id: 5,
          roomName: "Guest Room",
          bedType: "Queen Bed",
          bedQty: 2
        }
      ],
      numBedrooms: 3,
      numBathrooms: 3,
      minNightlyRate: 2500.00,
      totalSizeSqm: 200.00,
      additionalPricePerPerson: 700.00,
      thresholdOccupancyForAdditionalCharge: 599.99
    },
    Property: {
      id: 6,
      propertyName: "Tropical Haven",
      propertyDescription: "An exclusive sanctuary in a tropical setting",
      propertyCurrency: "USD",
      propertyPrimaryLanguage: "English",
      propertyPhone: "555-6789",
      propertyEmail: "tropicalhaven@example.com",
      propertyAddress: {
        aptSuite: "Villa 101",
        streetAddress: "123 Palm Grove",
        city: "Miami",
        stateProvince: "Florida",
        country: "US",
        zipCode: 33101
      },
      propertyCheckInTime: "2024-03-20 14:00:00.000",
      propertyCheckOutTime: "2024-03-25 10:00:00.000",
      propertyLateCheckOutAllowed: true,
      propertyLateCheckOutType: "fixed",
      propertyLateCheckOutValue: 150.00,
      propertyTermsAndConditions: "No pets allowed. Smoking is allowed only in designated areas.",
      taxID: "987-654-321-222",
      taxID2: "987-654-321-333",
      companyLegalName: "Tropical Retreats LLC",
      propertyType: "Villa",
      Address: {
        aptSuite: "Villa 101",
        streetAddress: "123 Palm Grove",
        city: "Miami",
        stateProvince: "Florida",
        country: "US",
        zipCode: 33101
      },
      propertyPhotos: [
        {
          id: 5,
          key: "7.jpg",
          thumbKey: "7.jpg",
          caption: "Villa Photo"
        },
        {
          id: 6,
          key: "3.jpg",
          thumbKey: "3.jpg",
          caption: "Villa Photo"
        }
      ],
      propertyAmenities: [
        { id: 1, amenity1: "Private Beach Access" },
        { id: 2, amenity2: "Outdoor Dining Area" },
        { id: 3, amenity3: "Fitness Center" },
        { id: 4, amenity4: "Concierge Service" }
      ]
    }
  },

  {
    id: 6,
    bookabeUnitTypeId: 6,
    propertyId: 6,
    BookableUnitType: {
      id: 6,
      Category: "Entire Villa",
      Name: "Oceanfront Retreat",
      Description: "Serene villa with breathtaking ocean views",
      isPrivate: true,
      maxGuests: 8,
      adultsIncluded: 4,
      childrenIncluded: 2,
      isMultiroomUnit: false,
      photos: [
        {
          id: 6,
          key: "5.jpg",
          thumbKey: "5.jpg",
          caption: "Villa Photo"
        },
        {
          id: 7,
          key: "6.jpg",
          thumbKey: "6.jpg",
          caption: "Villa Photo"
        }
      ],
      features: [
        {
          id: 6,
          feature: "Private Beach Access"
        },
        {
          id: 7,
          feature: "Infinity Pool"
        }
      ],
      bedconfigs: [
        {
          id: 6,
          roomName: "Master Suite",
          bedType: "King Bed",
          bedQty: 1
        },
        {
          id: 7,
          roomName: "Guest Room",
          bedType: "Queen Bed",
          bedQty: 2
        }
      ],
      numBedrooms: 3,
      numBathrooms: 3,
      minNightlyRate: 3000.00,
      totalSizeSqm: 250.00,
      additionalPricePerPerson: 800.00,
      thresholdOccupancyForAdditionalCharge: 699.99
    },
    Property: {
      id: 6,
      propertyName: "Coastal Escape",
      propertyDescription: "Tranquil villa overlooking the coast",
      propertyCurrency: "USD",
      propertyPrimaryLanguage: "English",
      propertyPhone: "555-1234",
      propertyEmail: "coastalescape@example.com",
      propertyAddress: {
        aptSuite: "Villa 101",
        streetAddress: "789 Coastal Road",
        city: "Malibu",
        stateProvince: "California",
        country: "US",
        zipCode: 90265
      },
      propertyCheckInTime: "2024-03-20 12:00:00.000",
      propertyCheckOutTime: "2024-03-25 12:00:00.000",
      propertyLateCheckOutAllowed: true,
      propertyLateCheckOutType: "fixed",
      propertyLateCheckOutValue: 200.00,
      propertyTermsAndConditions: "No pets allowed. Smoking is prohibited.",
      taxID: "987-654-321-444",
      taxID2: "987-654-321-555",
      companyLegalName: "Coastal Getaways Inc.",
      propertyType: "Villa",
      Address: {
        aptSuite: "Villa 101",
        streetAddress: "789 Coastal Road",
        city: "Malibu",
        stateProvince: "California",
        country: "US",
        zipCode: 90265
      },
      propertyPhotos: [
        {
          id: 6,
          key: "5.jpg",
          thumbKey: "5.jpg",
          caption: "Villa Photo"
        },
        {
          id: 7,
          key: "2.jpg",
          thumbKey: "2.jpg",
          caption: "Villa Photo"
        }
      ],
      propertyAmenities: [
        { id: 1, amenity1: "Ocean View Terrace" },
        { id: 2, amenity2: "Private Parking" },
        { id: 3, amenity3: "BBQ Area" },
        { id: 4, amenity4: "Housekeeping Service" }
      ]
    }
  },

  {
    id: 7,
    bookabeUnitTypeId: 7,
    propertyId: 7,
    BookableUnitType: {
      id: 7,
      Category: "Entire Villa",
      Name: "Mountain Retreat",
      Description: "Secluded villa nestled in the mountains",
      isPrivate: true,
      maxGuests: 6,
      adultsIncluded: 4,
      childrenIncluded: 1,
      isMultiroomUnit: false,
      photos: [
        {
          id: 7,
          key: "1.jpg",
          thumbKey: "1.jpg",
          caption: "Villa Photo"
        },
        {
          id: 8,
          key: "2.jpg",
          thumbKey: "2.jpg",
          caption: "Villa Photo"
        }
      ],
      features: [
        {
          id: 7,
          feature: "Scenic Views"
        },
        {
          id: 8,
          feature: "Hiking Trails Nearby"
        }
      ],
      bedconfigs: [
        {
          id: 7,
          roomName: "Master Suite",
          bedType: "King Bed",
          bedQty: 1
        },
        {
          id: 8,
          roomName: "Guest Room",
          bedType: "Queen Bed",
          bedQty: 1
        }
      ],
      numBedrooms: 2,
      numBathrooms: 2,
      minNightlyRate: 1800.00,
      totalSizeSqm: 150.00,
      additionalPricePerPerson: 500.00,
      thresholdOccupancyForAdditionalCharge: 399.99
    },
    Property: {
      id: 7,
      propertyName: "Mountain Vista",
      propertyDescription: "Tranquil villa with stunning mountain vistas",
      propertyCurrency: "USD",
      propertyPrimaryLanguage: "English",
      propertyPhone: "555-9876",
      propertyEmail: "mountainvista@example.com",
      propertyAddress: {
        aptSuite: "Villa 101",
        streetAddress: "456 Mountain Road",
        city: "Aspen",
        stateProvince: "Colorado",
        country: "US",
        zipCode: 81611
      },
      propertyCheckInTime: "2024-03-20 16:00:00.000",
      propertyCheckOutTime: "2024-03-25 11:00:00.000",
      propertyLateCheckOutAllowed: true,
      propertyLateCheckOutType: "percent",
      propertyLateCheckOutValue: 0.50,
      propertyTermsAndConditions: "No smoking allowed. Pets must be approved in advance.",
      taxID: "987-654-321-777",
      taxID2: "987-654-321-888",
      companyLegalName: "Mountain Escapes LLC",
      propertyType: "Villa",
      Address: {
        aptSuite: "Villa 101",
        streetAddress: "456 Mountain Road",
        city: "Aspen",
        stateProvince: "Colorado",
        country: "US",
        zipCode: 81611
      },
      propertyPhotos: [
        {
          id: 7,
          key: "3.jpg",
          thumbKey: "3.jpg",
          caption: "Villa Photo"
        },
        {
          id: 8,
          key: "4.jpg",
          thumbKey: "4.jpg",
          caption: "Villa Photo"
        }
      ],
      propertyAmenities: [
        { id: 1, amenity1: "Mountain View Terrace" },
        { id: 2, amenity2: "Fire Pit" },
        { id: 3, amenity3: "Hot Tub" },
        { id: 4, amenity4: "Ski Storage" }
      ]
    }
  },

  {
    id: 8,
    bookabeUnitTypeId: 8,
    propertyId: 8,
    BookableUnitType: {
      id: 8,
      Category: "Entire Villa",
      Name: "Lakefront Haven",
      Description: "Charming villa with serene lake views",
      isPrivate: true,
      maxGuests: 8,
      adultsIncluded: 6,
      childrenIncluded: 1,
      isMultiroomUnit: false,
      photos: [
        {
          id: 8,
          key: "5.jpg",
          thumbKey: "5.jpg",
          caption: "Villa Photo"
        },
        {
          id: 9,
          key: "1.jpg",
          thumbKey: "1.jpg",
          caption: "Villa Photo"
        }
      ],
      features: [
        {
          id: 8,
          feature: "Lakefront Access"
        },
        {
          id: 9,
          feature: "Boat Dock"
        }
      ],
      bedconfigs: [
        {
          id: 8,
          roomName: "Master Suite",
          bedType: "King Bed",
          bedQty: 1
        },
        {
          id: 8,
          roomName: "Guest Room",
          bedType: "Queen Bed",
          bedQty: 2
        }
      ],
      numBedrooms: 3,
      numBathrooms: 2,
      minNightlyRate: 2200.00,
      totalSizeSqm: 180.00,
      additionalPricePerPerson: 600.00,
      thresholdOccupancyForAdditionalCharge: 499.99
    },
    Property: {
      id: 8,
      propertyName: "Lakeside Retreat",
      propertyDescription: "Tranquil villa overlooking a peaceful lake",
      propertyCurrency: "USD",
      propertyPrimaryLanguage: "English",
      propertyPhone: "555-2468",
      propertyEmail: "lakesideretreat@example.com",
      propertyAddress: {
        aptSuite: "Villa 101",
        streetAddress: "789 Lakeside Avenue",
        city: "Lake Tahoe",
        stateProvince: "California",
        country: "US",
        zipCode: 96150
      },
      propertyCheckInTime: "2024-03-20 15:00:00.000",
      propertyCheckOutTime: "2024-03-25 10:00:00.000",
      propertyLateCheckOutAllowed: true,
      propertyLateCheckOutType: "fixed",
      propertyLateCheckOutValue: 150.00,
      propertyTermsAndConditions: "No smoking allowed. Pets must be approved in advance.",
      taxID: "987-654-321-999",
      taxID2: "987-654-321-000",
      companyLegalName: "Lakeside Escapes Inc.",
      propertyType: "Villa",
      Address: {
        aptSuite: "Villa 101",
        streetAddress: "789 Lakeside Avenue",
        city: "Lake Tahoe",
        stateProvince: "California",
        country: "US",
        zipCode: 96150
      },
      propertyPhotos: [
        {
          id: 8,
          key: "2.jpg",
          thumbKey: "2.jpg",
          caption: "Villa Photo"
        },
        {
          id: 9,
          key: "3.jpg",
          thumbKey: "3.jpg",
          caption: "Villa Photo"
        }
      ],
      propertyAmenities: [
        { id: 1, amenity1: "Private Lakeside Deck" },
        { id: 2, amenity2: "Kayaks Available" },
        { id: 3, amenity3: "Fireplace" },
        { id: 4, amenity4: "Barbecue Area" }
      ]
    }
  },

  {
    id: 9,
    bookabeUnitTypeId: 9,
    propertyId: 9,
    BookableUnitType: {
      id: 9,
      Category: "Entire Chalet",
      Name: "Alpine Haven",
      Description: "Cozy chalet retreat in the heart of the Alps",
      isPrivate: true,
      maxGuests: 6,
      adultsIncluded: 4,
      childrenIncluded: 1,
      isMultiroomUnit: false,
      photos: [
        {
          id: 9,
          key: "5.jpg",
          thumbKey: "5.jpg",
          caption: "Chalet Photo"
        },
        {
          id: 10,
          key: "2.jpg",
          thumbKey: "2.jpg",
          caption: "Chalet Photo"
        }
      ],
      features: [
        {
          id: 9,
          feature: "Mountain View"
        },
        {
          id: 10,
          feature: "Fireplace"
        }
      ],
      bedconfigs: [
        {
          id: 9,
          roomName: "Master Bedroom",
          bedType: "Queen Bed",
          bedQty: 1
        },
        {
          id: 10,
          roomName: "Guest Bedroom",
          bedType: "Twin Beds",
          bedQty: 2
        }
      ],
      numBedrooms: 2,
      numBathrooms: 1,
      minNightlyRate: 1200.00,
      totalSizeSqm: 100.00,
      additionalPricePerPerson: 300.00,
      thresholdOccupancyForAdditionalCharge: 299.99
    },
    Property: {
      id: 9,
      propertyName: "Alpine Retreat",
      propertyDescription: "Idyllic chalet nestled in a picturesque Alpine village",
      propertyCurrency: "EUR",
      propertyPrimaryLanguage: "English",
      propertyPhone: "555-2468",
      propertyEmail: "alpineretreat@example.com",
      propertyAddress: {
        aptSuite: "Chalet 101",
        streetAddress: "789 Alpine Street",
        city: "Zermatt",
        stateProvince: "Valais",
        country: "CH",
        zipCode: "3920"
      },
      propertyCheckInTime: "2024-03-20 14:00:00.000",
      propertyCheckOutTime: "2024-03-25 10:00:00.000",
      propertyLateCheckOutAllowed: true,
      propertyLateCheckOutType: "fixed",
      propertyLateCheckOutValue: 100.00,
      propertyTermsAndConditions: "No smoking allowed. Pets are not permitted.",
      taxID: "987-654-321-999",
      taxID2: "987-654-321-000",
      companyLegalName: "Alpine Getaways Ltd.",
      propertyType: "Chalet",
      Address: {
        aptSuite: "Chalet 101",
        streetAddress: "789 Alpine Street",
        city: "Zermatt",
        stateProvince: "Valais",
        country: "CH",
        zipCode: "3920"
      },
      propertyPhotos: [
        {
          id: 9,
          key: "5.jpg",
          thumbKey: "5.jpg",
          caption: "Chalet Photo"
        },
        {
          id: 10,
          key: "2.jpg",
          thumbKey: "2.jpg",
          caption: "Chalet Photo"
        }
      ],
      propertyAmenities: [
        { id: 1, amenity1: "Ski-in/Ski-out Access" },
        { id: 2, amenity2: "Sauna" },
        { id: 3, amenity3: "Wi-Fi" },
        { id: 4, amenity4: "Parking" }
      ]
    }
  },

  {
    id: 10,
    bookabeUnitTypeId: 10,
    propertyId: 10,
    BookableUnitType: {
      id: 10,
      Category: "Entire Cabin",
      Name: "Rustic Retreat",
      Description: "Charming cabin surrounded by wilderness",
      isPrivate: true,
      maxGuests: 4,
      adultsIncluded: 2,
      childrenIncluded: 1,
      isMultiroomUnit: false,
      photos: [
        {
          id: 10,
          key: "4.jpg",
          thumbKey: "4.jpg",
          caption: "Cabin Photo"
        },
        {
          id: 11,
          key: "1.jpg",
          thumbKey: "1.jpg",
          caption: "Cabin Photo"
        }
      ],
      features: [
        {
          id: 10,
          feature: "Wood Burning Stove"
        },
        {
          id: 11,
          feature: "Forest View"
        }
      ],
      bedconfigs: [
        {
          id: 10,
          roomName: "Main Bedroom",
          bedType: "Queen Bed",
          bedQty: 1
        },
        {
          id: 11,
          roomName: "Loft",
          bedType: "Single Bed",
          bedQty: 2
        }
      ],
      numBedrooms: 2,
      numBathrooms: 1,
      minNightlyRate: 800.00,
      totalSizeSqm: 80.00,
      additionalPricePerPerson: 200.00,
      thresholdOccupancyForAdditionalCharge: 299.99
    },
    Property: {
      id: 9,
      propertyName: "Wilderness Haven",
      propertyDescription: "Secluded cabin retreat in the heart of nature",
      propertyCurrency: "USD",
      propertyPrimaryLanguage: "English",
      propertyPhone: "555-9876",
      propertyEmail: "wildernesshaven@example.com",
      propertyAddress: {
        aptSuite: "Cabin 101",
        streetAddress: "456 Forest Lane",
        city: "Yellowstone",
        stateProvince: "Wyoming",
        country: "US",
        zipCode: 82190
      },
      propertyCheckInTime: "2024-03-20 16:00:00.000",
      propertyCheckOutTime: "2024-03-25 11:00:00.000",
      propertyLateCheckOutAllowed: true,
      propertyLateCheckOutType: "fixed",
      propertyLateCheckOutValue: 100.00,
      propertyTermsAndConditions: "No smoking allowed. Pets must be approved in advance.",
      taxID: "987-654-321-444",
      taxID2: "987-654-321-555",
      companyLegalName: "Wilderness Escapes Inc.",
      propertyType: "Cabin",
      Address: {
        aptSuite: "Cabin 101",
        streetAddress: "456 Forest Lane",
        city: "Yellowstone",
        stateProvince: "Wyoming",
        country: "US",
        zipCode: 82190
      },
      propertyPhotos: [
        {
          id: 10,
          key: "4.jpg",
          thumbKey: "4.jpg",
          caption: "Cabin Photo"
        },
        {
          id: 11,
          key: "1.jpg",
          thumbKey: "1.jpg",
          caption: "Cabin Photo"
        }
      ],
      propertyAmenities: [
        { id: 1, amenity1: "Hiking Trails Access" },
        { id: 2, amenity2: "Outdoor Fire Pit" },
        { id: 3, amenity3: "Pet-Friendly" },
        { id: 4, amenity4: "Barbecue Grill" }
      ]
    }
  }
  

  
  
  
  

  
  
  
]
