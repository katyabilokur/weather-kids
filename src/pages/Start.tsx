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
import styled from "styled-components";
// import StyledLink from "../ui/StyledLink";

const Container = styled.div`
  background-color: var(--color-light-base);
  border-radius: var(--border-radius-mg);
  box-shadow: var(--box-shadow-md);
  width: 80rem;
  padding: 4rem 4rem 6rem 6rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4rem;

  p {
    font-size: 2rem;
    font-weight: 400;
    align-self: flex-start;
  }
`;

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
      <Container>
        <p>1. Select your interested location</p>
        <LocationSearch position={position} />
      </Container>
      <Container>
        <p>2. Select the gender of a kid</p>
        <GenderSelectionPanel onGenderSelection={handleGenderSelection} />
      </Container>
      <Container>
        <p>3. Do you whant to check weather for today or tomorrow?</p>
        <DateSelectionPanel onDateSelect={handleDateSelection} />
      </Container>
      <Button
        onClick={handleParamSelection}
        $size="large"
        $color="--color-green"
        $border="--border-main"
        $colorHover="--color-green"
        $hoverBorderRadius="--border-radius-hg"
      >
        Check it
      </Button>
      {/* <StyledLink to="/dressup">Check it</StyledLink> */}
    </>
  );
}

export default Start;
