import ModalContainer from "@/common/components/ModalContainer"
import { Title } from "@/common/components/ui/Title"
import { T_BookingDescriptionModalProps } from "../../types/BookingDescription"

const ModalAboutTitleDescription = ({
  isOpen,
  onClose,
  listingDescription,
}: T_BookingDescriptionModalProps) => {
  return (
    <ModalContainer onClose={onClose} isOpen={isOpen} size="md">
      <div className="py-4 px-8 flex flex-col divide-text-100 overflow-y-auto h-[600px]">
        <Title className="flex text-xl font-semibold mb-5">
          About this place
        </Title>
        <div>
          <div>{listingDescription.generalDescription}</div>
          {listingDescription.aboutSpace && (
            <div>
              <Title className="flex text-md font-semibold mb-5 my-4">
                About space
              </Title>
              <div>{listingDescription.aboutSpace}</div>
            </div>
          )}
          {listingDescription.aboutGuestAccess && (
            <div>
              <Title className="flex text-md font-semibold mb-5 my-4">
                About guest access
              </Title>
              <div>{listingDescription.aboutGuestAccess}</div>
            </div>
          )}
          {listingDescription.otherThingsNote && (
            <div>
              <Title className="flex text-md font-semibold mb-5 my-4">
                Other things to note
              </Title>
              <div>{listingDescription.otherThingsNote}</div>
            </div>
          )}
        </div>
      </div>
    </ModalContainer>
  )
}

export default ModalAboutTitleDescription
