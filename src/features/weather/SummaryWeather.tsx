import styled from "styled-components";
import React from "react";
import { PiThermometerHotLight, PiCloudRainLight } from "react-icons/pi";
import { timeRanges } from "../../interfaces/constant";
import Heading from "../../ui/Heading";

const StyledSummaryWeather = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const StyledRow = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
`;

const StyledInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const baseIconStyles = `
  color: var(--color-blue-main);
  height: 6rem;
  width: 6rem;
`;

const StyledTermIcon = styled(PiThermometerHotLight)`
  ${baseIconStyles}
`;
const StyledRainIcon = styled(PiCloudRainLight)`
  ${baseIconStyles}
`;

interface SummaryWeatherProps {
  dayPartSelection: string;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  weatherData: any;
}

function SummaryWeather({
  weatherData,
  dayPartSelection,
}: SummaryWeatherProps) {
  console.log(weatherData);
  console.log(dayPartSelection);
  const range = timeRanges.find((range) => range.text === dayPartSelection);
  const temperatres = weatherData.hourly.temperature_2m.slice(
    range.start,
    range.end
  );

  const maxTemperatureInRange = Math.max(...temperatres);
  const minTemperatureInRange = Math.min(...temperatres);

  const precipitation =
    weatherData.daily.precipitation_probability_max[0] === 0
      ? 0
      : Math.max(
          weatherData.hourly.precipitation_probability.slice(
            range.start,
            range.end
          )
        );

  //TODO: for design fix only
  // const maxTemperatureInRange = 13.2;
  // const minTemperatureInRange = 8.4;
  // const precipitation = 13;

  return (
    <StyledSummaryWeather>
      <Heading as="h3">
        Information for {range.start}:00 - {range.end}:00
      </Heading>
      <StyledRow>
        <StyledTermIcon />
        <StyledInfoBlock>
          <p>{maxTemperatureInRange} &deg;C</p>
          <p>MAX</p>
        </StyledInfoBlock>
        <StyledInfoBlock>
          <p>{minTemperatureInRange} &deg;C</p>
          <p>MIN</p>
        </StyledInfoBlock>
      </StyledRow>
      <StyledRow>
        <StyledRainIcon />
        <StyledInfoBlock>
          <p>{precipitation}% chances</p>
        </StyledInfoBlock>
      </StyledRow>
    </StyledSummaryWeather>
  );
}

export default SummaryWeather;
