import { useState } from "react";
import "../styles/SearchAddress.css";
import {
  GeoapifyContext,
  GeoapifyGeocoderAutocomplete,
} from "@geoapify/react-geocoder-autocomplete";

function Start() {
  const [coordinates, setCooordinates] = useState([]);
  const [location, setLocation] = useState("");

  // function handleAddressSelecion(e: React.ChangeEvent<HTMLInputElement>) {
  function handleAddressSelecion(value: any) {
    console.log(value);

    if (value != null) {
      setCooordinates(value.geometry.coordinates);
      setLocation(
        `${value.properties.address_line1}, ${value.properties.address_line2}`
      );
    }

    console.log(coordinates);
    console.log(location);
  }

  return (
    <>
      <GeoapifyContext apiKey="0faacb54d4ce486aa6b33812c2a475e2">
        <GeoapifyGeocoderAutocomplete
          placeSelect={handleAddressSelecion}
          placeholder="Search address..."
          value={location}
        />
      </GeoapifyContext>
    </>
  );
}

export default Start;
