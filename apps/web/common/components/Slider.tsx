import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/swiper-bundle.css"
import "swiper/css/navigation"
import "swiper/css/pagination"

interface SliderProps {
  images: {
    fileKey: string
    alt: string
  }[]
}

const Slider = ({ images }: SliderProps) => {
  return (
    <Swiper
      navigation
      pagination={{ type: "bullets", clickable: true }}
      modules={[Navigation, Pagination]}
      className="h-full w-full rounded-lg"
    >
      <style>{`
        .swiper-button-prev, .swiper-button-next {
          color: black;
          background-color: white;
          border-radius: 50%; 
          width: 30px; 
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        .swiper-button-next:after, 
        .swiper-button-prev:after {
          font-size: 10px;
          font-weight: 600;
        }
        .swiper-pagination-bullet {
          background-color: white;
        }
      `}</style>

      {images.map((image, _sliderIndex) => (
        <SwiperSlide key={`slider-${_sliderIndex}`}>
          <div className="flex h-full w-full items-center justify-center">
            <Image
              width={300}
              height={300}
              src={`/assets/${image.fileKey}`}
              alt={image.alt}
              className="block h-full w-full object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider
