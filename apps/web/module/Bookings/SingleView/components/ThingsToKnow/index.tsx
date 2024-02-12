import { Button } from "@/common/components/ui/Button"
import { Typography } from "@/common/components/ui/Typography"
import React, { useState } from "react"
import TitleLists from "./TitleLists"
import AddThingsToNoteModal from "@/module/AccountSettings/components/modals/AddThingsToNoteModal"
import { LucideClock, LucidePawPrint } from "lucide-react"

const HouseRulesDummy = [
  { icon: LucideClock, id: 1, rule: "Check-in: 12:00 PM - 7:00 PM" },
  { icon: LucideClock, id: 2, rule: "Checkout before 10:00 AM" },
  { icon: LucidePawPrint, id: 3, rule: "8 guests maximum" },
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

const ThingsToKnow = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
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
            onClick={openModal}
          >
            Show more &gt;
          </Button>
        </div>
        <div className="w-full md:w-1/3">
          <TitleLists title="Safety & Property" rules={SafetyPropertiesDummy} />
          <Button className="underline mt-2" variant="link" size="link">
            Show more &gt;
          </Button>
        </div>
        <div className="w-full md:w-1/3">
          <TitleLists
            title="Cancellation policy"
            rules={CancellationPoliciesDummy}
          />
          <Button className="underline mt-2" variant="link" size="link">
            Show more &gt;
          </Button>
        </div>
      </div>
      <AddThingsToNoteModal
        onClose={closeModal}
        isOpen={isModalOpen}
        thingsToNote={{
        }}
      />
    </>
  )
}

export default ThingsToKnow
