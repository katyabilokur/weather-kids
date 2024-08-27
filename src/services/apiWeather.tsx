import Coordinates from "../interfaces/Coordinates";
import { format } from "date-fns";

export async function fetchWeather<T>(
  coordinates: Coordinates | null,
  date: Date
): Promise<T> {
  const formattedDate = format(date, "yyyy-MM-dd");
  //TODO: add timezone support defined based on location
  const weather_url = `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.lat}&longitude=${coordinates.lng}&hourly=temperature_2m,precipitation_probability,precipitation,rain&daily=temperature_2m_max,temperature_2m_min,uv_index_max,rain_sum,showers_sum,precipitation_probability_max&timezone=Australia%2FSydney&start_date=${formattedDate}&end_date=${formattedDate}`;
  const res = await fetch(weather_url);
  /* eslint-disable */
  let data: Promise<any> | null = null;

  try {
    data = await res.json();
    /* eslint-disable */
  } catch (err: any) {
    console.log(err.message);
    alert("There was some error while getting weather information");
  }

  return data;
}
