import { MapContainer, TileLayer, Marker, FeatureGroup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { useEffect, useRef, useState } from "react"
import MapCustomPopup from "@/common/components/MapCustomPopup"
import { Icon } from "leaflet"
import useSessionStore from "@/common/store/useSessionStore"
import { useParams } from "next/navigation"
import useGetWishGroupByUserAndTitle from "../hooks/useGetWishGroupByUserAndTitle"

const navIcon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconAnchor: [12, 0],
})

const WorldMap = () => {
  const mapRef = useRef(null)
  const [markerRefs, setMarkerRefs] = useState([])

  const session = useSessionStore((state) => state)
  const params = useParams()
  const { data, isLoading } = useGetWishGroupByUserAndTitle(
    session.id as number,
    params?._id as string
  )

  const showPopup = (index: any) => {
    const map = mapRef.current
    if (!map) {
      return
    }

    const marker = markerRefs[index]
    if (marker) {
      // @ts-ignore
      marker.openPopup()
    }
  }

  const closePopup = (index: any) => {
    const map = mapRef.current
    if (!map) {
      return
    }

    const marker = markerRefs[index]
    if (marker) {
      // @ts-ignore
      marker.closePopup()
    }
  }

  useEffect(() => {
    // @ts-ignore
    if (data?.items?.length > 0) {
      // @ts-ignore
      setMarkerRefs(Array(data.items.length).fill(null))

      const map = mapRef.current
      const bounds = data?.items?.map(item => [item.listing.latitude, item.listing.longitude]);
      // @ts-ignore
      map.target.fitBounds([
        bounds
      ])
    }
  }, [data])

  return (
    <>
      <MapContainer
        center={[9.9, 126.03]}
        zoom={11}
        scrollWheelZoom={true}
        style={{
          height: "100%",
          width: "100%",
          zIndex: 30,
        }}
        // @ts-ignore
        whenReady={(map: any) => {
          mapRef.current = map
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data?.items?.length !== 0 &&
          data?.items?.map((item, index) => (
            <Marker
              key={index}
              position={[item.listing.latitude, item.listing.longitude]}
              icon={navIcon}
              // @ts-ignore
              ref={(el) => (markerRefs[index] = el)}
            >
              <MapCustomPopup
                itemId={item.id}
                price={
                  item.listing.price.fee +
                  item.listing.price.serviceFee +
                  item.listing.price.cleaningFee
                }
                isNight={false}
                images={item.listing.images}
                location={item.listing.address}
                rating={"0.0"}
                onClose={() => closePopup(index)}
              />
            </Marker>
        ))}
      </MapContainer>
    </>
  )
}

export default WorldMap
