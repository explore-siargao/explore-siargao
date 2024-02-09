import { Button } from "@/common/components/ui/Button"
import Image from "next/image"
import { Grip } from "lucide-react"

interface Imagesprops {
  openModal: () => void
  imageKeys: {
    fileKey: string
    alt: string
  }[]
}
const ImageGallery = ({ imageKeys, openModal }: Imagesprops) => {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-2 md:gap-y-0 h-96">
        <div className="relative bg-gray-200">
          <Image
            src={`/assets/${imageKeys[0]?.fileKey}`}
            layout="fill"
            objectFit="cover"
            alt={imageKeys[0]?.alt as string}
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="relative bg-gray-200">
            <Image
              src={`/assets/${imageKeys[1]?.fileKey}`}
              layout="fill"
              objectFit="cover"
              alt={imageKeys[1]?.alt as string}
            />
          </div>
          <div className="relative bg-gray-200">
            <Image
              src={`/assets/${imageKeys[2]?.fileKey}`}
              layout="fill"
              objectFit="cover"
              alt={imageKeys[2]?.alt as string}
            />
          </div>
          <div className="relative bg-gray-200">
            <Image
              src={`/assets/${imageKeys[3]?.fileKey}`}
              layout="fill"
              objectFit="cover"
              alt={imageKeys[3]?.alt as string}
            />
          </div>
          <div className="relative bg-gray-200">
            <Image
              src={`/assets/${imageKeys[4]?.fileKey}`}
              layout="fill"
              objectFit="cover"
              alt={imageKeys[4]?.alt as string}
            />
          </div>
        </div>
      </div>
      <Button
        variant="shaded"
        className="absolute bottom-2 md:bottom-4 right-1 md:right-4 bg-white"
        onClick={() => openModal()}
      >
        <Grip className="h-4 w-4 mr-2 mb-0.5" />
        Show all photos
      </Button>
    </div>
  )
}

export default ImageGallery
