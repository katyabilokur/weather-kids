import styled from "styled-components";
import React from "react";
import { useCloth } from "../../hooks/useCloth";
import { useSelection } from "../selection/SelectionContext";
import ClothImage from "./ClothImage";
import { timeRanges } from "../../interfaces/constant";

const StyledCloth = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

interface ClothProps {
  dayPartSelection: string;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  weatherData: any;
}

function Cloth({ weatherData, dayPartSelection }: ClothProps) {
  const { gender } = useSelection();

  const range = timeRanges.find((range) => range.text === dayPartSelection);
  const temperatres = weatherData.hourly.temperature_2m.slice(
    range.start,
    range.end
  );

  const minTemp = Math.min(...temperatres);
  const maxTemp = Math.max(...temperatres);

  const precipitation =
    weatherData.daily.precipitation_probability_max[0] === 0
      ? 0
      : Math.max(
          weatherData.hourly.precipitation_probability.slice(
            range.start,
            range.end
          )
        );
  const rain = precipitation === 0 ? false : true;

  const { isLoading, clothData } = useCloth(gender);
  const filteredClothData = clothData?.filter(
    (cloth) =>
      cloth.tempStart <= minTemp &&
      cloth.tempEnd >= maxTemp &&
      cloth.rain === rain
  );

  console.log(`min: ${minTemp}, max: ${maxTemp}`);
  console.log(filteredClothData);

  return (
    <StyledCloth>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <>
          {filteredClothData?.map((el) => (
            <ClothImage key={el.url} url={el.url} />
          ))}
        </>
      )}
    </StyledCloth>
  );
}

export default Cloth;
