import { prisma } from '@/common/helpers/prismaClient'
import { encryptKey } from '@/common/config'
import CryptoJS from 'crypto-js'

const main = async () => {
  const createUsers = await prisma.user.createMany({
    data: [
      {
        email: 'test@test.com',
        password: String(CryptoJS.AES.encrypt('test', encryptKey)),
        registrationType: 'Manual',
        role: 'Host',
      },
      {
        email: 'ramilkaharian25@gmail.com',
        registrationType: 'Google',
        role: 'Host',
      },
      {
        email: 'jp.madrigal07@gmail.com',
        registrationType: 'Google',
        role: 'Host',
      },
      {
        email: 'richard.delapena19@gmail.com',
        registrationType: 'Google',
        role: 'User',
      },
      {
        email: 'arjayandal93@gmail.com',
        registrationType: 'Google',
        role: 'User',
      },
    ],
  })
  const getUsers = await prisma.user.findMany({
    where: {
      deletedAt: null,
    },
  })

  const createPersonalInfos = await prisma.personalInfo.createMany({
    data: [
      {
        firstName: 'test',
        lastName: 'account',
        birthDate: '2014-02-19T12:34:56.789Z',
        userId: getUsers[0]?.id ? getUsers[0].id : 0,
        phoneNumber: '09092558726',
        country: 'PH',
        currency: 'PHP',
        language: 'English',
      },
      {
        firstName: 'Ramil',
        lastName: 'Kaharian',
        birthDate: '2014-02-19T12:34:56.789Z',
        userId: getUsers[1]?.id ? getUsers[1].id : 0,
        phoneNumber: '09092558726',
        country: 'PH',
        currency: 'PHP',
        language: 'English',
      },
      {
        firstName: 'John',
        lastName: 'Madrigal',
        birthDate: '2014-02-19T12:34:56.789Z',
        userId: getUsers[2]?.id ? getUsers[2].id : 0,
        phoneNumber: '09092558726',
        country: 'PH',
        currency: 'PHP',
        language: 'English',
      },
      {
        firstName: 'Richard',
        lastName: 'Dela pena',
        birthDate: '2014-02-19T12:34:56.789Z',
        userId: getUsers[3]?.id ? getUsers[3].id : 0,
        phoneNumber: '09092558726',
        country: 'PH',
        currency: 'PHP',
        language: 'English',
      },
      {
        firstName: 'Arjhay',
        lastName: 'Andal',
        birthDate: '2014-02-19T12:34:56.789Z',
        userId: getUsers[4]?.id ? getUsers[4].id : 0,
        phoneNumber: '09092558726',
        country: 'PH',
        currency: 'PHP',
        language: 'English',
      },
    ],
  })

  const getPersonalInfos = await prisma.personalInfo.findMany({
    where: {
      deletedAt: null,
    },
  })

  const createAddresses = await prisma.addresses.createMany({
    data: [
      {
        peronalInfoId: getPersonalInfos[0]?.id || 0,
        aptSuite: null,
        streetAddress: 'anywhere street',
        city: 'Kahit saan',
        stateProvince: 'Mindoro',
        country: 'PH',
        zipCode: 1000,
      },
      {
        peronalInfoId: getPersonalInfos[1]?.id || 0,
        aptSuite: null,
        streetAddress: 'Looban street',
        city: 'Santa Maria',
        stateProvince: 'Laguna',
        country: 'PH',
        zipCode: 4026,
      },
      {
        peronalInfoId: getPersonalInfos[2]?.id || 0,
        aptSuite: null,
        streetAddress: 'Gitna street',
        city: 'Paete',
        stateProvince: 'Laguna',
        country: 'PH',
        zipCode: 4016,
      },
      {
        peronalInfoId: getPersonalInfos[3]?.id || 0,
        aptSuite: null,
        streetAddress: 'San jose street',
        city: 'Kalayaan',
        stateProvince: 'laguna',
        country: 'PH',
        zipCode: 4015,
      },
      {
        peronalInfoId: getPersonalInfos[4]?.id || 0,
        aptSuite: null,
        streetAddress: 'JP rizal street',
        city: 'Sta. Cruz',
        stateProvince: 'Laguna',
        country: 'PH',
        zipCode: 4009,
      },
    ],
  })

  const createTaxes = await prisma.tax.createMany({
    data: [
      {
        vatId: '1111',
        userId: getUsers[0]?.id ? getUsers[0].id : 0,
        nameOnRegistration: 'test Account',
        addressLine1: 'Brgy JP Rizal',
        addressLine2: 'Brgy Tres',
        city: 'Paete',
        provinceRegion: 'Laguna',
        zipPostalCode: '4016',
        countryRegion: 'PH',
      },
      {
        vatId: '1112',
        userId: getUsers[1]?.id ? getUsers[1].id : 0,
        nameOnRegistration: 'Ramil Kaharian',
        addressLine1: 'Brgy JP Rizal',
        addressLine2: 'Brgy Tres',
        city: 'Paete',
        provinceRegion: 'Laguna',
        zipPostalCode: '4016',
        countryRegion: 'PH',
      },
      {
        vatId: '1113',
        userId: getUsers[2]?.id ? getUsers[2].id : 0,
        nameOnRegistration: 'John Madrigal',
        addressLine1: 'Brgy JP Rizal',
        addressLine2: 'Brgy Tres',
        city: 'Paete',
        provinceRegion: 'Laguna',
        zipPostalCode: '4016',
        countryRegion: 'PH',
      },
      {
        vatId: '1114',
        userId: getUsers[3]?.id ? getUsers[3].id : 0,
        nameOnRegistration: 'Richard',
        addressLine1: 'Brgy JP Rizal',
        addressLine2: 'Brgy Tres',
        city: 'Paete',
        provinceRegion: 'Laguna',
        zipPostalCode: '4016',
        countryRegion: 'PH',
      },
      {
        vatId: '1115',
        userId: getUsers[4]?.id ? getUsers[4].id : 0,
        nameOnRegistration: 'Arjhay',
        addressLine1: 'Brgy JP Rizal',
        addressLine2: 'Brgy Tres',
        city: 'Paete',
        provinceRegion: 'Laguna',
        zipPostalCode: '4016',
        countryRegion: 'PH',
      },
    ],
  })

  const createEmergencyContact = await prisma.emergencyContacts.createMany({
    data: [
      {
        name: 'Who ever',
        peronalInfoId: getPersonalInfos[0]?.id || 0,
        relationship: 'Father',
        email: 'whoiam@gmail.com',
        phoneNumber: '09090909099',
      },
      {
        name: 'Julita Kaharian',
        peronalInfoId: getPersonalInfos[1]?.id || 0,
        relationship: 'Mother',
        email: 'julita@gmail.com',
        phoneNumber: '09090909097',
      },
      {
        name: 'Patrick',
        peronalInfoId: getPersonalInfos[2]?.id || 0,
        relationship: 'Father',
        email: 'patrick@gmail.com',
        phoneNumber: '09090909090',
      },
      {
        name: 'Chad',
        peronalInfoId: getPersonalInfos[3]?.id || 0,
        relationship: 'Brother',
        email: 'chad@gmail.com',
        phoneNumber: '09090909094',
      },
      {
        name: 'Jenny',
        peronalInfoId: getPersonalInfos[4]?.id || 0,
        relationship: 'Sister',
        email: 'jenn@gmail.com',
        phoneNumber: '09090909095',
      },
    ],
  })

  const createPaymentmethod = await prisma.paymentMethod.createMany({
    data: [
      {
        userId: getUsers[0]?.id || 0,
        cardNumber: '5000000000',
        countryRegion: 'PH',
        cvv: 100,
        expirationDate: '02/27',
        zipCode: 4000,
        isDefault: true,
      },
      {
        userId: getUsers[1]?.id || 0,
        cardNumber: '5000000010',
        countryRegion: 'PH',
        cvv: 101,
        expirationDate: '07/29',
        zipCode: 4022,
        isDefault: false,
      },
      {
        userId: getUsers[2]?.id || 0,
        cardNumber: '5000000050',
        countryRegion: 'PH',
        cvv: 106,
        expirationDate: '04/30',
        zipCode: 4016,
        isDefault: false,
      },
      {
        userId: getUsers[3]?.id || 0,
        cardNumber: '5000000009',
        countryRegion: 'PH',
        cvv: 226,
        expirationDate: '12/25',
        zipCode: 4015,
        isDefault: true,
      },
      {
        userId: getUsers[4]?.id || 0,
        cardNumber: '5000000440',
        countryRegion: 'PH',
        cvv: 305,
        expirationDate: '04/29',
        zipCode: 4009,
        isDefault: true,
      },
    ],
  })

  const createAboutPlaces = await prisma.basicAboutPlace.createMany({
    data: [
      {
        guests: 10,
        beds: 10,
        bathRooms: 2,
        bedRooms: 3,
      },
      {
        guests: 20,
        beds: 10,
        bathRooms: 4,
        bedRooms: 10,
      },
      {
        guests: 4,
        beds: 2,
        bathRooms: 2,
        bedRooms: 1,
      },
      {
        guests: 15,
        beds: 6,
        bathRooms: 3,
        bedRooms: 2,
      },
      {
        guests: 5,
        beds: 2,
        bathRooms: 1,
        bedRooms: 1,
      },
    ],
  })

  const createHighlights = await prisma.highLights.createMany({
    data: [
      {
        icon: 'Wifi',
        title: 'Great for remote work',
        details: 'Fast wifi at 165 Mbps, plus a dedicated workspace.',
      },
      {
        icon: 'Clock',
        title: 'Self check-in',
        details: 'You can check in with the building staff.',
      },
      {
        icon: 'MapPin',
        title: 'Great location',
        details: '95% of recent guests gave the location a 5-star rating',
      },
      {
        icon: 'Clock',
        title: 'Great check-in experience',
        details:
          '100% of recent guests gave the check-in process a 5-star rating.',
      },
      {
        icon: 'calendar',
        title: 'Free cancellation before March 24',
        details: '',
      },
    ],
  })

  const createPlaceOffers = await prisma.placeOffers.createMany({
    data: [
      {
        icon: 'Cloud',
        category: 'Scenic views',
        title: 'City skyline view',
      },
      {
        icon: 'Hand',
        category: 'Bathroom',
        title: 'Hair dryer',
      },
      {
        icon: 'Soup',
        category: 'Bathroom',
        title: 'Cleaning products',
      },
      {
        icon: 'Tools',
        category: 'Bedroom and laundry',
        title: 'Essentials',
      },
      {
        icon: 'Hangers',
        category: 'Bedroom and laundry',
        title: 'Hangers',
      },
      {
        icon: 'Book',
        category: 'Entertainment',
        title: 'Books and reading material',
      },
    ],
  })

  const createListingPrices = await prisma.listingPrice.createMany({
    data: [
      {
        fee: 2000,
        cleaningFee: 100,
        serviceFee: 100,
        checkIn: '2024-01-29T03:01:27.936Z',
        checkOut: '2024-01-29T03:01:27.936Z',
        isNight: false,
        countGuest: 5,
      },
      {
        fee: 5000,
        cleaningFee: 200,
        serviceFee: 100,
        checkIn: '2024-01-29T03:01:27.936Z',
        checkOut: '2024-01-29T03:01:27.936Z',
        isNight: false,
        countGuest: 5,
      },
      {
        fee: 1000,
        cleaningFee: 50,
        serviceFee: 50,
        checkIn: '2024-01-29T03:01:27.936Z',
        checkOut: '2024-01-29T03:01:27.936Z',
        isNight: true,
        countGuest: 10,
      },
      {
        fee: 4000,
        cleaningFee: 250,
        serviceFee: 200,
        checkIn: '2024-01-29T03:01:27.936Z',
        checkOut: '2024-01-29T03:01:27.936Z',
        isNight: true,
        countGuest: 7,
      },
      {
        fee: 1500,
        cleaningFee: 100,
        serviceFee: 100,
        checkIn: '2024-01-29T03:01:27.936Z',
        checkOut: '2024-01-29T03:01:27.936Z',
        isNight: false,
        countGuest: 5,
      },
    ],
  })

  const getListingPrices = await prisma.listingPrice.findMany({
    where: {
      deletedAt: null,
    },
  })

  const createListings = await prisma.listing.createMany({
    data: [
      {
        hostedById: getUsers[0]?.id || 0,
        listingPriceId: getListingPrices[0]?.id || 0,
        images: JSON.stringify([
          {
            fileKey: '1.jpg',
            alt: 'image',
          },
          {
            fileKey: '2.jpg',
            alt: 'image',
          },
          {
            fileKey: '3.jpg',
            alt: 'image',
          },
          {
            fileKey: '4.jpg',
            alt: 'image',
          },
          {
            fileKey: '5.jpg',
            alt: 'image',
          },
        ]),
        title: 'Test',
        category: 'Accomodation',
        address: 'Santa Maria, Laguna',
        latitude: 0.5,
        longitude: 0.5,
        whereYoullBe: JSON.stringify({
          description: 'Long description',
          workAround: 'Work around information',
        }),
        whereYoullSleep: JSON.stringify({
          kingBed: {
            count: 1,
            size: 'Large',
            icon: 'bed',
          },
        }),
      },
      {
        hostedById: getUsers[1]?.id || 0,
        listingPriceId: getListingPrices[1]?.id || 0,
        images: JSON.stringify([
          {
            fileKey: '5.jpg',
            alt: 'image',
          },
          {
            fileKey: '4.jpg',
            alt: 'image',
          },
          {
            fileKey: '3.jpg',
            alt: 'image',
          },
          {
            fileKey: '2.jpg',
            alt: 'image',
          },
          {
            fileKey: '1.jpg',
            alt: 'image',
          },
        ]),
        title: 'hello World',
        category: 'Accomodation',
        address: 'Santa Maria, Laguna',
        latitude: 6.5,
        longitude: 0.5,
        whereYoullBe: JSON.stringify({
          description: 'Long description',
          workAround: 'Work around information',
        }),
        whereYoullSleep: JSON.stringify({
          kingBed: {
            count: 1,
            size: 'Large',
            icon: 'bed',
          },
        }),
      },
      {
        hostedById: getUsers[1]?.id || 0,
        listingPriceId: getListingPrices[2]?.id || 0,
        images: JSON.stringify([
          {
            fileKey: '2.jpg',
            alt: 'image',
          },
          {
            fileKey: '3.jpg',
            alt: 'image',
          },
          {
            fileKey: '4.jpg',
            alt: 'image',
          },
          {
            fileKey: '5.jpg',
            alt: 'image',
          },
          {
            fileKey: '1.jpg',
            alt: 'image',
          },
        ]),
        title: 'Amazing World',
        category: 'Accomodation',
        address: 'Siniloan, Laguna',
        latitude: 1.5,
        longitude: 1.5,
        whereYoullBe: JSON.stringify({
          description: 'Long description',
          workAround: 'Work around information',
        }),
        whereYoullSleep: JSON.stringify({
          kingBed: {
            count: 1,
            size: 'Large',
            icon: 'bed',
          },
        }),
      },
      {
        hostedById: getUsers[0]?.id || 0,
        listingPriceId: getListingPrices[3]?.id || 0,
        images: JSON.stringify([
          {
            fileKey: '4.jpg',
            alt: 'image',
          },
          {
            fileKey: '3.jpg',
            alt: 'image',
          },
          {
            fileKey: '2.jpg',
            alt: 'image',
          },
          {
            fileKey: '1.jpg',
            alt: 'image',
          },
          {
            fileKey: '5.jpg',
            alt: 'image',
          },
        ]),
        title: 'Zkript View',
        category: 'Accomodation',
        address: 'Paete, Laguna',
        latitude: 0.5,
        longitude: 22.5,
        whereYoullBe: JSON.stringify({
          description: 'Long description',
          workAround: 'Work around information',
        }),
        whereYoullSleep: JSON.stringify({
          kingBed: {
            count: 1,
            size: 'Large',
            icon: 'bed',
          },
        }),
      },
      {
        hostedById: getUsers[2]?.id || 0,
        listingPriceId: getListingPrices[4]?.id || 0,
        images: JSON.stringify([
          {
            fileKey: '3.jpg',
            alt: 'image',
          },
          {
            fileKey: '1.jpg',
            alt: 'image',
          },
          {
            fileKey: '2.jpg',
            alt: 'image',
          },
          {
            fileKey: '5.jpg',
            alt: 'image',
          },
          {
            fileKey: '4.jpg',
            alt: 'image',
          },
        ]),
        title: 'Test',
        category: 'Accomodation',
        address: 'Santa Maria, Laguna',
        latitude: 0.5,
        longitude: 0.5,
        whereYoullBe: JSON.stringify({
          description: 'Long description',
          workAround: 'Work around information',
        }),
        whereYoullSleep: JSON.stringify({
          kingBed: {
            count: 1,
            size: 'Large',
            icon: 'bed',
          },
        }),
      },
    ],
  })

  const getListings = await prisma.listing.findMany({
    where: {
      deletedAt: null,
    },
  })
  const createListingDescriptions = await prisma.listingDescription.createMany({
    data: [
      {
        generalDescription: 'general description',
        aboutGuestAccess: 'about guest access',
        aboutSpace: 'About space',
        listingId: getListings[0]?.id,
      },
      {
        generalDescription:
          'Open the complimentary wine and listen to music via retro Marshall speakers. Here custom wood furniture meets textured concrete walls, plush Persian carpets, classic vintage pieces and 60s pop art accents. A refined fusion of industrial and retro features ultimately lends this loft its unique, special character. Perfect for a photogenic boutique art hotel vibe.',
        otherThingsNote:
          'CHECK IN REQUIREMENTS **- Govt ID (passport, drivers license etc)- Covid vaccination card- Required for all adults and children',
        aboutSpace:
          'ALTO RETRO is designed and conceptualized by the owner, all inspired from New York City loft apartments. Highly sought after with features in Spotph, DiscoverMNL, Real Living Magazine and ClicktheCitycom.',
        listingId: getListings[1]?.id,
      },
      {
        generalDescription:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        aboutGuestAccess:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        aboutSpace:
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum',
        otherThingsNote: 'other things need to know',
        listingId: getListings[2]?.id,
      },
      {
        generalDescription:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        listingId: getListings[3]?.id,
      },
      {
        generalDescription:
          "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
        aboutGuestAccess:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        listingId: getListings[4]?.id,
      },
    ],
  })

  const createCoupons = await prisma.coupon.createMany({
    data: [
      {
        createdBy: getUsers[0]?.id,
        code: '123456',
        expirationDate: '2024-04-29T03:01:27.936Z',
        isUsed: false,
        reward: 'Free food',
      },
      {
        createdBy: getUsers[0]?.id,
        code: 'ABCDEF',
        expirationDate: '2024-04-29T03:01:27.936Z',
        isUsed: true,
        reward: 'Free food',
        usedBy: getUsers[4]?.id,
      },
      {
        createdBy: getUsers[1]?.id,
        code: 'PASSWORD',
        expirationDate: '2024-04-29T03:01:27.936Z',
        isUsed: false,
        reward: 'Free tour',
      },
      {
        createdBy: getUsers[2]?.id,
        code: 'HELLOWORLD',
        expirationDate: '2024-04-29T03:01:27.936Z',
        isUsed: false,
        reward: '!000 USD',
      },
      {
        createdBy: getUsers[2]?.id,
        code: '55500A',
        expirationDate: '2024-04-29T03:01:27.936Z',
        isUsed: false,
        reward: 'Free food',
      },
    ],
  })

  const createWishgroups = await prisma.wishGroup.createMany({
    data: [
      {
        listingId: getListings[0]?.id || 0,
        userId: getUsers[3]?.id || 0,
        title: 'Awsome places',
        note: 'To return',
      },
      {
        listingId: getListings[2]?.id || 0,
        userId: getUsers[3]?.id || 0,
        title: 'Awsome places',
        note: 'To return',
      },
      {
        listingId: getListings[0]?.id || 0,
        userId: getUsers[4]?.id || 0,
        title: 'Soon',
        note: 'In the fitre I will go here',
      },
      {
        listingId: getListings[3]?.id || 0,
        userId: getUsers[4]?.id || 0,
        title: 'Awsome places',
        note: 'To return',
      },
      {
        listingId: getListings[4]?.id || 0,
        userId: getUsers[4]?.id || 0,
        title: 'Awsome places',
        note: 'To return',
      },
    ],
  })

  const createReviews = await prisma.review.createMany({
    data: [
      {
        accuracyRates: 5,
        checkInRates: 5,
        cleanLinessRates: 5,
        communicationRates: 5,
        locationRates: 5,
        valueRates: 5,
        comment: 'No comment',
        listingId: getListings[0]?.id || 0,
        userId: getUsers[3]?.id || 0,
      },
      {
        accuracyRates: 2,
        checkInRates: 2,
        cleanLinessRates: 2,
        communicationRates: 2,
        locationRates: 2,
        valueRates: 2,
        comment: 'No comment',
        listingId: getListings[1]?.id || 0,
        userId: getUsers[3]?.id || 0,
      },
      {
        accuracyRates: 4,
        checkInRates: 4,
        cleanLinessRates: 4,
        communicationRates: 4,
        locationRates: 4,
        valueRates: 2,
        comment: 'No comment',
        listingId: getListings[1]?.id || 0,
        userId: getUsers[4]?.id || 0,
      },
      {
        accuracyRates: 4,
        checkInRates: 5,
        cleanLinessRates: 3,
        communicationRates: 5,
        locationRates: 3,
        valueRates: 4,
        comment: 'No comment',
        listingId: getListings[0]?.id || 0,
        userId: getUsers[4]?.id || 0,
      },
      {
        accuracyRates: 3,
        checkInRates: 3,
        cleanLinessRates: 4,
        communicationRates: 4,
        locationRates: 2,
        valueRates: 3,
        comment: 'No comment',
        listingId: getListings[2]?.id || 0,
        userId: getUsers[4]?.id || 0,
      },
    ],
  })

  const createReportListings = await prisma.reportListing.createMany({
    data: [
      {
        listingId: getListings[1]?.id || 0,
        name: 'Scam',
        reason: 'Not same on picture',
        description: 'Host post false images',
        reportedBy: getUsers[4]?.id || 0,
      },
      {
        listingId: getListings[1]?.id || 0,
        name: 'Scam',
        reason: 'Not same on picture',
        description: 'Host post false images',
        reportedBy: getUsers[3]?.id || 0,
      },
      {
        listingId: getListings[4]?.id || 0,
        name: 'bad service',
        reason: 'Crew is not good',
        description: 'They do not work properly',
        reportedBy: getUsers[3]?.id || 0,
      },
      {
        listingId: getListings[4]?.id || 0,
        name: 'bad service',
        reason: 'Crew is not good',
        description: 'They do not work properly',
        reportedBy: getUsers[4]?.id || 0,
      },
      {
        listingId: getListings[1]?.id || 0,
        name: 'Waste of money',
        reason: 'Food so pricy',
        description: 'The price of place is not as expected from price',
        reportedBy: getUsers[3]?.id || 0,
      },
    ],
  })

  const getPaymentMethods = await prisma.paymentMethod.findMany({
    where: {
      deletedAt: null,
    },
  })
  const createReservationListings = await prisma.reservationListing.createMany({
    data: [
      {
        listingId: getListings[0]?.id || 0,
        guestCount: JSON.stringify({
          children: 2,
          adult: 2,
          infants: 0,
        }),
        currentFee: 1000,
        reservationDate: '2024-03-29T03:01:27.936Z',
        userId: getUsers[3]?.id || 0,
        paymentMethodId: getPaymentMethods[3]?.id || 0,
        isNight: false,
        status: 'Pending',
        totalFee: 4000,
        messageToHost: '',
      },
      {
        listingId: getListings[0]?.id || 0,
        guestCount: JSON.stringify({
          children: 1,
          adult: 2,
          infants: 0,
        }),
        currentFee: 1000,
        reservationDate: '2024-03-29T03:01:27.936Z',
        userId: getUsers[4]?.id || 0,
        paymentMethodId: getPaymentMethods[3]?.id || 0,
        isNight: false,
        status: 'Pending',
        totalFee: 3000,
        messageToHost: '',
      },
      {
        listingId: getListings[1]?.id || 0,
        guestCount: JSON.stringify({
          children: 2,
          adult: 3,
          infants: 0,
        }),
        currentFee: 500,
        reservationDate: '2024-03-29T03:01:27.936Z',
        userId: getUsers[3]?.id || 0,
        paymentMethodId: getPaymentMethods[3]?.id || 0,
        isNight: false,
        status: 'Pending',
        totalFee: 2500,
        messageToHost: '',
      },
      {
        listingId: getListings[2]?.id || 0,
        guestCount: JSON.stringify({
          children: 1,
          adult: 1,
          infants: 0,
        }),
        currentFee: 1500,
        reservationDate: '2024-03-29T03:01:27.936Z',
        userId: getUsers[3]?.id || 0,
        paymentMethodId: getPaymentMethods[3]?.id || 0,
        isNight: false,
        status: 'Pending',
        totalFee: 3000,
        messageToHost: '',
      },
      {
        listingId: getListings[4]?.id || 0,
        guestCount: JSON.stringify({
          children: 0,
          adult: 1,
          infants: 0,
        }),
        currentFee: 1500,
        reservationDate: '2024-03-29T03:01:27.936Z',
        userId: getUsers[4]?.id || 0,
        paymentMethodId: getPaymentMethods[3]?.id || 0,
        isNight: false,
        status: 'Pending',
        totalFee: 1500,
        messageToHost: '',
      },
    ],
  })

  const getHighlights = await prisma.highLights.findMany({
    where: {
      deletedAt: null,
    },
  })
  const createListinghighlights = await prisma.listingHighLights.createMany({
    data: [
      {
        highLightsId: getHighlights[0]?.id || 0,
        listingId: getListings[0]?.id || 0,
      },
      {
        highLightsId: getHighlights[1]?.id || 0,
        listingId: getListings[0]?.id || 0,
      },
      {
        highLightsId: getHighlights[2]?.id || 0,
        listingId: getListings[0]?.id || 0,
      },
      {
        highLightsId: getHighlights[3]?.id || 0,
        listingId: getListings[1]?.id || 0,
      },
      {
        highLightsId: getHighlights[4]?.id || 0,
        listingId: getListings[1]?.id || 0,
      },
    ],
  })

  const getPlaceOffers = await prisma.placeOffers.findMany({
    where: {
      deletedAt: null,
    },
  })

  const createListingPlaceOffers = await prisma.listingPlaceOffers.createMany({
    data: [
      {
        listingId: getListings[2]?.id || 0,
        placeOfferId: getPlaceOffers[0]?.id || 0,
      },
      {
        listingId: getListings[2]?.id || 0,
        placeOfferId: getPlaceOffers[1]?.id || 0,
      },
      {
        listingId: getListings[3]?.id || 0,
        placeOfferId: getPlaceOffers[2]?.id || 0,
      },
      {
        listingId: getListings[3]?.id || 0,
        placeOfferId: getPlaceOffers[3]?.id || 0,
      },
      {
        listingId: getListings[4]?.id || 0,
        placeOfferId: getPlaceOffers[4]?.id || 0,
      },
    ],
  })

  const createHouseRules = await prisma.houseRule.createMany({
    data: [
      {
        listingId: getListings[0]?.id || 0,
        title: 'Checking in and out',
      },
      {
        listingId: getListings[0]?.id || 0,
        title: 'During your stay',
      },
      {
        listingId: getListings[0]?.id || 0,
        title: 'Before you leave',
      },
      {
        listingId: getListings[1]?.id || 0,
        title: 'Checking in and out',
      },
      {
        listingId: getListings[1]?.id || 0,
        title: 'During your stay',
      },
    ],
  })

  const getHouseRules = await prisma.houseRule.findMany({
    where: {
      deletedAt: null,
    },
  })

  const createSafetyProperties = await prisma.safetyProperty.createMany({
    data: [
      {
        listingId: getListings[2]?.id || 0,
        title: 'Safety considerations',
      },
      {
        listingId: getListings[2]?.id || 0,
        title: 'Safety devices',
      },
      {
        listingId: getListings[2]?.id || 0,
        title: 'Property info',
      },
      {
        listingId: getListings[3]?.id || 0,
        title: 'Safety considerations',
      },
      {
        listingId: getListings[3]?.id || 0,
        title: 'Safety devices',
      },
    ],
  })

  const getSafetyProperties = await prisma.safetyProperty.findMany({
    where: {
      deletedAt: null,
    },
  })

  const createCancellationpolicies = await prisma.cancellationPolicy.createMany(
    {
      data: [
        {
          listingId: getListings[3]?.id || 0,
          cancelationDueDate: '2000-10-31T01:30:00.000-05:00',
          title: 'March 18',
        },
        {
          listingId: getListings[1]?.id || 0,
          cancelationDueDate: '2000-10-31T01:30:00.000-05:00',
          title: 'March 18',
        },
        {
          listingId: getListings[2]?.id || 0,
          cancelationDueDate: '2000-10-31T01:30:00.000-05:00',
          title: 'March 18',
        },
        {
          listingId: getListings[4]?.id || 0,
          cancelationDueDate: '2000-10-31T01:30:00.000-05:00',
          title: 'March 18',
        },
        {
          listingId: getListings[0]?.id || 0,
          cancelationDueDate: '2000-10-31T01:30:00.000-05:00',
          title: 'March 18',
        },
      ],
    }
  )

  const getCancellationPolicies = await prisma.cancellationPolicy.findMany({
    where: {
      deletedAt: null,
    },
  })

  const createRules = await prisma.rule.createMany({
    data: [
      {
        icon: 'Clock',
        rule: 'Check-in after 3:00 PM',
        description: '',
        houseRuleId: getHouseRules[0]?.id,
      },
      {
        icon: 'Clock',
        rule: 'Checkout before 11:00 AM',
        description: '',
        houseRuleId: getHouseRules[0]?.id,
      },
      {
        icon: 'People',
        rule: '4 guests maximum',
        description: '',
        houseRuleId: getHouseRules[1]?.id,
      },
      {
        icon: 'Moon',
        rule: 'Quiet hours',
        description: '',
        houseRuleId: getHouseRules[1]?.id,
      },
      {
        icon: 'Camera',
        rule: 'Commercial photography allowed',
        description: '',
        houseRuleId: getHouseRules[1]?.id,
      },

      {
        icon: 'Sea',
        rule: 'Pool/hot tub without a gate or lock',
        description: '',
        safePropertyId: getSafetyProperties[0]?.id,
      },
      {
        icon: 'Warning',
        rule: 'Climbing or play structure',
        description:
          'The Legaspi park is 2mins walk from my building and has a playground for children.',
        safePropertyId: getSafetyProperties[0]?.id,
      },
      {
        icon: 'CCTV',
        rule: 'Security camera/recording device',
        description:
          'For security purposes, we have one CCTV facing the entrance of the main door. ',
        safePropertyId: getSafetyProperties[1]?.id,
      },
      {
        icon: 'Stair',
        rule: 'Must climb stairs',
        description: '1 level',
        safePropertyId: getSafetyProperties[3]?.id,
      },
      {
        icon: 'Car',
        rule: 'No parking on property',
        description:
          '1) FREE PARKING (BACK STREETS) - Monday to Saturday (5pm to 7am) - Sunday (whole day) - Holidays (whole day) 2) PAID PARKING - Monday to Saturday (back streets. 7am to 5pm) - Establishments paid parking: tinyurl(dot)com/makatiparking',
        safePropertyId: getSafetyProperties[3]?.id,
      },

      {
        icon: '',
        rule: 'No refund',
        description: '',
        cancellationPolicyId: getCancellationPolicies[0]?.id,
      },
      {
        icon: '',
        rule: 'No refund',
        description: '',
        cancellationPolicyId: getCancellationPolicies[1]?.id,
      },
      {
        icon: '',
        rule: 'No refund',
        description: '',
        cancellationPolicyId: getCancellationPolicies[2]?.id,
      },
      {
        icon: '',
        rule: 'No refund',
        description: '',
        cancellationPolicyId: getCancellationPolicies[3]?.id,
      },
      {
        icon: '',
        rule: 'No refund',
        description: '',
        cancellationPolicyId: getCancellationPolicies[4]?.id,
      },
    ],
  })
  const createForgotPassword = await prisma.forgotPassword.createMany({
    data: [
      {
        email: 'ramilkaharian25@gmail.com',
        code: '999111',
        expiredAt: new Date(),
        used: true,
      },
      {
        email: 'ramilkaharian25@gmail.com',
        code: '909057',
        expiredAt: new Date(),
        used: true,
      },
      {
        email: 'ramilkaharian25@gmail.com',
        code: '981203',
        expiredAt: new Date(),
        used: true,
      },
      {
        email: 'ramilkaharian25@gmail.com',
        code: '665111',
        expiredAt: new Date(),
        used: true,
      },
      {
        email: 'ramilkaharian25@gmail.com',
        code: '432100',
        expiredAt: new Date(),
        used: false,
      },
    ],
  })

  const createMultiAuths = await prisma.multiFactorAuth.createMany({
    data: [
      {
        userId: getUsers[0]?.id || 0,
        code: '222111',
        expiredAt: new Date(),
        type: 'Google',
        used: true,
      },
      {
        userId: getUsers[0]?.id || 0,
        code: '881122',
        expiredAt: new Date(),
        type: 'Facebook',
        used: true,
      },
      {
        userId: getUsers[1]?.id || 0,
        code: '765432',
        expiredAt: new Date(),
        type: 'Google',
        used: true,
      },
      {
        userId: getUsers[2]?.id || 0,
        code: '870123',
        expiredAt: new Date(),
        type: 'Google',
        used: true,
      },
      {
        userId: getUsers[3]?.id || 0,
        code: '470356',
        expiredAt: new Date(),
        type: 'Google',
        used: true,
      },
    ],
  })

  console.log({
    createUsers,
    createPersonalInfos,
    createTaxes,
    createAboutPlaces,
    createHighlights,
    createAddresses,
    createEmergencyContact,
    createPaymentmethod,
    createPlaceOffers,
    createListingPrices,
    createListings,
    createListingDescriptions,
    createCoupons,
    createWishgroups,
    createReviews,
    createReportListings,
    createReservationListings,
    createListinghighlights,
    createListingPlaceOffers,
    createRules,
    createHouseRules,
    createSafetyProperties,
    createCancellationpolicies,
    createForgotPassword,
    createMultiAuths,
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
