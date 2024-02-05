import { Title } from "@/common/components/ui/Title"
import { Typography } from "@/common/components/ui/Typography"
import {
  LucideMedal,
  LucideShield,
  LucideShieldCheck,
  LucideStar,
  LucideStarOff,
  LucideUser,
} from "lucide-react"
import Image from "next/image"
import { TitleSection } from "./TitleSection"
import { Button } from "@/common/components/ui/Button"
import { APP_NAME } from "@repo/constants"

interface IHostDetails {
  hostName: string
  hostProfilePic: string
  joinedIn: string
  countReviews: number
  rules: { id: number; title: string; description: string }[]
  responseRate: number
  responseTime: string
}

const HostInformation = (hostDetails: IHostDetails) => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="flex-1 flex flex-col">
        <div className="flex">
          <Image
            src={`/assets/${hostDetails.hostProfilePic}`}
            alt="Profile picture"
            width={20}
            height={20}
            className="rounded-full h-16 w-16 object-cover"
          />
          <div className="flex-1 px-4 py-1">
            <Typography variant="h3">
              Hosted by {hostDetails.hostName}
            </Typography>
            <Typography variant="p" className="text-gray-400">
              Joined in {hostDetails.joinedIn}
            </Typography>
          </div>
        </div>
        <div className="flex mt-6">
          <div className="flex mr-3">
            <LucideStar style={{ fill: "black" }} />
            <span className="ml-1">{hostDetails.countReviews} Reviews</span>
          </div>
          <div className="flex mr-3">
            <LucideShieldCheck
              style={{ fill: "black" }}
              className="text-white"
            />
            <span className="ml-1">Identity verified</span>
          </div>
          <div className="flex mr-3">
            <LucideUser
              style={{ fill: "black" }}
              className="transform scale-y-[-1]"
            />
            <span className="ml-1">Superhost</span>
          </div>
        </div>
        {hostDetails.rules.map((info) => (
          <div className="flex mt-6" key={info.id}>
            <TitleSection title={info.title}>{info.description}</TitleSection>
          </div>
        ))}
      </div>

      <div className="md:flex-1 flex items-center my-4 md:mx-12 flex-col">
        <Typography className="w-full" fontWeight={"semiBold"}>
          Response Rate: {hostDetails.responseRate}%
        </Typography>
        <Typography className="w-full" fontWeight={"semiBold"}>
          Response Time: {hostDetails.responseTime}
        </Typography>
        <div className="w-full">
          <Button variant={"outline"} className="my-6">
            Contact Host
          </Button>
          <div className="md:flex md:my-4 md:pr-16">
            <div className="flex items-center">
              <LucideShield className="fill-red-300 text-red-600 h-14 w-14" />
              <span className="mx-4">
                {`To protect your payment never transfer money or communicate outside of the ${APP_NAME} website or app.`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HostInformation
