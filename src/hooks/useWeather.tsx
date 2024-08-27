import { useSelection } from "../features/selection/SelectionContext";
import { useQuery } from "@tanstack/react-query";
import { getWeatherDetails } from "../helpers/weatherHelper";

export function useWeather() {
  const { coordinates, date } = useSelection();

  const {
    isLoading,
    data: weatherData,
    error,
  } = useQuery({
    queryKey: ["weather"],
    queryFn: () => getWeatherDetails(coordinates, date),
  });

  return { isLoading, weatherData, error };
}
