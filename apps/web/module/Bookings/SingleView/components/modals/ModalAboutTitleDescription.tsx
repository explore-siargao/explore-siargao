import ModalContainer from "@/common/components/ModalContainer"
import { Title } from "@/common/components/ui/Title"

interface IDescription {
  id?: number
  generalDes: string
  aboutSpace?: string
  aboutGuestAccess?: string
  otherThingsNote?: string
}
interface AboutTitleDescriptionProps {
  isOpen: boolean
  onClose: () => void
  listingDesc: IDescription
}

const ModalAboutTitleDescription = ({
  isOpen,
  onClose,
  listingDesc,
}: AboutTitleDescriptionProps) => {
  return (
    <ModalContainer onClose={onClose} isOpen={isOpen}>
      <div className="p-6 flex flex-col divide-text-100 overflow-y-auto h-[600px]">
        <Title className="flex text-xl font-semibold mb-5">
          About this place
        </Title>
        <div>
          <div>{listingDesc.generalDes}</div>
          {listingDesc.aboutSpace && (
            <div>
              <Title className="flex text-md font-semibold mb-5 my-4">
                About space
              </Title>
              <div>{listingDesc.aboutSpace}</div>
            </div>
          )}
          {listingDesc.aboutGuestAccess && (
            <div>
              <Title className="flex text-md font-semibold mb-5 my-4">
                About guest access
              </Title>
              <div>{listingDesc.aboutGuestAccess}</div>
            </div>
          )}
          {listingDesc.otherThingsNote && (
            <div>
              <Title className="flex text-md font-semibold mb-5 my-4">
                Other things to note
              </Title>
              <div>{listingDesc.otherThingsNote}</div>
            </div>
          )}
        </div>
      </div>
    </ModalContainer>
  )
}

export default ModalAboutTitleDescription
