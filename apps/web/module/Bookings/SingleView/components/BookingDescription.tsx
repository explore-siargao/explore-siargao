import { Button } from "@/common/components/ui/Button"
import ModalAboutTitleDescription from "./modals/ModalAboutTitleDescription"
import { useState } from "react"

const DescriptionDummy = {
  generalDes:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi assumenda repellat placeat, quos aperiam amet obcaecati harum eum ipsum, ratione quam magnam sequi pariatur magni libero tempore odio numquam tenetur?",
  aboutSpace:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi assumenda repellat placeat, quos aperiam amet obcaecati harum eum ipsum, ratione quam magnam sequi pariatur magni libero tempore odio numquam tenetur?",
  aboutGuestAccess:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi assumenda repellat placeat, quos aperiam amet obcaecati harum eum ipsum, ratione quam magnam sequi pariatur magni libero tempore odio numquam tenetur?",
  otherThingsNote:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi assumenda repellat placeat, quos aperiam amet obcaecati harum eum ipsum, ratione quam magnam sequi pariatur magni libero tempore odio numquam tenetur?",
}

const BookingDescription = () => {
  const [descriptionModalOpen, setDescriptionModalOpen] = useState(false)
  const maximumLength = 600
  const slicedDescription =
    DescriptionDummy.generalDes.length > maximumLength
      ? DescriptionDummy.generalDes.slice(0, maximumLength) + "....."
      : DescriptionDummy.generalDes
  return (
    <>
      <div className="flex text-md mb-2">{slicedDescription}</div>
      <Button
        onClick={() => setDescriptionModalOpen(!descriptionModalOpen)}
        className="underline"
        variant="link"
        size="link"
      >
        Show more &gt;
      </Button>
      <ModalAboutTitleDescription
        isOpen={descriptionModalOpen}
        onClose={() => setDescriptionModalOpen(false)}
        listingDesc={DescriptionDummy}
      />
    </>
  )
}

export default BookingDescription
