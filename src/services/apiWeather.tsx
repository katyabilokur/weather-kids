import Coordinates from "../interfaces/Coordinates";
import { addDays } from "date-fns";

export async function fetchWeather<T>(
  coordinates: Coordinates,
  date: Date
): Promise<T> {
  const startDate = date.toISOString().split("T")[0]; //2024-05-13
  const endDate = addDays(date, 1).toISOString().split("T")[0];
  //TODO: add timezone support defined based on location
  const weather_url = `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.lat}&longitude=${coordinates.lng}&hourly=temperature_2m,precipitation_probability,precipitation,rain&daily=temperature_2m_max,temperature_2m_min,uv_index_max,rain_sum,showers_sum,precipitation_probability_max&timezone=Australia%2FSydney&start_date=${startDate}&end_date=${endDate}`;
  const res = await fetch(weather_url);
  let data: Promise<any> | null = null;

  try {
    data = await res.json();
  } catch (err: any) {
    console.log(err.message);
    alert("There was some error while getting weather information");
  }

  return data;
}
