import Coordinates from "../interfaces/Coordinates";
import { fetchWeather } from "../services/apiWeather";

export async function getWeatherDetails(
  coordinates: Coordinates | null,
  date: Date | null
) {
  const dataWeatherAPI = await fetchWeather(coordinates, date);

  return dataWeatherAPI;
}
