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
import {
  getCoordinatesLocalStorage,
  getLocation,
  getLocationLocalStorage,
  localLocationDataExists,
  saveCoordinatesLocalStorage,
  saveLocationLocalStorage,
} from "../helpers/locationHelpers";
import { toast } from "react-hot-toast";
import DateSelectionPanel from "../features/selection/DateSelectionPanel";
import GenderSelectionPanel from "../features/selection/GenderSelectionPanel";

const StyledSearchContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

function Start() {
  const [coordinates, setCooordinates] = useState<Coordinates>();
  const [location, setLocation] = useState<string>("");
  const [saveLocation, setSaveLocation] = useState(false);
  const { position, getPosition } = useGeolocation();
  const [date, setDate] = useState<Date>();
  const [gender, setGender] = useState<boolean>();

  //On loading a page for the first time
  useEffect(() => {
    //1a Check local storage. If it exists, take location and coordinates from there
    if (localLocationDataExists()) {
      setCooordinates(getCoordinatesLocalStorage());
      setLocation(getLocationLocalStorage());
    } else {
      //2. If no local storage, ask to use current location and get data from there.
      getPosition(true);
    }
  }, []);

  useEffect(() => {
    if (position) {
      setCooordinates(() => position as Coordinates);
      getLocation(position as Coordinates, setLocation, true);
    }
  }, [position]);

  // function handleAddressSelecion(e: React.ChangeEvent<HTMLInputElement>) {
  function handleAddressSelecion(value: any) {
    if (value !== null) {
      setSaveLocation(true);
      const newCoordinates = {
        lat: value.geometry.coordinates[0],
        lng: value.geometry.coordinates[1],
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

  function handleDateSelection(dateSelected: Date) {
    setDate(dateSelected);
  }

  function handleGenderSelection(girl: boolean) {
    setGender(girl);
  }

  function handleParamSelection() {
    // console.log(coordinates);
    // console.log(location);
    // console.log(date);
    // console.log(gender);

    if (!location || gender === undefined || !date) {
      toast("Please select all parameters: location, gender and date");
    } else {
    }
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
          $color="--color-yellow-main"
          $border="--border-none"
          $colorHover="--color-yellow-main-dark"
        >
          Save
        </Button>
      </StyledSearchContainer>

      {location && <Heading as="h4">How to dress up in {location}</Heading>}
      {!location && (
        <Heading as="h4">Please serach for a location first...</Heading>
      )}
      <GenderSelectionPanel onGenderSelection={handleGenderSelection} />
      <DateSelectionPanel onDateSelect={handleDateSelection} />
      <Button
        onClick={handleParamSelection}
        $size="large"
        $color="--color-green-main"
        $border="--border-none"
        $colorHover="--color-green-main-dark"
      >
        Check it
      </Button>
    </>
  );
}

export default Start;
