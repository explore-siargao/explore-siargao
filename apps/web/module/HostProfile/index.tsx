"use client"

import { WidthWrapper } from "@/common/components/WidthWrapper"
import ProfileCard from "./components/ProfileCard"
import ConfirmedInformation from "./components/ConfirmedInformation"
import { FlagIcon } from "@heroicons/react/24/outline"
import AboutHost from "./components/AboutHost"
import HostReviews from "./components/HostReviews"
import HostListings from "./components/HostListings"
import HostGuideBooks from "./components/HostGuideBooks"

const hostProfileData = {
  profilePicture: "1.jpg",
  userName: "David",
  role: "Host",
  countReviews: 60,
  ratings: 4.98,
  listingWithReviews: [
    {
      id: 1,
      hostedById: 1,
      imageKeys: [
        {
          fileKey: "1.jpg",
          alt: "",
        },
      ],
      title: "Guesthouse",
      descriptionId: "Seaview Villa with 3 queen beds",
      address: "Santa Maria, Laguna",
      listingPriceId: 1,
      category: "Accomodation",
      favoriteBy: null,
      createdAt: "2024-02-19T05:36:27.060Z",
      updatedAt: "2024-02-19T05:36:27.060Z",
      deletedAt: null,
      latitude: "1",
      longitude: "1",
      basicAboutPlaceId: 1,
      review: [
        {
          id: 1,
          userId: 1,
          cleanLinessRates: 5,
          accuracyRates: 4,
          checkInRates: 2,
          communicationRates: 5,
          locationRates: 3,
          valueRates: 4,
          comment:
            "Wow wow wow This place and the beautiful hosts have captured our hearts for sure. We will definitely be back. Not often am I sad to leave a place, but I was today. David, Genny & Bert looked after us",
          createdAt: "2024-02-19T05:37:15.148Z",
          updatedAt: "2024-02-19T05:37:15.148Z",
          deletedAt: null,
          listingId: 1,
          user: {
            profilePicture: "1.jpg",
            personalInfo: {
              firstName: "Ramil",
              lastName: "Kaharian",
            },
          },
        },
        {
          id: 2,
          userId: 2,
          cleanLinessRates: 5,
          accuracyRates: 4,
          checkInRates: 2,
          communicationRates: 5,
          locationRates: 3,
          valueRates: 4,
          comment:
            "Genny and David are great host. The location is very and lonely. Direct access to the sea with great area for snorkeling, diving or kayaking. A nice place for a few relaxing days by the sea",
          createdAt: "2024-02-19T05:37:15.148Z",
          updatedAt: "2024-02-19T05:37:15.148Z",
          deletedAt: null,
          listingId: 1,
          user: {
            profilePicture: "1.jpg",
            personalInfo: {
              firstName: "Ramil",
              lastName: "Kaharian",
            },
          },
        },
      ],
    },
  ],
  work: "Novelist",
  hostedSince: 11,
  confirmInfo: {
    identity: true,
    email: false,
    phone: true,
  },
  desc: "I'm a novelist and divemaster and retired professor",
  livesIn: "Culion, Philippines",
}

const HostProfile = () => {
  return (
    <WidthWrapper className="my-24 lg:my-32">
      <div className="mt-5 mx-3 md:mx-40 lg:mx-5 grid lg:grid-cols-12 gap-x-20 gap-y-4">
        <div className=" lg:col-span-4 lg:relative">
          <div className="lg:sticky lg:top-40">
            <div className="mt-5">
              <ProfileCard
                name={hostProfileData.userName}
                profileImage={hostProfileData.profilePicture}
                hostStatus={hostProfileData.role}
                reviewsCount={hostProfileData.countReviews}
                rating={hostProfileData.ratings}
                hostingMonthAge={hostProfileData.hostedSince}
              />
            </div>
            <div className="mt-8 hidden lg:block">
              <ConfirmedInformation
                name={hostProfileData.userName}
                confirmedInformation={hostProfileData.confirmInfo}
              />
            </div>
            <div className="items-center mt-6 hidden lg:flex">
              <FlagIcon className="h-5 w-5 mr-3" />
              <button className="underline font-bold">
                Report this profile
              </button>
            </div>
          </div>
        </div>
        <div className="lg:col-span-8 space-y-10">
          <AboutHost
            name={hostProfileData.userName}
            work={hostProfileData.work}
            livesIn={hostProfileData.livesIn}
            desc={hostProfileData.desc}
          />
          <hr />
          <HostReviews
            name={hostProfileData.userName}
            reviewsCount={hostProfileData.countReviews}
            // @ts-ignore
            reviews={hostProfileData.listingWithReviews[0].review}
          />
          <hr />
          <div className="lg:hidden">
            <ConfirmedInformation
              name={hostProfileData.userName}
              confirmedInformation={hostProfileData.confirmInfo}
            />
            <hr className="mt-10" />
          </div>
          <HostListings
            name={hostProfileData.userName}
            // @ts-ignore
            listings={hostProfileData.listingWithReviews}
          />
          <hr />
          <HostGuideBooks name={hostProfileData.userName} />
          <hr className="lg:hidden" />
          <div className="items-center flex lg:hidden">
            <FlagIcon className="h-5 w-5 mr-3" />
            <button className="underline font-semibold">
              Report this profile
            </button>
          </div>
        </div>
      </div>
    </WidthWrapper>
  )
}

export default HostProfile
