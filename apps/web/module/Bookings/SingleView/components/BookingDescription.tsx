import { Button } from "@/common/components/ui/Button"
import ModalAboutTitleDescription from "./modals/ModalAboutTitleDescription"
import { useState } from "react"

const DescriptionDummy = {
  generalDes:
    "Welcome to this stunning private villa located just near one of the most beautiful  beaches of Siargao. Enjoy scenic private outdoor pool views & stylishly furnished spacious  indoor  with a touch of local art. All hidden in 800 m2 tropical garden.",
  aboutSpace:
    "Welcome to this stunning private villa located just near one of the most beautiful beaches of Siargao. Enjoy scenic private outdoor pool views & stylishly furnished spacious indoor with a touch of local art. All hidden in 800 m2 tropical garden. The unique mixture of modern design & tropical nature provides comfort and privacy whilst offering unique experience of luxurious getaway in a jungle paradise.",
  aboutGuestAccess:
    "This spacious 1-bedroom villa is for full and exclusive use of our guests, which have 24h access to the property provided during their stay. To keep our Guests' privacy and safety the building is fenced and can be locked from inside and outside. The guests have unlimited access to private outdoor pool and bath tube with hot water. Free access to WiFi connection is provided.",
  otherThingsNote:
    "We recommend to our guests to have a motorbike or scooter to reach the house or get there by van from the airport (we can arrange this for you). Please be aware that the last part of the road to the villa is through a dirt road, that usually gets muddy during heavy rains, which occur between December and February. Please make sure you are comfortable driving a scooter/motorbike on a dirt road or rent a trike from General Luna.",
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
