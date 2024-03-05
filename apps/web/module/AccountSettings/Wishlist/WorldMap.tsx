import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { useEffect, useRef } from "react";
import MapCustomPopup from "@/common/components/MapCustomPopup";
import { Icon } from "leaflet";
import useSessionStore from "@/common/store/useSessionStore";
import { useParams } from "next/navigation";
import useGetWishGroupByUserAndTitle from "../hooks/useGetWishGroupByUserAndTitle";
import Listing from "@/module/Listing";

const navIcon = new Icon({
  iconUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconAnchor: [12, 0]
})

const WorldMap = () => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  const session = useSessionStore((state) => state)
  const params = useParams()
  const { data, isLoading } = useGetWishGroupByUserAndTitle(
    session.id as number,
    params?._id as string
  )

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

  useEffect(() => {
    console.log(markerRef)
  }, [])
  
  return (
    <>
      <MapContainer
        //@ts-ignore
        center={[data?.items[0]?.listing?.latitude, data?.items[0]?.listing?.longitude]}
        zoom={12}
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
          {data?.items?.length !== 0 && (
              data?.items?.map((item) => (
                <Marker
                ref={markerRef}
                position={[item.listing.latitude, item.listing.longitude]}
                icon={navIcon}
                >
                  <MapCustomPopup 
                  itemId={item.id}
                  price={
                    item.listing.price.fee +
                    item.listing.price.serviceFee +
                    item.listing.price.cleaningFee
                  }
                  date={item.listing.description}
                  isNight={false}
                  images={item.listing.images}
                  location={item.listing.address}
                  desc={item.listing.title}
                  rating={"0.0"}
                  countReviews={item.listing.review.length}
                  onClose={closePopup}/>
                </Marker>
              ))
          )}
      </MapContainer>
    </>
  )
}

export default WorldMap
