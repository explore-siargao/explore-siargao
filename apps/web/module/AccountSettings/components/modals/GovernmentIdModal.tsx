import ModalContainer from "@/common/components/ModalContainer"
import { Typography } from "@/common/components/ui/Typography"
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
    <ModalContainer isOpen={isOpen} onClose={onClose} size="sm">
      <div className="relative space-y-3 pt-3 pb-3 h-[250px] overflow-y-auto">
        <Typography variant={"h2"} className="flex justify-center">
          {title}
        </Typography>{" "}
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
