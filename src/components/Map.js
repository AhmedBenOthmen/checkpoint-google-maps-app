import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ center, zoom }) => {
  return (
    <LoadScript
      googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"
    >
      <GoogleMap
        mapContainerStyle={{
          width: '100%',
          height: '400px',
        }}
        center={center}
        zoom={zoom}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
