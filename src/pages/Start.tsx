import { useEffect } from "react";
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
import { useSelection } from "../features/selection/SelectionContext";
import { useNavigate } from "react-router-dom";
// import StyledLink from "../ui/StyledLink";

function Start() {
  const { position, getPosition } = useGeolocation();
  const navigate = useNavigate();

  const {
    setLocation,
    coordinates,
    setCooordinates,
    gender,
    setGender,
    date,
    setDate,
  } = useSelection();

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
      setCooordinates(position as Coordinates);
      getLocation(position as Coordinates, setLocation, true);
    }
  }, [position]);

  function handleDateSelection(dateSelected: Date) {
    setDate(dateSelected);
  }

  function handleGenderSelection(girl: boolean) {
    setGender(girl);
  }

  function handleParamSelection() {
    if (!coordinates || gender === null || !date) {
      toast("Please select all parameters: location, gender and date");
    } else {
      navigate("/dressup");
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
      {/* <StyledLink to="/dressup">Check it</StyledLink> */}
    </>
  );
}

export default Start;
