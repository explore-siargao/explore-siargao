import ModalContainer from "@/common/components/ModalContainer"
import Image from "next/image"
interface GovernmentIdModalProps {
  isOpen: boolean
  onClose: () => void
  fileKey: string[]
  title: string
}

const GovernmentIdModal = ({
  isOpen,
  onClose,
  fileKey,
  title,
}: GovernmentIdModalProps) => {
  return (
    <ModalContainer title={title} isOpen={isOpen} onClose={onClose} size="sm">
      <div className="relative space-y-3 pt-5 pb-2 h-[250px] overflow-y-auto">
        {fileKey.map((data, index) => {
          return (
            <div
              key={`${data}-${index}`}
              className="relative h-[204px] w-[324px] mx-auto bg-gray-200"
            >
              <Image src={data} layout="fill" objectFit="cover" alt="" />
            </div>
          )
        })}
      </div>
    </ModalContainer>
  )
}

export default GovernmentIdModal
