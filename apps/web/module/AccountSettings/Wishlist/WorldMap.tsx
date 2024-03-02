import { MapContainer, TileLayer, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

const WorldMap = () => {
  const position = [9.8666632, 126.0499998]
  const location = [{ id: 1, position: [9.8666632, 126.0499998] }]
  return (
    <>
      <MapContainer
        //@ts-ignore
        center={position}
        zoom={12}
        scrollWheelZoom={true}
        style={{
          height: "100%",
          width: "100%",
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
    </>
  )
}

export default WorldMap
