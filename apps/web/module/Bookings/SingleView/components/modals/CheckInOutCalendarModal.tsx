import ModalContainer from "@/common/components/ModalContainer"
import ListingDateRangePicker from "../ListingDateRangePicker"

interface CheckInOutCalendarModalProps {
  isOpen: boolean
  onClose: () => void
}

const CheckInOutCalendarModal = ({
  isOpen,
  onClose,
}: CheckInOutCalendarModalProps) => {
  return (
    <ModalContainer size="calendar" isOpen={isOpen} onClose={onClose}>
      <div className="w-full flex justify-center">
        <div className="py-5 px-0">
          <ListingDateRangePicker title="5 Nights" />
        </div>
      </div>
    </ModalContainer>
  )
}
export default CheckInOutCalendarModal
