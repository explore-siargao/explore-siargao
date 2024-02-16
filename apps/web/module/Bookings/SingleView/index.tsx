"use client"
import { WidthWrapper } from "@/common/components/WidthWrapper"
import ThingsToKnow from "./components/ThingsToKnow"
import HostInformation from "./components/HostInformation"
import BookingDescription from "./components/BookingDescription"
import SectionInfo from "./components/SectionInfo"
import SummaryInfo from "./components/SummaryInfo"
import AvatarTitleDescription from "./components/AvatarTitleDescription"
import RatingSummary from "./components/Reviews/RatingSummary"
import UserReviews from "./components/Reviews/UserReviews"
import Highlights from "./components/Highlights"
import CheckoutProcess from "./components/CheckoutBox"
import PlaceOffers from "./components/PlaceOffers"
import WhereYoullBeDescription from "./components/Map"
import ListingDateRangePicker from "./components/ListingDateRangePicker"
import { Button } from "@/common/components/ui/Button"
import { Flag } from "lucide-react"
import ModalReporting from "./components/modals/ModalReporting"
import { useState } from "react"
import {
  LucideAlarmSmoke,
  LucideBeer,
  LucideBuilding,
  LucideCamera,
  LucideCctv,
  LucideCigaretteOff,
  LucideClock,
  LucideFireExtinguisher,
  LucideFishOff,
  LucideMoon,
  LucidePawPrint,
  LucidePersonStanding,
  LucideSpeaker,
} from "lucide-react"

const reportListingArr = [
  {
    name: "It's a scam",
    choices: [
      {
        reason: "The host asked me to pay outside of Airbnb",
        description: "Ex: Wire transfer, cash, bank transfer",
      },
    ],
  },
  {
    name: "It's inaccurate",
    choices: [
      {
        reason: "This is for second item",
        description: "Ex: this is for second item",
      },
      {
        reason: "This is for the description for second item",
        description: "Ex: this is for second item",
      },
    ],
  },
  {
    name: "It's not a real place to stay",
    choices: [
      {
        reason: "This is for third item",
        description: "Ex: This is for the third item",
      },
    ],
  },
  {
    name: "It's offensive",
    choices: [
      {
        reason: "This is for fourth item",
        description: "Ex: for fourth item",
      },
    ],
  },
]

const imageGallery = [
  {
    fileKey: "1.jpg",
    alt: "Image 1",
  },
  {
    fileKey: "2.jpg",
    alt: "Image 2",
  },
  {
    fileKey: "3.jpg",
    alt: "Image 3",
  },
  {
    fileKey: "4.jpg",
    alt: "Image 4",
  },
  {
    fileKey: "5.jpg",
    alt: "Image 5",
  },
]

const highlights = [
  {

    icon: "wifi",
    title: "Self check-in",
    description: "You can check in with the building staff.",
  },
  {
    id: 2,
    icon: "wifi",
    title: "Great location",
    description: "94% of recent guests gave the location a 5-star rating.",
  },
]

const description = {
  generalDescription:
    "Welcome to this stunning private villa located just near one of the most beautiful  beaches of Siargao. Enjoy scenic private outdoor pool views & stylishly furnished spacious  indoor  with a touch of local art. All hidden in 800 m2 tropical garden.",
  aboutSpace:
    "Welcome to this stunning private villa located just near one of the most beautiful beaches of Siargao. Enjoy scenic private outdoor pool views & stylishly furnished spacious indoor with a touch of local art. All hidden in 800 m2 tropical garden. The unique mixture of modern design & tropical nature provides comfort and privacy whilst offering unique experience of luxurious getaway in a jungle paradise.",
  aboutGuestAccess:
    "This spacious 1-bedroom villa is for full and exclusive use of our guests, which have 24h access to the property provided during their stay. To keep our Guests' privacy and safety the building is fenced and can be locked from inside and outside. The guests have unlimited access to private outdoor pool and bath tube with hot water. Free access to WiFi connection is provided.",
  otherThingsNote:
    "We recommend to our guests to have a motorbike or scooter to reach the house or get there by van from the airport (we can arrange this for you). Please be aware that the last part of the road to the villa is through a dirt road, that usually gets muddy during heavy rains, which occur between December and February. Please make sure you are comfortable driving a scooter/motorbike on a dirt road or rent a trike from General Luna.",
}

