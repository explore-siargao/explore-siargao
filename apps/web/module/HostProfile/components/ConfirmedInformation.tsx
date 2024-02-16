import { Typography } from "@/common/components/ui/Typography"
import { Check } from "lucide-react"

type ConfirmedInformationProps = {
    name: string,
    confirmedInformation: string[]
}

const ConfirmedInformation = ({name, confirmedInformation}: ConfirmedInformationProps) => {
    return (
        <div className="px-6 py-8 border rounded-md w-full">
            <Typography variant="h1" fontWeight="semibold">{name}'s confirmed information</Typography>
            <ul className="mt-4">
                {confirmedInformation.map((data) => (
                    <li className="flex items-center">
                        <Check className="h-5 w-5 mr-3"/> 
                        {data}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ConfirmedInformation