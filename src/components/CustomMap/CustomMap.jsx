import React, {  useState } from "react";
import Map, {
  Marker,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import location from "../../assets/location.png";

function CustomMap() {
  const [lng, setLng] = useState(77.7172);
  const [lat, setLat] = useState(11.3410);
  const showPosition = (position) => {
    setLng(position.coords.longitude);
    setLat(position.coords.latitude);
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }

  return (
    <div>
      <h4>Location</h4>
      <Map
        mapboxAccessToken="pk.eyJ1Ijoia2lydXRoaWthZyIsImEiOiJjbDkydzlnMmQxMHhmM29xaDNscDI3NzYwIn0.7nG-L0LTVEcxQPUfQaze3g"
        style={{
          width: "80vw",
          height: "80vh",
          overflow:"hidden"
        }}
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: 8,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker longitude={lng} latitude={lat} >
          <img src={location} height="20px" width="20px " />
        </Marker>
      </Map> 
    </div>
  );
}
export default CustomMap;