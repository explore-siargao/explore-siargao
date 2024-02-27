import React, { useState, useEffect, useRef } from "react"
import { MapContainer, TileLayer, CircleMarker, Marker, Tooltip, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { Icon } from "leaflet"
import MapCustomPopup from "./MapCustomPopup"

interface MapWithPopupProps {
  coordinates: [number, number]
  mapHeight: string
  mapWidth: string
}

const homeIcon = new Icon({
  iconUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconAnchor: [12, 0]
})

const MapWithPopup = ({
  coordinates,
  mapHeight,
  mapWidth,
}: MapWithPopupProps) => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  const showPopup = () => {
    const map = mapRef.current;
    if (!map) {
      return;
    }

    const marker = markerRef.current;
    if (marker) {
      // @ts-ignore
      marker.openPopup();
    }
  };

  const closePopup = () => {
    const map = mapRef.current;
    if (!map) {
      return;
    }

    const marker = markerRef.current;
    if (marker) {
      // @ts-ignore
      marker.closePopup();
    }
  }


  return (
    <div className="flex-1 block bg-primary-200">
      <div className={`${mapHeight} ${mapWidth} relative`}>
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
            // @ts-ignore
            whenReady={(map: any) => {
              mapRef.current = map;
            }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              ref={markerRef}
              //@ts-ignore
              position={coordinates}
              icon={homeIcon}
            >
              <MapCustomPopup onClose={closePopup}/>
            </Marker>
          </MapContainer>
      </div>
    </div>
  )
}

export default MapWithPopup
