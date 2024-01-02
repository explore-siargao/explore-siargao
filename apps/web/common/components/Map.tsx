import { LatLng } from "leaflet"
import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const position = [51.505, -0.09]

  return (
    <>
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '100vh', width: '100wh' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
    </>
  )
}

export default Map
