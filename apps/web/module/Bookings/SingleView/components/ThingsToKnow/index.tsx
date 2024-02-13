import { Button } from "@/common/components/ui/Button"
import { Typography } from "@/common/components/ui/Typography"
import React, { useState } from "react"
import TitleLists from "./TitleLists"
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
import SafetyPropertyModal from "../modals/ModalSafetyProperty"
import CancellationPolicyModal from "../modals/CancellationPolicyModal"
import HouseRulesModal from "../modals/ModalHouseRules"

const HouseRulesDummy = [
  { id: 1, icon: LucideClock, rule: "Check-in: 12:00 PM - 7:00 PM" },
  { id: 2, icon: LucideClock, rule: "Checkout before 10:00 AM" },
  { id: 3, icon: LucidePawPrint, rule: "8 guests maximum" },
]

const SafetyPropertiesDummy = [
  { id: 1, rule: "Pool/hot tub without a gate or lock" },
  { id: 2, rule: "Nearby lake, river, other body of water" },
  { id: 3, rule: "Carbon monoxide alarm" },
]

const CancellationPoliciesDummy = [
  { id: 1, rule: "This reservation is non-refundable." },
  {
    id: 2,
    rule: "Review the Host’s full cancellation policy which applies even if you cancel for illness or disruptions caused by COVID-19.",
  },
]

const HouseRulesModalData = [
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

const SafetyPropertiesModalData = [
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

const CancellationPolicyModalData = [
  {
    id: 1,
    title: "Cancel by",
    desc: [
      {
        id: 1,
        cancellationPolicy: "",
      },
    ],
  },
  {
    id: 2,
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
]

const ThingsToKnow = () => {
  const [isHouseRulesModalOpen, setIsHouseRulesModalOpen] = useState(false)
  const [isSafetyPropertyModalOpen, setIsSafetyPropertyModalOpen] =
    useState(false)
    
  const [isCancellationPolicyModalOpen, setIsCancellationPolicyModalOpen] =
    useState(false)

  const openCancellationPolicyModal = () => {
    setIsCancellationPolicyModalOpen(true)
  }

  const openHouseRulesModal = () => {
    setIsHouseRulesModalOpen(true)
  }

  const openSafetyPropertyModal = () => {
    setIsSafetyPropertyModalOpen(true)
  }

  const closeModal = () => {
    setIsHouseRulesModalOpen(false)
    setIsSafetyPropertyModalOpen(false)
    setIsCancellationPolicyModalOpen(false)
  }

  return (
    <>
      <Typography variant={"h2"}>Things to know</Typography>
      <div className="flex w-full mt-4 mb-6">
        <div className="w-full md:w-1/3">
          <TitleLists title="House Rules" rules={HouseRulesDummy} />
          <Button
            className="underline mt-2"
            variant="link"
            size="link"
            onClick={openHouseRulesModal}
          >
            Show more &gt;
          </Button>
        </div>
        <div className="w-full md:w-1/3">
          <TitleLists title="Safety & Property" rules={SafetyPropertiesDummy} />
          <Button
            className="underline mt-2"
            variant="link"
            size="link"
            onClick={openSafetyPropertyModal}
          >
            Show more &gt;
          </Button>
        </div>
        <div className="w-full md:w-1/3">
          <TitleLists
            title="Cancellation policy"
            rules={CancellationPoliciesDummy}
          />
          <Button
            className="underline mt-2"
            variant="link"
            size="link"
            onClick={openCancellationPolicyModal}
          >
            Show more &gt;
          </Button>
        </div>
      </div>
      <HouseRulesModal
        onClose={closeModal}
        isOpen={isHouseRulesModalOpen}
        groupRules={HouseRulesModalData}
      />

      <SafetyPropertyModal
        onClose={closeModal}
        isOpen={isSafetyPropertyModalOpen}
        groupSafetyProperty={SafetyPropertiesModalData}
      />

      <CancellationPolicyModal
        onClose={closeModal}
        isOpen={isCancellationPolicyModalOpen}
        groupCancellationPolicy={CancellationPolicyModalData}
      />
    </>
  )
}

export default ThingsToKnow
