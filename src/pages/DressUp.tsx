import { useSelection } from "../features/selection/SelectionContext";
import GoBack from "../ui/GoBack";

import { useWeather } from "../hooks/useWeather";
import DayPartSelection from "../features/weather/DayPartSelection";
import { useEffect, useState } from "react";
import SummaryWeather from "../features/weather/SummaryWeather";
import Cloth from "../features/weather/Cloth";
import { timeRanges } from "../interfaces/constant";
import Button from "../ui/Button";
import { useMoveBack } from "../hooks/useMoveBack";

function DressUp() {
  const { coordinates, gender, date } = useSelection();
  const [filterDayPart, setFilterDayPart] = useState("All day");
  const [temp, setTemp] = useState({ min: 0, max: 0 });
  const [precipitation, setPrecipitation] = useState(0);

  const moveBack = useMoveBack();

  //TODO: add error handling here to render below
  //NOTE: Commented for Filter implementation only
  const { isLoading, weatherData } = useWeather();

  useEffect(() => {
    if (weatherData !== undefined) {
      const range = timeRanges.find((range) => range.text === filterDayPart);
      const temperatres = weatherData?.hourly.temperature_2m.slice(
        range.start,
        range.end
      );

      setTemp({ min: Math.min(...temperatres), max: Math.max(...temperatres) });

      const precipitation =
        weatherData?.daily.precipitation_probability_max[0] === 0
          ? 0
          : Math.max(
              weatherData?.hourly.precipitation_probability.slice(
                range.start,
                range.end
              )
            );

      setPrecipitation(precipitation);
    }
  }, [weatherData, filterDayPart, timeRanges]);

  function onChangeSelection(e: React.ChangeEvent<HTMLSelectElement>) {
    setFilterDayPart(e.target.value);
  }

  return (
    <>
      {coordinates === null && gender === null && date === null && (
        <GoBack>Go Back</GoBack>
      )}

      {coordinates !== null &&
        gender !== null &&
        date !== null &&
        (isLoading ? (
          <p>Loading data...</p>
        ) : (
          <>
            <DayPartSelection onChange={onChangeSelection}>
              How to dress up for {"  "}
            </DayPartSelection>
            <SummaryWeather
              weatherData={weatherData}
              //weatherData={"weatherData"}
              dayPartSelection={filterDayPart}
            />
            <Cloth
              minTemp={temp.min}
              maxTemp={temp.max}
              precipitation={precipitation}
            />
            <Button
              onClick={moveBack}
              $size="large"
              $color="--color-green-main"
              $border="--border-none"
              $colorHover="--color-green-main-dark"
            >
              Start Over
            </Button>
          </>
        ))}
    </>
  );
}

export default DressUp;
