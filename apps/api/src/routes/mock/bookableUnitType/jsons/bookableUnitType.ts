const bookableUnitTypes = [
  {
    id: 1,
    category: 'Bed in room',
    name: 'Amazing room',
    description: 'Clean and big room',
    isPrivate: true,
    maxGuests: 4,
    adultsIncluded: 2,
    childrenIncluded: 2,
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
        key: '2.jpgs',
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
    numBedrooms: 1,
    minNightlyRate: 2000.0,
    totalSizeSqm: 3.5,
    additionalPricePerPerson: 100,
    thresholdOccupancyForAdditionalCharge: 4,
  },
  {
    id: 2,
    category: 'Bed in room',
    name: 'Cozy Cottage',
    description: 'A charming cottage for a peaceful stay',
    isPrivate: true,
    maxGuests: 2,
    adultsIncluded: 2,
    childrenIncluded: 0,
    isMultiroomUnit: false,
    photos: [
      {
        id: 3,
        key: '3.jpgs',
        thumbKey: '3.jpg',
        caption: 'Cottage Photo',
      },
    ],
    features: [
      {
        id: 3,
        feature: 'Queen Bed',
      },
      {
        id: 4,
        feature: 'Garden View',
      },
    ],
    bedconfigs: [
      {
        id: 2,
        roomName: 'Main Bedroom',
        bedType: 'Queen Bed',
        bedQty: 1,
      },
    ],
    numBedrooms: 1,
    minNightlyRate: 1500.0,
    totalSizeSqm: 2.0,
    additionalPricePerPerson: 0,
    thresholdOccupancyForAdditionalCharge: 2,
  },
  {
    id: 3,
    category: 'Bed in room',
    name: 'Luxury Suite',
    description: 'Elegant suite with breathtaking views',
    isPrivate: true,
    maxGuests: 3,
    adultsIncluded: 2,
    childrenIncluded: 1,
    isMultiroomUnit: false,
    photos: [
      {
        id: 4,
        key: '4.jpgs',
        thumbKey: '4.jpg',
        caption: 'Suite Photo',
      },
    ],
    features: [
      {
        id: 4,
        feature: 'King Bed',
      },
      {
        id: 5,
        feature: 'Balcony',
      },
    ],
    bedconfigs: [
      {
        id: 3,
        roomName: 'Master Suite',
        bedType: 'King Bed',
        bedQty: 1,
      },
    ],
    numBedrooms: 1,
    minNightlyRate: 3000.0,
    totalSizeSqm: 4.5,
    additionalPricePerPerson: 200,
    thresholdOccupancyForAdditionalCharge: 3,
  },
  {
    id: 4,
    category: 'Bed in room',
    name: 'Family Room',
    description: 'Spacious room perfect for families',
    isPrivate: true,
    maxGuests: 6,
    adultsIncluded: 4,
    childrenIncluded: 2,
    isMultiroomUnit: false,
    photos: [
      {
        id: 5,
        key: '5.jpgs',
        thumbKey: '5.jpg',
        caption: 'Family Room Photo',
      },
    ],
    features: [
      {
        id: 6,
        feature: 'Two Queen Beds',
      },
      {
        id: 7,
        feature: 'Connecting Doors',
      },
    ],
    bedconfigs: [
      {
        id: 6,
        roomName: 'Master Bedroom',
        bedType: 'Queen Bed',
        bedQty: 2,
      },
    ],
    numBedrooms: 1,
    minNightlyRate: 2500.0,
    totalSizeSqm: 5.0,
    additionalPricePerPerson: 150,
    thresholdOccupancyForAdditionalCharge: 4,
  },
  {
    id: 5,
    category: 'Bed in room',
    name: 'Executive Suite',
    description: 'Luxurious suite for business travelers',
    isPrivate: true,
    maxGuests: 2,
    adultsIncluded: 2,
    childrenIncluded: 0,
    isMultiroomUnit: false,
    photos: [
      {
        id: 1,
        key: '1.jpgs',
        thumbKey: '1.jpg',
        caption: 'Executive Suite Photo',
      },
    ],
    features: [
      {
        id: 2,
        feature: 'King Bed',
      },
      {
        id: 3,
        feature: 'Office Space',
      },
    ],
    bedconfigs: [
      {
        id: 8,
        roomName: 'Executive Bedroom',
        bedType: 'King Bed',
        bedQty: 1,
      },
    ],
    numBedrooms: 1,
    minNightlyRate: 3500.0,
    totalSizeSqm: 3.0,
    additionalPricePerPerson: 0,
    thresholdOccupancyForAdditionalCharge: 2,
  },
  {
    id: 6,
    category: 'Bed in room',
    name: 'Standard Room',
    description: 'Comfortable room for a relaxing stay',
    isPrivate: true,
    maxGuests: 2,
    adultsIncluded: 2,
    childrenIncluded: 0,
    isMultiroomUnit: false,
    photos: [
      {
        id: 2,
        key: '2.jpgs',
        thumbKey: '2.jpg',
        caption: 'Standard Room Photo',
      },
    ],
    features: [
      {
        id: 1,
        feature: 'Double Bed',
      },
      {
        id: 6,
        feature: 'City View',
      },
    ],
    bedconfigs: [
      {
        id: 9,
        roomName: 'Main Bedroom',
        bedType: 'Double Bed',
        bedQty: 1,
      },
    ],
    numBedrooms: 1,
    minNightlyRate: 1200.0,
    totalSizeSqm: 2.5,
    additionalPricePerPerson: 0,
    thresholdOccupancyForAdditionalCharge: 2,
  },
  {
    id: 7,
    category: 'Bed in room',
    name: 'Deluxe Double Room',
    description: 'Modern room with stylish decor',
    isPrivate: true,
    maxGuests: 2,
    adultsIncluded: 2,
    childrenIncluded: 0,
    isMultiroomUnit: false,
    photos: [
      {
        id: 3,
        key: '3.jpgs',
        thumbKey: '8.jpg',
        caption: 'Deluxe Room Photo',
      },
    ],
    features: [
      {
        id: 3,
        feature: 'Double Bed',
      },
      {
        id: 9,
        feature: 'Mini-bar',
      },
    ],
    bedconfigs: [
      {
        id: 2,
        roomName: 'Main Bedroom',
        bedType: 'Double Bed',
        bedQty: 1,
      },
    ],
    numBedrooms: 1,
    minNightlyRate: 1800.0,
    totalSizeSqm: 2.8,
    additionalPricePerPerson: 0,
    thresholdOccupancyForAdditionalCharge: 2,
  },
  {
    id: 8,
    category: 'Bed in room',
    name: 'Budget Room',
    description: 'Affordable option for budget travelers',
    isPrivate: true,
    maxGuests: 1,
    adultsIncluded: 1,
    childrenIncluded: 0,
    isMultiroomUnit: false,
    photos: [
      {
        id: 4,
        key: '4.jpgs',
        thumbKey: '4.jpg',
        caption: 'Budget Room Photo',
      },
    ],
    features: [
      {
        id: 1,
        feature: 'Single Bed',
      },
      {
        id: 10,
        feature: 'Shared Bathroom',
      },
    ],
    bedconfigs: [
      {
        id: 2,
        roomName: 'Main Bedroom',
        bedType: 'Single Bed',
        bedQty: 1,
      },
    ],
    numBedrooms: 1,
    minNightlyRate: 800.0,
    totalSizeSqm: 1.5,
    additionalPricePerPerson: 0,
    thresholdOccupancyForAdditionalCharge: 1,
  },
  {
    id: 9,
    category: 'Bed in room',
    name: 'Vintage Loft',
    description: 'Quirky loft with retro vibes',
    isPrivate: true,
    maxGuests: 2,
    adultsIncluded: 2,
    childrenIncluded: 0,
    isMultiroomUnit: false,
    photos: [
      {
        id: 5,
        key: '5.jpgs',
        thumbKey: '5.jpg',
        caption: 'Vintage Loft Photo',
      },
    ],
    features: [
      {
        id: 2,
        feature: 'Queen Bed',
      },
      {
        id: 11,
        feature: 'Exposed Brick Walls',
      },
    ],
    bedconfigs: [
      {
        id: 11,
        roomName: 'Main Loft Area',
        bedType: 'Queen Bed',
        bedQty: 1,
      },
    ],
    numBedrooms: 1,
    minNightlyRate: 2200.0,
    totalSizeSqm: 3.0,
    additionalPricePerPerson: 0,
    thresholdOccupancyForAdditionalCharge: 2,
  },
  {
    id: 10,
    category: 'Bed in room',
    name: 'Safari Tent',
    description: 'Adventure awaits in our safari tent',
    isPrivate: true,
    maxGuests: 4,
    adultsIncluded: 2,
    childrenIncluded: 2,
    isMultiroomUnit: false,
    photos: [
      {
        id: 1,
        key: '1.jpgs',
        thumbKey: '1.jpg',
        caption: 'Safari Tent Photo',
      },
    ],
    features: [
      {
        id: 4,
        feature: 'Double Bed',
      },
      {
        id: 12,
        feature: 'Outdoor Shower',
      },
    ],
    bedconfigs: [
      {
        id: 9,
        roomName: 'Main Sleeping Area',
        bedType: 'Double Bed',
        bedQty: 1,
      },
      {
        id: 15,
        roomName: 'Extra Sleeping Area',
        bedType: 'Single Bed',
        bedQty: 2,
      },
    ],
    numBedrooms: 1,
    minNightlyRate: 1800.0,
    totalSizeSqm: 5.0,
    additionalPricePerPerson: 100,
    thresholdOccupancyForAdditionalCharge: 4,
  },
]