const offers = [
  {
    icon: "wifi",
    description: "WiFi",
    isNotIncluded: false,
  },
  {
    icon: "wifi",
    description: "Free street parking",
    isNotIncluded: false,
  },
  {
    icon: "wifi",
    description: "No smoking",
    isNotIncluded: false,
  },
  {
    icon: "wifi",
    description: "Smoke alarm",
    isNotIncluded: false,
  },
  {
    icon: "wifi",
    description: "Bed",
    isNotIncluded: false,
  },
  {
    icon: "wifi",
    description: "Angry people",
    isNotIncluded: false,
  },
  {
    icon: "wifi",
    description: "Alarm clock",
    isNotIncluded: true,
  },
  {
    icon: "wifi",
    description: "No bugs",
    isNotIncluded: false,
  },
]

const group = [
  {
    title: "Entertainment",
    offers: [
      { description: "WiFi", icon: "wifi", isNotIncluded: false },
      { description: "Free street parking", icon: "wifi", isNotIncluded: false },
    ],
  },
  {
    title: "Bedroom and laundry",
    offers: [
      { description: "Bed", icon: "wifi", isNotIncluded: false },
      { description: "Angry people", icon: "wifi", isNotIncluded: false },
    ],
  },
  {
    title: "Family",
    offers: [
      { description: "Alarm", icon: "wifi", isNotIncluded: false },
      { description: "Smoke alarm", icon: "wifi", isNotIncluded: false },
    ],
  },
  {
    title: "Not Included",
    offers: [
      { description: "Bug", icon: "wifi", isNotIncluded: true },
      {
        description: "Cigarette off",
        icon: "wifi",
        isNotIncluded: true,
      },
    ],
  },
]

const ratingSummary = {
    ratings: 5,
    reviews: 3,
    categories: [
      {
        title: "Cleanliness",
        rating: "4.8",
        isHorizontal: false,
      },
      {
        title: "Accuracy",
        rating: "4.8",
        isHorizontal: false,
      },
      {
        title: "Check-in",
        rating: "5.0",
        isHorizontal: false,
      },
      {
        title: "Communication",
        rating: "4.0",
        isHorizontal: false,
      },
      {
        title: "Location",
        rating: "4.0",
        isHorizontal: false,
      },
      {
        title: "Value",
        rating: "4.0",
        isHorizontal: false,
      },
    ],
}

const whereYouWillBeDesc = {
  location: "General Luna, Caraga, Philippines",
  coordinates: [14.5129, 21.4342] as [number, number],
  desc: "Mantaray Siargao is located in Purok 1, General Luna. A quiet residential area close to the heart of town. The property is nestled between the beach and the main road, allowing guests like you to easily drive or hail a tricycle to town.",
}

const hostDummy = {
  hostName: "Jose Rizal",
  hostProfilePic: "1.jpg",
  joinedIn: "July 20, 2020",
  countReviews: 4,
  rules: [
    {
      id: 1,
      title: "During your stay",
      description:
        "For our Guests’ convenience, complimentary cleaning service and support of the management team is provided throughout the entire stay. The property offers also assistance in bike/car rental, island hoping and airport shuttle service bookings.",
    },
  ],
  responseRate: 70,
  responseTime: "Reply after 4 Hours",
}

