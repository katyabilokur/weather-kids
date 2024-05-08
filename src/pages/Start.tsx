import { useEffect, useState } from "react";
import "../styles/SearchAddress.css";
import {
  GeoapifyContext,
  GeoapifyGeocoderAutocomplete,
} from "@geoapify/react-geocoder-autocomplete";
import { useGeolocation } from "../hooks/useGeolocation";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import { styled } from "styled-components";

import Coordinates from "../interfaces/Coordinates";
import { getLocation } from "../helpers/locationHelpers";

const StyledSearchContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

function Start() {
  const [coordinates, setCooordinates] = useState<Coordinates>({
    lat: -33.9651281,
    lng: 150.8491261,
  });
  const [location, setLocation] = useState("");
  const { position, getPosition } = useGeolocation();

  //On loading a page for the first time
  useEffect(() => {
    //1 Check local storage. If it exists, take location and coordinates from there

    //2a. If no local storage, ask to use current location and get data from there.
    getPosition();

    //2b. Get location for the first time
    getLocation(coordinates, setLocation);
    console.log(location);

    //2c. Save a new location to local storage
  }, [location]);

  useEffect(() => {
    localStorage.setItem("weatherLocation", JSON.stringify(position));
  }, [position]);

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
      <StyledSearchContainer>
        <GeoapifyContext apiKey="0faacb54d4ce486aa6b33812c2a475e2">
          <GeoapifyGeocoderAutocomplete
            placeSelect={handleAddressSelecion}
            placeholder="Search address..."
            value={location}
          />
        </GeoapifyContext>
        {/* Add button to save to prefered location. If clicked, save a new location to a local storage. Otherwise just use it for next step calculation */}
        <Button
          $size="small"
          $color="--color-yellow-main"
          $border="--border-none"
          $colorHover="--color-yellow-main-dark"
        >
          Save
        </Button>
      </StyledSearchContainer>

      {location && <Heading as="h4">How to dress up in {location}</Heading>}
    </>
  );
}

export default Start;
