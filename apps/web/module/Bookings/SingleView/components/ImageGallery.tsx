import { Button } from "@/common/components/ui/Button"
import Image from "next/image"
import { Grip } from "lucide-react"
import { T_ImagesProps } from "../types/SectionInfo"

const ImageGallery = ({ images, openModal }: T_ImagesProps) => {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-2 md:gap-y-0 h-96">
        <div
          className="relative bg-gray-200 
                     lg:rounded-tl-xl lg:rounded-bl-xl 
                     md:rounded-tl-xl md:rounded-bl-xl md:rounded-tr-none
                     sm:rounded-tl-xl sm:rounded-tr-xl sm:rounded-bl-none
                     rounded-tl-xl rounded-tr-xl"
        >
          <Image
            src={`/assets/${images[0]?.fileKey}`}
            layout="fill"
            objectFit="cover"
            alt={String(images[0]?.alt)}
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="relative bg-gray-200">
            <Image
              src={`/assets/${images[1]?.fileKey}`}
              layout="fill"
              objectFit="cover"
              alt={String(images[1]?.alt)}
            />
          </div>
          <div className="relative bg-gray-200 rounded-tr-xl">
            <Image
              src={`/assets/${images[2]?.fileKey}`}
              layout="fill"
              objectFit="cover"
              alt={String(images[2]?.alt)}
            />
          </div>
          <div
            className="relative bg-gray-200
                          sm:rounded-bl-xl
                          rounded-bl-xl"
          >
            <Image
              src={`/assets/${images[3]?.fileKey}`}
              layout="fill"
              objectFit="cover"
              alt={String(images[3]?.alt)}
            />
          </div>
          <div
            className="relative bg-gray-200 
                          2xl:rounded-br-xl
                          lg:rounded-br-xl
                          rounded-br-xl"
          >
            <Image
              src={`/assets/${images[4]?.fileKey}`}
              layout="fill"
              objectFit="cover"
              alt={String(images[4]?.alt)}
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
