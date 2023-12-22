import React, { useState } from "react"
import ReactMapGL from "react-map-gl"

const MapboxMap = () => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "500px",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  })

  return (
    <ReactMapGL
      {...viewport}
      // mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN} // replace with your Mapbox access token
      // onViewportChange={(newViewport) => setViewport(newViewport)}
      mapStyle="mapbox://styles/mapbox/streets-v11"
    />
  )
}

export default MapboxMap