const userReviews = [
  {
    imageSrc: "1.jpg",
    name: "Bradford",
    origin: "Canada",
    rate: 5,
    date: "January 1, 1889",
    review:
      "Beautiful, quiet and private! This place offers solitude to everyone who wants to disappear from chaotic crowd once in a while. Place is romantic and cozy. It is the same as the pictures. We love the comfortable king size bed, outdoor shower, pool and kitchen! It is complete of amenities. Host are friendly and give us recommendations. Highly recommended. Will definitely come back again. Thank you!",
    showMore: false,
  },
  {
    imageSrc: "2.jpg",
    name: "Maygan",
    origin: "California, United States",
    rate: 4,
    date: "February 15, 1890",
    review:
      "The villa is exactly as seen in the photos, such an absolute dream to stay in! We were there during rainy season, so it’s a bit of an adventure to leave the villa on the beaten path. If it’s rainy, there are massive puddles to get through and only certain drivers will go through it (which the host help to arrange!).",
    showMore: true,
  },
  {
    imageSrc: "1.jpg",
    name: "Sami",
    origin: "Helsinki, Finland",
    rate: 5,
    date: "January 1, 1889",
    review:
      "The villa is extremely clean, cozy, beautiful, and right next to a quite and one of the most beautiful beaches on the island! We had an amazing stay all in all. Claire the caretaker was super responsive and took care of every need that we had during our 7 day stay.",
    showMore: true,
  },
  {
    imageSrc: "2.jpg",
    name: "Anna",
    origin: "Toronto, Canada",
    rate: 4,
    date: "February 15, 1890",
    review:
      "We loved our stay at Simon’s place. Beautifully designed and with lots of amenities (bathrobes were a nice touch!). We made full use of the beautiful outdoor shower, bathtub and pool! And I just loved having a chance to play a little on the electric piano! The villa was peaceful and secluded and the caretaker was lovely. We also really enjoyed walking out onto a pristine empty beach.",
    showMore: false,
  },
]

const houseRulesDummy = [
  { id: 1, icon: LucideClock, rule: "Check-in: 12:00 PM - 7:00 PM" },
  { id: 2, icon: LucideClock, rule: "Checkout before 10:00 AM" },
  { id: 3, icon: LucidePawPrint, rule: "8 guests maximum" },
]

const safetyPropertiesDummy = [
  { id: 1, rule: "Pool/hot tub without a gate or lock" },
  { id: 2, rule: "Nearby lake, river, other body of water" },
  { id: 3, rule: "Carbon monoxide alarm" },
]

const cancellationPoliciesDummy = [
  { id: 1, rule: "This reservation is non-refundable." },
  {
    id: 2,
    rule: "Review the Host’s full cancellation policy which applies even if you cancel for illness or disruptions caused by COVID-19.",
  },
]

const houseRulesModalData = [
  {
    id: 1,
    title: "Checking in and out",
    iconDesc: [
      { id: 1, icon: LucideClock, rule: "Check-in: 12:00 PM - 7:00 PM" },
      { id: 2, icon: LucideClock, rule: "Checkout before 10:00 AM" },
      { id: 3, icon: LucidePersonStanding, rule: "8 guests maximum" },
    ],
  },
  {
    id: 2,
    title: "During your stay",
    iconDesc: [
      { id: 1, icon: LucidePawPrint, rule: "Pets allowed" },
      {
        id: 2,
        icon: LucideMoon,
        rule: "Quiet hours",
        otherDescription: "11:00 PM - 6:00 AM",
      },
      { id: 3, icon: LucidePawPrint, rule: "8 guests maximum" },
      { id: 4, icon: LucideCamera, rule: "Commercial photography is allowed" },
      { id: 5, icon: LucideCigaretteOff, rule: "No smoking" },
    ],
  },
]

const safetyPropertiesModalData = [
  {
    id: 1,
    title: "Safety considerations",
    iconDesc: [
      {
        id: 1,
        icon: LucideFishOff,
        safetyProperty: "Not suitable for fishing",
      },
    ],
  },
  {
    id: 2,
    title: "Safety devices",
    iconDesc: [
      {
        id: 1,
        icon: LucideCctv,
        safetyProperty: "Security camera/recording device",
        otherDescription:
          "CCTV cameras around the building and within the shared common areas like lobby, corridors, and elevator area.",
      },
      {
        id: 2,
        icon: LucideAlarmSmoke,
        safetyProperty: "Smoke alarm installed",
      },
      {
        id: 3,
        icon: LucideFireExtinguisher,
        safetyProperty: "Fire extinguisher available",
      },
    ],
  },
  {
    id: 3,
    title: "Property info",
    iconDesc: [
      {
        id: 1,
        icon: LucideBuilding,
        safetyProperty: "10 story building",
        otherDescription: "The building itself have 100th floor",
      },
      { id: 2, icon: LucideSpeaker, safetyProperty: "Potential noise" },
      { id: 3, icon: LucideBeer, safetyProperty: "Free beer" },
    ],
  },
]

