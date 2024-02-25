import { Typography } from "@/common/components/ui/Typography"
import { Check } from "lucide-react"
import { ConfirmedInformationProps } from "../types/ConfirmedInformation"

const ConfirmedInformation = ({
  name,
  confirmedInformation,
}: ConfirmedInformationProps) => {
  return (
    <div className="lg:px-6 lg:py-8 lg:border lg:rounded-xl w-full">
      <Typography variant="h1" fontWeight="semibold">
        {name}'s confirmed information
      </Typography>
      <ul className="mt-4">
        {confirmedInformation.identity && (
          <li className="flex items-center">
            <Check className="h-5 w-5 mr-3" />
            Identity
          </li>
        )}
        {confirmedInformation.email && (
          <li className="flex items-center">
            <Check className="h-5 w-5 mr-3" />
            Email address
          </li>
        )}
        {confirmedInformation.phone && (
          <li className="flex items-center">
            <Check className="h-5 w-5 mr-3" />
            Phone number
          </li>
        )}
      </ul>
    </div>
  )
}

export default ConfirmedInformation
