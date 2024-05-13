import { useEffect, useState } from "react";
import "../styles/SearchAddress.css";
import { useGeolocation } from "../hooks/useGeolocation";
import Button from "../ui/Button";
import Coordinates from "../interfaces/Coordinates";
import {
  getCoordinatesLocalStorage,
  getLocation,
  localLocationDataExists,
} from "../helpers/locationHelpers";
import { toast } from "react-hot-toast";
import DateSelectionPanel from "../features/selection/DateSelectionPanel";
import GenderSelectionPanel from "../features/selection/GenderSelectionPanel";
import LocationSearch from "../features/selection/LocationSearch";

function Start() {
  const [coordinates, setCooordinates] = useState<Coordinates>();

  const { position, getPosition } = useGeolocation();
  const [date, setDate] = useState<Date>();
  const [gender, setGender] = useState<boolean>();

  //On loading a page for the first time
  useEffect(() => {
    //1a Check local storage. If it exists, take location and coordinates from there
    if (localLocationDataExists()) {
      setCooordinates(getCoordinatesLocalStorage());
    } else {
      //2. If no local storage, ask to use current location and get data from there.
      getPosition(true);
    }
  }, []);

  useEffect(() => {
    if (position) {
      setCooordinates(() => position as Coordinates);
      // getLocation(position as Coordinates, setLocation, true);
    }
  }, [position]);

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

    if (!coordinates || gender === undefined || !date) {
      toast("Please select all parameters: location, gender and date");
    } else {
    }
  }

  return (
    <>
      <LocationSearch position={position} />
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
