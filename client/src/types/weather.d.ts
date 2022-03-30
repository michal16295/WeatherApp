import { Location, LocationCord } from "./location";

export interface Weather {
  temp: number;
  wind: number;
  text: string;
  feelsLike: number;
  icon: string;
  humidity: number;
  rain: number;
  isDay: boolean;
  time?: string;
}

export interface Forecast {
  date: string;
  hours: Array<Weather>;
}
export interface WeatherContextType {
  loading: boolean;
  error?: string;
  location?: Location;
  weather?: Weather;
  forcast?: Array<any>;
  getCurrentWeather: (currentCord: LocationCord) => void;
}
