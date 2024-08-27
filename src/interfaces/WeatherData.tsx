type DailyWeather = {
  rainSum: number;
  uvIndexMax: number;
  precipitationMax: number;
};

type HourlyWeather = {
  precipitation: Array<number>;
  precipitationProbability: Array<number>;
  temperature: Array<number>;
  rain: Array<number>;
};

export default interface WeatherData {
  daily: DailyWeather;
  hourly: HourlyWeather;
}
