import { useSelection } from "../features/selection/SelectionContext";
import GoBack from "../ui/GoBack";

import { useWeather } from "../hooks/useWeather";
import DayPartSelection from "../features/weather/DayPartSelection";
import { useState } from "react";
import SummaryWeather from "../features/weather/SummaryWeather";
import Cloth from "../features/weather/Cloth";
import Button from "../ui/Button";
import { useMoveBack } from "../hooks/useMoveBack";
// import { useQueryClient } from "@tanstack/react-query";

function DressUp() {
  const { coordinates, gender, date } = useSelection();
  const moveBack = useMoveBack();

  const [filterDayPart, setFilterDayPart] = useState("All day");

  //TODO: add error handling here to render below
  //NOTE: Commented for Filter implementation only
  const { isLoading, weatherData } = useWeather();
  // const queryClient = useQueryClient();

  function onChangeSelection(e: React.ChangeEvent<HTMLSelectElement>) {
    setFilterDayPart(e.target.value);
    // queryClient.invalidateQueries({ queryKey: ["cloth"] });
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
            <div className="container-block">
              <DayPartSelection onChange={onChangeSelection}>
                How to dress up a {!gender ? "boy" : "girl"} for {"  "}
              </DayPartSelection>
              <SummaryWeather
                weatherData={weatherData}
                dayPartSelection={filterDayPart}
              />
            </div>
            <div className="container-block">
              <Cloth
                weatherData={weatherData}
                dayPartSelection={filterDayPart}
              />
            </div>
            <Button
              onClick={moveBack}
              $size="large"
              $color="--color-green"
              $border="--border-main"
              $colorHover="--color-green"
              $hoverBorderRadius="--border-radius-hg"
            >
              Start Over
            </Button>
          </>
        ))}
    </>
  );
}

export default DressUp;
