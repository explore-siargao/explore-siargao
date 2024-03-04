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
import { Flag, Tag } from "lucide-react"
import { useState } from "react"
import ListingMark from "@/module/Accommodation/Checkout/ListingMark"
import { T_HouseRule, T_Listing } from "@repo/contract"
import { T_HighlightsProps } from "./types/Highlights"
import { T_HouseRules } from "./types/ThingsToKnow"
import ReportListingModal from "./components/modals/ReportListingModal"
import { cancellationPolicyModalData, group, hostDummy, houseRulesModalData, ratingSummary, safetyPropertiesModalData, whereYouWillBeDesc } from "./data"


export const SingleView = ({ listing }: { listing: T_Listing }) => {
  const [showModal, setShowModal] = useState(false)
  const handleOpenModal = () => {
    setShowModal(true)
  }
  const handleCloseModal = () => {
    setShowModal(false)
  }

  const newHouseRules = listing.houseRules?.map((houseRule) => {
    if (!houseRule || !houseRule.rules || !houseRule.rules[0]) {
      return null;
    }
    return {
      id: houseRule.id,
      icon: houseRule.rules[0].icon,
      rule: houseRule.rules[0]?.rule,
    }
  }).filter((rule) => rule !== null)


  const newSafetyProperties = listing.safetyProperties?.map((safetyProperty) => {

    if (!safetyProperty || !safetyProperty.rules || !safetyProperty.rules[0]) {
      return null;
    }
    return {
      id: safetyProperty.id,
      icon: safetyProperty.rules[0].icon,
      rule: safetyProperty.rules[0]?.rule,
    }
  }).filter((rule) => rule !== null)

  const newCancellationPolicies = listing.cancellationPolicies?.map((safecancellationPolicy) => {

    if (!safecancellationPolicy || !safecancellationPolicy.rules || !safecancellationPolicy.rules[0]) {
      return null;
    }
    return {
      id: safecancellationPolicy.id,
      rule: safecancellationPolicy.rules[0]?.rule,
    }
  }).filter((rule) => rule !== null)


  return (
    <WidthWrapper width="small" className="mt-4 lg:mt-8">
      <SectionInfo
        images={listing.images}
        title={listing.title}
      />
      <div className="flex flex-col md:flex-row gap-8 md:gap-24 pb-12">
        <div className="flex-1 md:w-1/2 2xl:w-full">
          <div className="divide-y">
            <div className="pb-6">
              <SummaryInfo
                address={listing.address}
                guest={listing.basicAboutPlace?.guests}
                bedroom={listing.basicAboutPlace?.bathRooms}
                beds={listing.basicAboutPlace?.beds}
                baths={listing.basicAboutPlace?.bathRooms}
                reviews={listing.review?.length}
                stars={Number(listing.totalRates.rates)}
              />
            </div>
            <div className="py-6">
              <AvatarTitleDescription
                avatarKey="2.jpg"
                title={`Hosted by ${listing.hostedBy?.personalInfo?.firstName}`}
                subTitle="4 months hosting" // to compute
              />
            </div>
            <div className="py-6">
              {/* @ts-ignore */}
              <Highlights highlights={listing.highLights} />
            </div>
            <div className="py-6">
              {/* @ts-ignore */}
              <BookingDescription {...listing.listingDescription} />
            </div>
            <div className="py-6 ">
              {/* @ts-ignore */}
              <PlaceOffers offers={listing.placeOffers} group={group} />
            </div>
            <div className="py-6">
              <ListingDateRangePicker title={listing.title} />
            </div>
          </div>
        </div>
        <div className="md:w-96 md:relative">
          <div className="md:sticky md:top-6">
            <CheckoutProcess
              checkoutDesc={{
                serviceFee: Number(listing.price?.serviceFee),
                durationCost: 125000,
                descTotalBeforeTaxes: 3000,
                totalBeforeTaxes: 126000,
                titlePrice: 25000,
              }}
            />
            <div>
              <ListingMark
                icon={<Tag />}
                title="Lower Price"
                desc="Your dates are ₱1,494 less than the avg. nightly rate of the last 60 days."
              />
            </div>

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
          <RatingSummary
            ratings={Number(listing.totalRates.rates?.toFixed(2))}
            reviews={Number(listing.review?.length)}
            categories={ratingSummary.categories}
          />
        </div>
        <div className="py-8">
          {/* @ts-ignore */}
          <UserReviews reviews={listing.review} />
        </div>
        <div className="py-8">
          <WhereYoullBeDescription {...whereYouWillBeDesc} />
        </div>
        <div className="py-8">
          <HostInformation {...hostDummy} />
        </div>
        <div className="pt-8">
          <ThingsToKnow
            //@ts-ignore
            houseRules={newHouseRules}
            houseRulesModalData={houseRulesModalData}
            //@ts-ignore
            safetyProperties={newSafetyProperties}
            safetyModalData={safetyPropertiesModalData}
            //@ts-ignore
            cancellationPolicies={newCancellationPolicies}
            cancellationModalData={cancellationPolicyModalData}
          />
        </div>
      </div>
      <ReportListingModal isOpen={showModal} onClose={handleCloseModal} />
    </WidthWrapper>
  )
}
export default SingleView
