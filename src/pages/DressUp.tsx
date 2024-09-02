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
            <DayPartSelection onChange={onChangeSelection}>
              How to dress up for {"  "}
            </DayPartSelection>
            <SummaryWeather
              weatherData={weatherData}
              dayPartSelection={filterDayPart}
            />
            <Cloth weatherData={weatherData} dayPartSelection={filterDayPart} />
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
