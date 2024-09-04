import styled from "styled-components";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import {
  GeoapifyContext,
  GeoapifyGeocoderAutocomplete,
} from "@geoapify/react-geocoder-autocomplete";
import { useEffect, useState } from "react";
import {
  getLocation,
  getLocationLocalStorage,
  localLocationDataExists,
  saveCoordinatesLocalStorage,
  saveLocationLocalStorage,
} from "../../helpers/locationHelpers";
import Coordinates from "../../interfaces/Coordinates";
import { toast } from "react-hot-toast";
import { useSelection } from "./SelectionContext";

const StyledSearchContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

interface LocationSearchProps {
  position: Coordinates | undefined;
}

function LocationSearch({ position }: LocationSearchProps) {
  const [saveLocation, setSaveLocation] = useState(false);

  const { location, setLocation, coordinates, setCooordinates } =
    useSelection();

  useEffect(() => {
    if (localLocationDataExists()) {
      setLocation(getLocationLocalStorage());
    }
  }, []);

  useEffect(() => {
    if (position) {
      getLocation(position as Coordinates, setLocation, true);
    }
  }, [position]);

  // function handleAddressSelecion(e: React.ChangeEvent<HTMLInputElement>) {
  function handleAddressSelecion(value: any) {
    if (value !== null) {
      setSaveLocation(true);
      const newCoordinates = {
        lat: value.geometry.coordinates[1],
        lng: value.geometry.coordinates[0],
      };
      setCooordinates(newCoordinates);
      setLocation(
        `${value.properties.address_line1}, ${value.properties.address_line2}`
      );
    }
  }

  function handleSaveLocation() {
    saveCoordinatesLocalStorage(coordinates as Coordinates);
    saveLocationLocalStorage(location);

    toast.success("Preferred location has been saved locally");

    setSaveLocation(false);
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
          disabled={!saveLocation}
          onClick={handleSaveLocation}
          $size="small"
          $color="--color-green-light"
          $border="--border-none"
          $colorHover="--color-green"
          $hoverBorderRadius="--border-radius-hg"
        >
          Save
        </Button>
      </StyledSearchContainer>
    </>
  );
}

export default LocationSearch;
