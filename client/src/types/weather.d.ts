import { Location, LocationCord } from "./location";

export interface WeatherContextType {
  loading: boolean;
  error?: string;
  location?: Location;

  getCurrentWeather: (currentCord: LocationCord) => void;
}
