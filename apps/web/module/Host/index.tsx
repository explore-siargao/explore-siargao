import OvalTab from "@/common/components/ui/OvalTab"
import { Typography } from "@/common/components/ui/Typography"
import { Title } from "@/common/components/ui/Title"
import { Button } from "@/common/components/ui/Button"
import { LucideBook } from "lucide-react"
import { WidthWrapper } from "@/common/components/WidthWrapper"

const tabs = [
  {
    description: "Checking out",
    value: 0,
    link: "/checkout",
    isSelected: true,
  },
  {
    description: "Currently hosting",
    value: 0,
    link: "/currently-hosting",
  },
  {
    description: "Arriving soon",
    value: 0,
    link: "/arriving-soon",
  },
  {
    description: "Upcoming",
    value: 0,
    link: "/upcoming",
  },
  {
    description: "Pending review",
    value: 0,
    link: "/pending-review",
  },
]

interface HostingPageProps {
  hostName: string
  icon?: JSX.Element
  description?: string
  allReservationCounts?: number
}

const HostingPage: React.FC<HostingPageProps> = ({ hostName }) => {
  const allTabsIsZero = tabs.every((tab) => tab.value === 0)
  let icon = null
  let description = null
  if (allTabsIsZero) {
    icon = <LucideBook />
    description = "You don't have any guests checking out today or tomorrow"
  }
  return (
    <WidthWrapper className="my-24 lg:my-36">
    <div>
      <div className="">
        <Title size={"default"} className="flex font-semibold mb-10">
          Welcome, {hostName}
          <div className="flex-grow" />
          <Button variant="outline" className="flex items-end ">
            Complete your listing
          </Button>
        </Title>
      </div>
      <div className="">
      <div className="flex-grow" />
        <Typography variant={"h1"} className="flex font-semibold mb-5">
          Your reservations
          <Button
            variant={"ghost"}
            className="flex items-end font-semibold text-[17px] underline"
          >
            All reservations (0)
          </Button>
        </Typography>
      </div>

      <div>
        <OvalTab tabs={tabs} />
        <div className="flex bg-gray-100 h-[300px] w-full mt-5 items-center justify-center">
          <div className="text-gray-500">
            <div className="flex items-center justify-center mb-5">{icon}</div>
            <div className="w-[200px]">
              <Typography variant={"p"} className="font-semibold">
                {description}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
    </WidthWrapper>
  )
}

export default HostingPage
