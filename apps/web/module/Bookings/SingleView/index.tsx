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

export const SingleView = () => {
  return (
    <WidthWrapper width="small" className="mt-32 lg:mt-36">
      <SectionInfo title="Villa Manao · Private Pool | Bathtub | Sky shower" />
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
              <Highlights />
            </div>
            <div className="py-6">
              <BookingDescription />
            </div>
            <div className="py-6 ">
              <PlaceOffers />
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
                id: 1,
                serviceFee: 1000,
                durationCost: 125000,
                descTotalBeforeTaxes: 3000,
                totalBeforeTaxes: 126000,
                titlePrice: 25000,
              }}
            />
          </div>
        </div>
      </div>
      <div className="divide-y border-t">
        <div className="py-8">
          <RatingSummary />
        </div>
        <div className="py-8">
          <UserReviews />
        </div>
        <div className="py-8">
          <WhereYoullBeDescription
            whereYoullBeDesc={{
              id: 1,
              location: "General Luna, Caraga, Philippines",
              coordinates: [14.5129, 21.4342],
              desc: "Mantaray Siargao is located in Purok 1, General Luna. A quiet residential area close to the heart of town. The property is nestled between the beach and the main road, allowing guests like you to easily drive or hail a tricycle to town.",
            }}
          />
        </div>
        <div className="py-8">
          <HostInformation />
        </div>
        <div className="pt-8">
          <ThingsToKnow />
        </div>
      </div>
    </WidthWrapper>
  )
}
export default SingleView
