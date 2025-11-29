import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import iconMarker from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const defaultIcon = L.icon({
    iconRetinaUrl: iconRetina,
    iconUrl: iconMarker,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

const shelters = [
    { id: 1, name: 'Abrigo Central', lat: -3.7319, lng: -38.5267, address: 'Rua A, 123', capacity: '8/50' },
    { id: 2, name: 'Casa Flores', lat: -3.72, lng: -38.54, address: 'Av. Flores, 456', capacity: '0/30' },
    { id: 3, name: 'Refúgio Norte', lat: -3.745, lng: -38.52, address: 'Rua B, 890', capacity: '12/40' }
];

function FlyToLocation({ target }) {
    const map = useMap();
    if (target) {
        map.flyTo([target.lat, target.lng], 15);
    }
    return null;
}

export default function ShelterMap({ activeShelter }) {
    return (
        <MapContainer center={[-3.73, -38.53]} zoom={12} style={{ height: '100%', minHeight: '320px', borderRadius: '10px' }}>
            <TileLayer
                attribution='&copy; OpenStreetMap'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {shelters.map(s => (
                <Marker key={s.id} position={[s.lat, s.lng]} icon={defaultIcon}>
                    <Popup>
                        <strong>{s.name}</strong><br />
                        {s.address}<br />
                        Vagas: {s.capacity}
                    </Popup>
                </Marker>
            ))}
            <FlyToLocation target={activeShelter} />
        </MapContainer>
    );
}