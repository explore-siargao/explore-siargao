import { WidthWrapper } from "@/common/components/WidthWrapper"
import { Button } from "@/common/components/ui/Button"

interface BookingDescriptionProps {
  generalDescription: string
}

const BookingDescription: React.FC<BookingDescriptionProps> = ({
  generalDescription,
}) => {
  const maximumLength = 600
  const slicedDescription =
    generalDescription.length > maximumLength
      ? generalDescription.slice(0, maximumLength) + "....."
      : generalDescription
  return (
    <div>
      <div className="flex text-sm mb-2 ml-4">{slicedDescription}</div>
      <Button
        className="justify-start flex text-sm font-semibold underline"
        variant={"ghost"}
      >
        Show more &gt;
      </Button>
    </div>
  )
}

export default BookingDescription
