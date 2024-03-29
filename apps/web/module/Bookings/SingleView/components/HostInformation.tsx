import { Typography } from "@/common/components/ui/Typography"
import { LucideShield, ShieldCheck, Star, Medal } from "lucide-react"
import { TitleSection } from "./TitleSection"
import { Button } from "@/common/components/ui/Button"
import { APP_NAME } from "@repo/constants"
import AvatarTitleDescription from "./AvatarTitleDescription"
import { useRouter } from "next/navigation"

const HostDummy = {
  hostName: "Jose Rizal",
  hostProfilePic: "1.jpg",
  joinedIn: "July 20, 2020",
  countReviews: 4,
  rules: [
    {
      id: 1,
      title: "During your stay",
      description:
        "For our Guests’ convenience, complimentary cleaning service and support of the management team is provided throughout the entire stay. The property offers also assistance in bike/car rental, island hoping and airport shuttle service bookings.",
    },
  ],
  responseRate: 70,
  responseTime: "Reply after 4 Hours",
}

const HostInformation = () => {
  const router = useRouter()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 md:items-center">
      <div className="flex-1 flex flex-col">
        <AvatarTitleDescription
          avatarKey="2.jpg"
          title="Hosted by Simon"
          subTitle="Joined in July 20, 2020"
        />
        <div className="flex gap-3 mt-4">
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4" />
            <span className="text-sm">{HostDummy.countReviews} Reviews</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4" />
            <span className="text-sm">Identity verified</span>
          </div>
          <div className="flex items-center gap-2">
            <Medal className="h-4 w-4" />
            <span className="text-sm">Superhost</span>
          </div>
        </div>
        {HostDummy.rules.map((info) => (
          <div className="flex mt-6" key={info.id}>
            <TitleSection title={info.title}>
              <Typography variant="p">{info.description}</Typography>
            </TitleSection>
          </div>
        ))}
      </div>
      <div>
        <Typography>Response Rate: {HostDummy.responseRate}%</Typography>
        <Typography>Response Time: {HostDummy.responseTime}</Typography>
        <Button
          variant={"outline"}
          className="my-6"
          onClick={() => router.push("/accommodation/1/message")}
        >
          Contact Host
        </Button>
        <div>
          <div className="flex gap-4 items-center">
            <LucideShield className="fill-red-100 text-red-400 h-14 w-14" />
            <span className="text-sm">
              {`To protect your payment never transfer money or communicate outside of the ${APP_NAME} website or app.`}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HostInformation
