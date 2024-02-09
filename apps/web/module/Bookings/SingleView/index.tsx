import { WidthWrapper } from "@/common/components/WidthWrapper"
import { Title } from "@/common/components/ui/Title"
import { Typography } from "@/common/components/ui/Typography"
import ThingsToKnow from "./components/ThingsToKnow"
import { Button } from "@/common/components/ui/Button"
const HouseRulesDummy = [
  { id: 1, rule: "Check-in: 12:00 PM - 7:00 PM" },
  { id: 2, rule: "Checkout before 10:00 AM" },
  { id: 3, rule: "8 guests maximum" },
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

export const SingleView = () => {
  return (
    <WidthWrapper width={"medium"} className="my-24 lg:my-32 border-b">
      <div className="mt-6 w-full">
        <Typography variant={"h2"}>Things to know</Typography>
        <div className="flex w-full mt-4 mb-6">
          <div className="w-full md:w-1/3">
            <ThingsToKnow title="House Rules" rules={HouseRulesDummy} />
            <Button
              className="text-md p-1 font-semibold underline"
              variant={"ghost"}
            >
              Show more &gt;
            </Button>
          </div>
          <div className="w-full md:w-1/3">
            <ThingsToKnow
              title="Safety & Property"
              rules={SafetyPropertiesDummy}
            />
            <Button
              className="text-md p-1 font-semibold underline"
              variant={"ghost"}
            >
              Show more &gt;
            </Button>
          </div>
          <div className="w-full md:w-1/3">
            <ThingsToKnow
              title="Cancellation policy"
              rules={CancellationPoliciesDummy}
            />
            <Button
              className="text-md p-1 font-semibold underline"
              variant={"ghost"}
            >
              Show more &gt;
            </Button>
          </div>
        </div>
      </div>
    </WidthWrapper>
  )
}
export default SingleView
