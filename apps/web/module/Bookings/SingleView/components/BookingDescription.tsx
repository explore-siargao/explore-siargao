import { Button } from "@/common/components/ui/Button"
interface BookingDescriptionProps {
  generalDescription: string
  onClick: () => void
}

const BookingDescription: React.FC<BookingDescriptionProps> = ({
  onClick,
  generalDescription,
}) => {
  const maximumLength = 600
  const slicedDescription =
    generalDescription.length > maximumLength
      ? generalDescription.slice(0, maximumLength) + "....."
      : generalDescription
  return (
    <div>
      <div className="flex text-md mb-2 ml-4">{slicedDescription}</div>
      <Button
        onClick={onClick}
        className="justify-start flex text-sm font-semibold underline"
        variant={"ghost"}
      >
        Show more &gt;
      </Button>
    </div>
  )
}

export default BookingDescription
