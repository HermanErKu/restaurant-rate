import "../styling/Index.css";

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

export default Index;