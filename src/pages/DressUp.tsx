import { useSelection } from "../features/selection/SelectionContext";
import GoBack from "../ui/GoBack";

import { useWeather } from "../hooks/useWeather";
import DayPartSelection from "../features/weather/DayPartSelection";
import { useState } from "react";

function DressUp() {
  const { coordinates, gender, date } = useSelection();
  const [filterDayPart, setFilterDayPart] = useState("All day");

  //TODO: add error handling here to render below
  //NOTE: Commented for Filter implementation only
  // const { isLoading, weatherData } = useWeather();

  function onChangeSelection(e: React.ChangeEvent<HTMLSelectElement>) {
    setFilterDayPart(e.target.value);
  }

  return (
    <>
      {coordinates === null && gender === null && date === null && (
        <GoBack>Go Back</GoBack>
      )}

      {coordinates !== null && gender !== null && date !== null && (
        //isLoading ? (
        //   <p>Loading data...</p>
        // ) :
        <>
          <DayPartSelection onChange={onChangeSelection}>
            Dress up for {"  "}
          </DayPartSelection>
          <div>Weather info component</div>
          <div>Clothes component</div>
        </>
      )}
    </>
  );
}

export default DressUp;
