import React, { useState, useEffect } from "react"
import { MapContainer, TileLayer, CircleMarker, Marker } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { Icon } from "leaflet"
import { Spinner } from "./ui/Spinner"

interface SpecificMapProps {
  coordinates: [Number, Number]
  mapHeight: string
  mapWidth: string
}

const homeIcon = new Icon({
  iconUrl:
    "https://www.nicepng.com/png/full/115-1153942_white-home-icon-png-white-home-logo-transparent.png",
  iconSize: [35, 35],
  iconAnchor: [18, 18],
  popupAnchor: [-3, -76],
})

const SpecificMap = ({
  coordinates,
  mapHeight,
  mapWidth,
}: SpecificMapProps) => {
  const [showMap, setShowMap] = useState(false)
  const HandleResize = () => {
    setShowMap(false)
    const timer = setTimeout(() => {
      setShowMap(true)
    }, 2000)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMap(true)
    }, 2000)
    window.addEventListener("resize", HandleResize)
    return () => clearTimeout(timer)
  }, [HandleResize])

  return (
    <div className="flex-1 block">
      <div className={`${mapHeight} ${mapWidth}`}>
        {showMap ? (
          <MapContainer
            //@ts-ignore
            center={coordinates}
            zoom={15}
            scrollWheelZoom={true}
            style={{
              height: "100%",
              width: "100%",
              zIndex: 30,
            }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <CircleMarker
              // @ts-ignore
              center={coordinates}
              color="#e4aa0b"
              fillColor="#e4aa0b"
              fillOpacity={1}
              radius={30}
            ></CircleMarker>
            <Marker
              //@ts-ignore
              position={coordinates}
              icon={homeIcon}
            ></Marker>
          </MapContainer>
        ) : (
          <div className="flex h-screen ">
            <Spinner className="m-auto" variant={"primary"} size={"lg"} />
          </div>
        )}
      </div>
    </div>
  )
}

export default SpecificMap
