import { Popup } from "react-leaflet"
import Image from "next/image"
import { StarIcon, HeartIcon } from "@heroicons/react/20/solid"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { ChevronRight, ChevronLeft } from "lucide-react"

type Prop = {
    onClose: () => void
}

const MapCustomPopup = ({onClose}: Prop) => {
    return(
        <>
        <style>
        {
        `
          .request-popup .leaflet-popup-content-wrapper {
            border-radius: 0px;
          }
        `
        }
        </style>
        <Popup className="request-popup">
            <div className="absolute bg-gray-200 top-0 left-0 right-0 rounded-none h-[64%] w-full">
                <div className="relative h-full w-full">
                    <Image src="/assets/1.jpg" layout="fill" objectFit="cover" alt=""/>
                </div>
                <div className="bg-gray-500 border border-gray-300 rounded-full absolute left-1 top-1 text-white px-4 py-1">
                    Host
                </div>
                <button className="bg-white rounded-full z-10 p-1 border border-gray-300 absolute right-1 top-1"
                onClick={onClose}>
                    <XMarkIcon className="h-4 w-4" />
                </button>
                <button className="bg-white rounded-full p-1 border border-gray-300 absolute right-9 top-1">
                    <HeartIcon className="h-4 w-4" fill="red"/>
                </button>
                <button className="bg-white rounded-full border border-gray-300 p-1 absolute left-1 top-14">
                    <ChevronLeft className="h-4 w-4" />
                </button>
                <button className="bg-white rounded-full border border-gray-300 p-1 absolute right-1 top-14">
                    <ChevronRight className="h-4 w-4" />
                </button>
            </div>
            <div className="h-44 w-44">
            <div className="absolute bottom-0 left-0 right-0 h-[36%] w-full p-1.5">
                <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-sm w-32 whitespace-nowrap overflow-hidden text-ellipsis">Hut in Balian Beach</h4>
                    <div className="space-x-0.5 flex items-center">
                        <StarIcon className="h-4 w-4"/>
                        <h4 className="text-sm">4.86</h4>
                        <h4 className="text-sm">(325)</h4>
                    </div>
                </div>
                <h4 className="text-sm text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis">BALIAN TREE HOUSE OF BALIAN TREE</h4>
                <h4 className="text-sm text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis">1 king bed</h4>
            </div>
            </div>
        </Popup>
        </>
    )
}

export default MapCustomPopup