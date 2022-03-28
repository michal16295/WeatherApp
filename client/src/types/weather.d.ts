import { Location, LocationCord } from "./location";

export interface Weather {
  temp: number;
  wind: number;
  text: string;
  feelsLike: number;
  icon: string;
  humidity: number;
  uv: number;
}
export interface WeatherContextType {
  loading: boolean;
  error?: string;
  location?: Location;
  weather?: Weather;
  getCurrentWeather: (currentCord: LocationCord) => void;
}
