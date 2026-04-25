'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import type { DataCenter } from '@/types'
import L from 'leaflet'

// Custom pin icon — avoids broken default Leaflet marker assets in webpack builds
function createPinIcon(color: string) {
  return new L.DivIcon({
    html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36" width="24" height="36">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 9 12 24 12 24s12-15 12-24C24 5.373 18.627 0 12 0z"
        fill="${color}" stroke="white" stroke-width="1.5"/>
      <circle cx="12" cy="12" r="4" fill="white"/>
    </svg>`,
    className: '',
    iconSize: [24, 36],
    iconAnchor: [12, 36],
    popupAnchor: [0, -38],
  })
}

const US_ICON = createPinIcon('#2563eb')  // blue-600
const UK_ICON = createPinIcon('#16a34a')  // green-600

type Props = { locations: DataCenter[] }

export default function Map({ locations }: Props) {
  return (
    <MapContainer
      center={[46, -38]}
      zoom={3}
      scrollWheelZoom={false}
      style={{ height: '460px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((dc) => (
        <Marker
          key={dc.id}
          position={[dc.lat, dc.lng]}
          icon={dc.country === 'US' ? US_ICON : UK_ICON}
        >
          <Popup>
            <div className="text-sm">
              <p className="font-semibold text-slate-800">{dc.name}</p>
              <p className="text-slate-500">{dc.region}</p>
              <span
                className={`inline-block mt-1 px-2 py-0.5 rounded text-xs font-semibold ${
                  dc.country === 'US'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-green-100 text-green-800'
                }`}
              >
                {dc.country === 'US' ? 'United States' : 'United Kingdom'}
              </span>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
