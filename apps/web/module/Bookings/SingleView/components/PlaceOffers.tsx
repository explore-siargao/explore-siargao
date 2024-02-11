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

const PlaceOffers = () => {
  const [showMoreModalOpen, setShowMoreModalOpen] = useState(false)
  return (
    <>
      <TitleSection size="lg" title="What this place offers">
        <div className="mb-5"></div>
        <div className="grid grid-cols-2">
          <IconDescription icon={LucideWifi} desc="WiFi" />
          <IconDescription icon={LucideCarFront} desc="Free street parking" />
          <IconDescription icon={LucideCigaretteOff} desc="No smoking" />
          <IconDescription icon={LucideAlarmSmoke} desc="Smoke alarm" />
          <IconDescription icon={LucideBed} desc="Bed" />
          <IconDescription icon={LucideAngry} desc="Angry people" />
          <IconDescription
            icon={LucideAlarmClock}
            desc="Alarm clock"
            isNotIncluded
          />
          <IconDescription icon={LucideBug} desc="No bugs" />
        </div>
        <Button className="mt-5" variant={"shaded"} onClick={() => setShowMoreModalOpen(!showMoreModalOpen)}>
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