const cancellationPolicyModalData = [
  {
    id: 1,
    title: "Feb 17",
    desc: [
      {
        id: 1,
        cancellationPolicy: "12:00 PM",
        otherDescription: "Full refund: Get back 100% of what you paid.",
      },
    ],
  },
  {
    id: 3,
    title: "Feb 18",
    desc: [
      {
        id: 1,
        cancellationPolicy: "12:00 PM (check-in)",
        otherDescription:
          "Partial refund: Get back every night but the first one. No refund of the first night or the service fee.",
      },
    ],
  },
  {
    id: 3,
    title: "March 12",
    desc: [
      {
        id: 1,
        cancellationPolicy: "2:00 PM (check-in)",
        otherDescription: "No refund",
      },
    ],
  },
]

export const SingleView = () => {
  const [showModal, setShowModal] = useState(false)
  const handleOpenModal = () => {
    setShowModal(true)
  }
  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <WidthWrapper width="small" className="mt-32 lg:mt-36">
      <SectionInfo images={imageGallery} title="Villa Manao · Private Pool | Bathtub | Sky shower" />
      <div className="flex flex-col md:flex-row gap-8 md:gap-24 pb-12">
        <div className="flex-1 md:w-1/2 2xl:w-full">
          <div className="divide-y">
            <div className="pb-6">
              <SummaryInfo
                address="Entire villa in General Luna, Philippines"
                guest={2}
                bedroom={1}
                beds={1}
                baths={1}
                reviews={4}
                stars={5}
              />
            </div>
            <div className="py-6">
              <AvatarTitleDescription
                avatarKey="2.jpg"
                title="Hosted by Simon"
                subTitle="4 months hosting"
              />
            </div>
            <div className="py-6">
              <Highlights highlights={highlights} />
            </div>
            <div className="py-6">
              <BookingDescription {...description} />
            </div>
            <div className="py-6 ">
              <PlaceOffers offers={offers} group={group} />
            </div>
            <div className="py-6">
              <ListingDateRangePicker title="Villa Manao · Private Pool | Bathtub | Sky shower" />
            </div>
          </div>
        </div>
        <div className="md:w-96 md:relative">
          <div className="md:sticky md:top-0">
            <CheckoutProcess
              checkoutDesc={{
                serviceFee: 1000,
                durationCost: 125000,
                descTotalBeforeTaxes: 3000,
                totalBeforeTaxes: 126000,
                titlePrice: 25000,
              }}
            />
            <div className="flex justify-center">
              <div className="justify-items-center">
                <Button
                  variant="ghost"
                  className="underline md:float-right flex gap-1 items-center text-text-400 hover:text-text-600"
                  size="sm"
                  onClick={handleOpenModal}
                >
                  <Flag className="h-4 w-4" />
                  Report this listing
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divide-y border-t">
        <div className="py-8">
          <RatingSummary ratings={ratingSummary.ratings} reviews={ratingSummary.reviews} categories={ratingSummary.categories}/>
        </div>
        <div className="py-8">
          <UserReviews reviews={userReviews} />
        </div>
        <div className="py-8">
          <WhereYoullBeDescription
            {...whereYouWillBeDesc}
          />
        </div>
        <div className="py-8">
          <HostInformation {...hostDummy} />
        </div>
        <div className="pt-8">
          <ThingsToKnow 
            houseRules={houseRulesDummy} 
            houseRulesModalData={houseRulesModalData}
            safetyProperties={safetyPropertiesDummy}
            safetyModalData={safetyPropertiesModalData}
            cancellationPolicies={cancellationPoliciesDummy}
            cancellationModalData={cancellationPolicyModalData}
          />
        </div>
      </div>
      <ModalReporting
        isOpen={showModal}
        onClose={handleCloseModal}
        reportListingArr={reportListingArr}
      />
    </WidthWrapper>
  )
}
export default SingleView
