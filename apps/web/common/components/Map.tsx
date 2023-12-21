import React, { useState, useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

const Map = () => {
  const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 })
  const [mapLoaded, setMapLoaded] = useState(false)
  const ZOOM_LEVEL = 9

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setCenter({ lat: 13.084622, lng: 80.248357 })
      setMapLoaded(true)
    }

    fetchData()
  }, [])

  return (
    <>
      {mapLoaded && (
        <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={center}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </>
  )
}

export default Map
