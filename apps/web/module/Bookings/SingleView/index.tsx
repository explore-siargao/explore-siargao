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
import CheckoutProcess from "./components/CheckoutProcess"
import PlaceOffers from "./components/PlaceOffers"
import WhereYoullBeDescription from "./components/Map"
import ListingDateRangePicker from "./components/ListingDateRangePicker"

export const SingleView = () => {
  return (
    <WidthWrapper width="small" className="mt-32 lg:mt-36">
      <SectionInfo title="Test test" />
      <div className="flex flex-col md:flex-row gap-8 md:gap-24 pb-12">
        <div className="flex-1">
          <div className="divide-y">
            <div className="pb-6">
              <SummaryInfo
                address="Test test"
                guest={3}
                bedroom={3}
                beds={3}
                baths={3}
                reviews={3}
                stars={3}
              />
            </div>
            <div className="py-6">
              <AvatarTitleDescription
                avatarKey="2.jpg"
                title="Hosted by John Madrigal"
                subTitle="11 months hosting"
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
              <ListingDateRangePicker title="5 Nights in Santa Maria" />
            </div>
          </div>
        </div>
        <div className="md:w-96 md:relative">
          <div className="md:sticky md:top-0">
            <CheckoutProcess
              checkoutDesc={{
                id: 1,
                serviceFee: 1000,
                durationCost: 2000,
                descTotalBeforeTaxes: 3000,
                totalBeforeTaxes: 4000,
                titlePrice: 5000,
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
              location: "Santa Maria, Laguna",
              coordinates: [14.5129, 21.4342],
              desc: "Amazing place",
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
