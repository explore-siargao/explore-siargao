import React, { useEffect } from "react"
import { Loader, LoaderOptions } from "@googlemaps/js-api-loader"

const Map = () => {
  useEffect(() => {
    const loaderOptions: LoaderOptions = {
      apiKey: "my-api-key", // Replace with your actual API key
      version: "weekly", // Replace with the desired Google Maps API version
    }

    const loader = new Loader(loaderOptions)

    loader.load().then((google) => {
      const mapElement = document.getElementById("map")

      if (mapElement) {
        const map = new google.maps.Map(mapElement, {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8,
        })
      }
    })
  }, [])

  return <div id="map" style={{ height: "400px" }}></div>
}

export default Map
