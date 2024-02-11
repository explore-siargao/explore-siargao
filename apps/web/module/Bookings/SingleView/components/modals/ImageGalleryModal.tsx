import ModalContainer from "@/common/components/ModalContainer"
import { Button } from "@/common/components/ui/Button"
import Image from "next/image"
import { Heart, Upload } from "lucide-react"
import ShareSave from "../ShareSave"

interface ImageGalleryModalProps {
  isOpen: boolean
  onClose: () => void
}

const ImageGalleryModal = ({ isOpen, onClose }: ImageGalleryModalProps) => {
  const imgSrc = [
    "/assets/1.jpg",
    "/assets/2.jpg",
    "/assets/3.jpg",
    "/assets/4.jpg",
    "/assets/5.jpg",
  ]

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose} size="full">
      <div className="relative space-y-1 pt-2 pb-20 h-screen overflow-y-auto">
        <div className="flex justify-center my-4">
          <ShareSave/>
        </div>
        {imgSrc.map((data) => {
          return (
            <div className="relative h-60 w-10/12 md:w-1/2 lg:w-1/3 mx-auto bg-gray-200">
              <Image src={data} layout="fill" objectFit="cover" alt="" />
            </div>
          )
        })}
      </div>
    </ModalContainer>
  )
}

export default ImageGalleryModal
