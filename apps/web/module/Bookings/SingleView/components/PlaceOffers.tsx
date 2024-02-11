import IconDescription from "./IconDescription"
import { Button } from "@/common/components/ui/Button"
import { TitleSection } from "./TitleSection"
import {
  LucideAlarmClock,
  LucideAlarmSmoke,
  LucideAngry,
  LucideBed,
  LucideBug,
  LucideCarFront,
  LucideCigaretteOff,
  LucideWifi,
} from "lucide-react"
import PlaceOfferModal from "../../components/modals/PlaceOfferModal"
import { useState } from "react"

const summary = [
  {
    icon: LucideWifi,
    desc: "WiFi",
    isNotIncluded: false,
  },
  {
    icon: LucideCarFront,
    desc: "Free street parking",
    isNotIncluded: false,
  },
  {
    icon: LucideCigaretteOff,
    desc: "No smoking",
    isNotIncluded: false,
  },
  {
    icon: LucideAlarmSmoke,
    desc: "Smoke alarm",
    isNotIncluded: false,
  },
  {
    icon: LucideBed,
    desc: "Bed",
    isNotIncluded: false,
  },
  {
    icon: LucideAngry,
    desc: "Angry people",
    isNotIncluded: false,
  },
  {
    icon: LucideAlarmClock,
    desc: "Alarm clock",
    isNotIncluded: true,
  },
  {
    icon: LucideBug,
    desc: "No bugs",
    isNotIncluded: false,
  },
]

const PlaceOffers = () => {
  const [showMoreModalOpen, setShowMoreModalOpen] = useState(false)
  return (
    <>
      <TitleSection size="lg" title="What this place offers">
        <div className="mb-5"></div>
        <div className="grid grid-cols-2">
          {summary.map((item) => (
            <IconDescription {...item} />
          ))}
        </div>
        <Button
          className="mt-5"
          variant={"shaded"}
          onClick={() => setShowMoreModalOpen(!showMoreModalOpen)}
        >
          Show all 56 amenities
        </Button>
      </TitleSection>
      <PlaceOfferModal
        isOpen={showMoreModalOpen}
        onClose={() => setShowMoreModalOpen(!showMoreModalOpen)}
        datas={[]}
      />
    </>
  )
}

export default PlaceOffers
