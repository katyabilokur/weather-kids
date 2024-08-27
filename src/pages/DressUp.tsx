import { useSelection } from "../features/selection/SelectionContext";
import GoBack from "../ui/GoBack";

import { useWeather } from "../hooks/useWeather";

function DressUp() {
  const { coordinates, gender, date } = useSelection();
  //TODO: add error handling here
  const { isLoading, weatherData } = useWeather();

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
            <div>Dress up component</div>
            <div>Weather info component</div>
            <div>Clothes component</div>
          </>
        ))}
    </>
  );
}

export default DressUp;
