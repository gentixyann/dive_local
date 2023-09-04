import React from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '85vh',
};

const center = {
  lat: 34.7293466708865,
  lng: 135.49939605607292,
};

const zoom = 13;

const positionAkiba = {
  lat: 35.69731,
  lng: 139.7747,
};

const positionIwamotocho = {
  lat: 35.69397,
  lng: 139.7762,
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={zoom}>
        <MarkerF position={positionAkiba} onLoad={() => console.log('Marker Loaded')} />
        <MarkerF position={positionIwamotocho} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
