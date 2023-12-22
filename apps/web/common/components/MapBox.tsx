import { MapPinIcon } from "@heroicons/react/20/solid"
import React, { useState } from "react"
import Map, { Marker } from "react-map-gl"

const TOKEN =
  process.env.TOKEN_MAP ||
  "pk.eyJ1IjoibWFkcmlnYWwxMTA3IiwiYSI6ImNsZ3ZwcTg1MTA1Z3gzbG4xamFoeWs2YncifQ.5kR7PSzA69TAFiR-JmtiOA"

const MapBox: React.FC = () => {
  return (
    <div className="fixed w-full">
      <Map
        mapboxAccessToken={TOKEN}
        initialViewState={{
          longitude: 133,
          latitude: 10,
          zoom: 5,
        }}
        style={{
          width: "100%",
          height: "100vh",
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker longitude={133} latitude={10} anchor="center" draggable>
          <MapPinIcon className="h-20 w-auto " />
        </Marker>
      </Map>
    </div>
  )
}

export default MapBox
