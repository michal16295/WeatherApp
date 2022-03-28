import { Location } from "./location";

export interface WeatherContextType {
  loading: boolean;
  error?: string;
  location?: Location;

  getCurrentWeather: () => void;
}
