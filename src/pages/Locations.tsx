import { MapContainer, Marker, TileLayer } from "react-leaflet";

export default function Locations() {
  return (
    <div>
      <h2 className="sr-only">Our Locations</h2>
      <ul className="grid gap-6 pb-6">
        <li>
          <MapContainer
            className="h-[20rem]"
            center={[43.64099990951995, -79.41015585824242]}
            zoom={14}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[43.64099990951995, -79.41015585824242]}></Marker>
          </MapContainer>
          <div className="bg-light-peach bg-opacity-20 py-20 px-6 grid place-content-center gap-6 text-center text-body-sm">
            <h3 className="text-mobile-heading-l font-medium text-peach">
              Canada
            </h3>
            <p className="grid">
              <strong>Designo Central Office</strong>
              <span>3886 Wellington Street</span>
              Toronto, Ontario M9C 3J5
            </p>
            <p className="grid">
              <strong>Contact</strong>
              <span>P : +1 253-863-8967</span>M : contact@designo.co
            </p>
          </div>
        </li>
        <li>
          <MapContainer
            className="h-[20rem]"
            center={[-31.732751704358066, 152.6971584824212]}
            zoom={14}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={[-31.732751704358066, 152.6971584824212]}
            ></Marker>
          </MapContainer>
          <div className="bg-light-peach bg-opacity-20 py-20 px-6 grid place-content-center gap-6 text-center text-body-sm">
            <h3 className="text-mobile-heading-l font-medium text-peach">
              Australia
            </h3>

            <p className="grid">
              <strong>Designo AU Office</strong>
              <span>24 Station St</span>
              New South Wales 2443
            </p>

            <p className="grid">
              <strong>Contact</strong>
              <span>P : (02) 6720 9092</span>M : contact@designo.au
            </p>
          </div>
        </li>
        <li>
          <MapContainer
            className="h-[20rem]"
            center={[51.72720237281599, -3.862572568728834]}
            zoom={14}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.72720237281599, -3.862572568728834]}></Marker>
          </MapContainer>
          <div className="bg-light-peach bg-opacity-20 py-20 px-6 grid place-content-center gap-6 text-center text-body-sm">
            <h3 className="text-mobile-heading-l font-medium text-peach">
              United Kingdom
            </h3>
            <p className="grid">
              <strong>Designo UK Office</strong>
              <span>26 Waun Gron</span>
              Rhyd-y-fro SA8 9GA
            </p>
            <p className="grid">
              <strong>Contact</strong>
              <span>P : 078 3115 1400</span>M : contact@designo.uk
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
