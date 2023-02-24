import * as React from 'react';
import Map, { NavigationControl, Marker } from 'react-map-gl';
import Navbar from './components/navbar.js';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './App.css';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Map mapLib={maplibregl}
        initialViewState={{
          longitude: -0.1147,
          latitude: 51.5544,
          zoom: 9
        }}
        style={{ width: "100%", height: " calc(100vh - 77px)" }}
        mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${process.env.REACT_APP_MAPTILER_MAPS_API_KEY}`}
      >
        <NavigationControl position="top-left" />
        <Marker longitude={-0.1147} latitude={51.5544} color='red' />
      </Map>
    </div>
  );
}

export default App;
