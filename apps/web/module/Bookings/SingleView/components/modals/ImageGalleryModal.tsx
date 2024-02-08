import ModalContainer from "@/common/components/ModalContainer"
import { Button } from "@/common/components/ui/Button"
import Image from "next/image"
import { Heart, Upload } from "lucide-react"

interface ImageGalleryModal {
  isOpen: boolean
  onClose: () => void
}

const ImageGalleryModal = ({ isOpen, onClose }: ImageGalleryModal) => {
  const imgSrc = [
    "https://www.travelandleisure.com/thmb/_XsBCRprdQriog2hTCkuiT3f7lc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-airbnb-listing-NEWAIRBNB1123-a67a0e07c4e846e2ae4e653d201e47af.jpg",
    "https://news.airbnb.com/wp-content/uploads/sites/4/2020/05/Airbnb-Beachfront-Greece.jpg?fit=2662,1776",
    "https://images.squarespace-cdn.com/content/v1/617ad962ce1852409c74d318/be2da685-d234-449c-a8e5-66d930e046e5/Chowchilla+Mountain-54.jpg",
    "https://news.airbnb.com/wp-content/uploads/sites/4/2020/12/Airbnb-Stay-New-South-Wales.jpg",
  ]

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose} size="full">
      <div className="relative space-y-1 pt-2 pb-20 h-screen overflow-y-auto">
        <div className="flex justify-center mb-2">
          <Button variant="ghost">
            <Upload className="h-4 w-4 mr-1" strokeWidth="1" />
            <span className="underline">Share</span>
          </Button>
          <Button variant="ghost">
            <Heart className="h-4 w-4 mr-1" strokeWidth="1" />
            <span className="underline">Save</span>
          </Button>
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
