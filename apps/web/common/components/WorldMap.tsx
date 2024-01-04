import React from "react"
import { MapContainer, TileLayer, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

const location = [
  { id: 1, position: [9.8666632, 126.0499998] },
  { id: 2, position: [14.5995, 120.9842] },
  { id: 3, position: [7.1907, 125.4553] },
]

const WorldMap = () => {
  const position = [9.8666632, 126.0499998]

  return (
    <div>
      <MapContainer
        //@ts-ignore
        center={position}
        zoom={5}
        scrollWheelZoom={true}
        style={{
          height: "100vh",
          width: "100wh",
          zIndex: 30,
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {location.map((item) => (
          <Popup
            autoClose={false}
            closeOnClick={false}
            //@ts-ignore
            position={item.position}
            key={item.id}
          >
            Explore Siargao
          </Popup>
        ))}
      </MapContainer>
    </div>
  )
}

export default WorldMap
