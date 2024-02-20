import {
  LucideAlarmClock,
  LucideAlarmSmoke,
  LucideAngry,
  LucideBed,
  LucideBook,
  LucideBuilding,
  LucideCalendarFold,
  LucideCamera,
  LucideCarFront,
  LucideCctv,
  LucideChevronLeft,
  LucideCigaretteOff,
  LucideClock,
  LucideCopyright,
  LucideFacebook,
  LucideFireExtinguisher,
  LucideFlag,
  LucideGlobe,
  LucideHeart,
  LucideInstagram,
  LucideKeyboard,
  LucideMapPin,
  LucideMedal,
  LucideMoon,
  LucidePawPrint,
  LucidePersonStanding,
  LucideSearch,
  LucideShield,
  LucideShieldCheck,
  LucideSpeaker,
  LucideStar,
  LucideTwitter,
  LucideUpload,
  LucideWifi,
} from "lucide-react"

type LucideProps = {
  className?: string
  size?: string
}

export const iconsMap = {
  book: (props?: LucideProps) => <LucideBook {...props} />,
  mapPin: (props?: LucideProps) => <LucideMapPin {...props} />,
  alarmClock: (props?: LucideProps) => <LucideAlarmClock {...props} />,
  alarmSmoke: (props?: LucideProps) => <LucideAlarmSmoke {...props} />,
  angry: (props?: LucideProps) => <LucideAngry {...props} />,
  bed: (props?: LucideProps) => <LucideBed {...props} />,
  carFront: (props?: LucideProps) => <LucideCarFront {...props} />,
  cigaretteOff: (props?: LucideProps) => <LucideCigaretteOff {...props} />,
  wiFi: (props?: LucideProps) => <LucideWifi {...props} />,
  building: (props?: LucideProps) => <LucideBuilding {...props} />,
  camera: (props?: LucideProps) => <LucideCamera {...props} />,
  ccTv: (props?: LucideProps) => <LucideCctv {...props} />,
  clock: (props?: LucideProps) => <LucideClock {...props} />,
  fireExtinguisher: (props?: LucideProps) => (
    <LucideFireExtinguisher {...props} />
  ),
  moon: (props?: LucideProps) => <LucideMoon {...props} />,
  pawPrint: (props?: LucideProps) => <LucidePawPrint {...props} />,
  personStanding: (props?: LucideProps) => <LucidePersonStanding {...props} />,
  speaker: (props?: LucideProps) => <LucideSpeaker {...props} />,
  chevronLeft: (props?: LucideProps) => <LucideChevronLeft {...props} />,
  medal: (props?: LucideProps) => <LucideMedal {...props} />,
  star: (props?: LucideProps) => <LucideStar {...props} />,
  flag: (props?: LucideProps) => <LucideFlag {...props} />,
  shieldCheck: (props?: LucideProps) => <LucideShieldCheck {...props} />,
  shield: (props?: LucideProps) => <LucideShield {...props} />,
  globe: (props?: LucideProps) => <LucideGlobe {...props} />,
  calendarFold: (props?: LucideProps) => <LucideCalendarFold {...props} />,
  upload: (props?: LucideProps) => <LucideUpload {...props} />,
  heart: (props?: LucideProps) => <LucideHeart {...props} />,
  keyboard: (props?: LucideProps) => <LucideKeyboard {...props} />,
  facebook: (props?: LucideProps) => <LucideFacebook {...props} />,
  twitter: (props?: LucideProps) => <LucideTwitter {...props} />,
  instagram: (props?: LucideProps) => <LucideInstagram {...props} />,
  copyRight: (props?: LucideProps) => <LucideCopyright {...props} />,
  search: (props?: LucideProps) => <LucideSearch {...props} />,
}