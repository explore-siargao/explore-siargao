import React from "react"
import { MapContainer, TileLayer, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

const Map = () => {
  const position = [51.505, -0.09]

  return (
    <>
      <MapContainer
        //@ts-ignore
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{
          height: "100vh",
          width: "100wh",
          zIndex: 30,
        }}
        className="sticky top-0 bottom-0 inset-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* @ts-ignore */}
        <Popup position={position}>Explore Siargao</Popup>
      </MapContainer>
    </>
  )
}

export default Map
