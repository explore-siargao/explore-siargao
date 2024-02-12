import IconDescription from "./IconDescription"
import { Button } from "@/common/components/ui/Button"
import { TitleSection } from "./TitleSection"
import {
  LucideAlarmClock,
  LucideAlarmSmoke,
  LucideAngry,
  LucideBed,
  LucideBug,
  LucideBugOff,
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

const modalItems = [
  {id:1, title:"Entertainment", iconDesc:[{id:1, desc:"WiFi", icon:LucideWifi},{id:1, desc:"Free street parking", icon:LucideCarFront}]},
  {id:1, title:"Bedroom and laundry", iconDesc:[{id:1, desc:"Bed", icon:LucideBed},{id:1, desc:"Angry people", icon:LucideAngry}]},
  {id:1, title:"Family", iconDesc:[{id:1, desc:"Alarm", icon:LucideAlarmClock},{id:1, desc:"Smoke alarm", icon:LucideAlarmSmoke}]},
  {id:1, title:"Not Included", iconDesc:[{id:1, desc:"Bug", icon:LucideBugOff,isNotIncluded:true},{id:1, desc:"Cigarette off", icon:LucideCigaretteOff, isNotIncluded:true}]},
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
        datas={modalItems}
      />
    </>
  )
}

export default PlaceOffers
