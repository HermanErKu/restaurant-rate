/*import "../styling/Index.css";

import { Geocoder } from '@mapbox/search-js-react';

const Index = () => {
  const apiKey = process.env.REACT_APP_MAPBOX_API_KEY;
  console.log(apiKey);
  
  return (
    <div>
      <h1>Map test</h1>
      
      <Geocoder
        accessToken={apiKey}
        options={{
          language: 'en',
          country: 'NO',
          placeholder: 'Search for a location',
        }}
      />

      <button className="add-button"></button>
    </div>
  );
}

export default Index;*/



import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ({ accessToken }) => {
  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

    const map = new mapboxgl.Map({
      container: 'map', // Container ID
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [7.86432, 58.1402624], // Starting position [lng, lat]
      zoom: 10,
    });

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
    });

    map.addControl(geocoder);

    return () => {
      map.remove();
    };
  }, [accessToken]);

  return <div id="map" style={{ width: '100%', height: '400px' }} />;
};

export default Map;