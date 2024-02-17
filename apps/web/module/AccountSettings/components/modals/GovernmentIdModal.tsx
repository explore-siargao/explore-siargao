import ModalContainer from "@/common/components/ModalContainer"
import { T_GovernmentId } from "@repo/contract"
import Image from "next/image"
interface GovernmentIdModalProps {
  isOpen: boolean
  onClose: () => void
  governmentId: T_GovernmentId
}

const GovernmentIdModal = ({
  isOpen,
  onClose,
  governmentId
}: GovernmentIdModalProps) => {
  return (
    <ModalContainer title={governmentId?.type} isOpen={isOpen} onClose={onClose} size="md">
      <div className="flex justify-center bg-primary-50 border border-primary-200">
        <div className="relative h-96">
          <Image
            src={`/assets/${governmentId?.fileKey}`}
            alt={governmentId?.type}
            width={300}
            height={300}
            className="object-cover h-full w-full rounded-lg"
          />
        </div>
      </div>
    </ModalContainer>
  )
}

export default GovernmentIdModal
