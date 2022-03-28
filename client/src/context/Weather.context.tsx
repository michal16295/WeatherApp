import React, { createContext, ReactNode, useContext, useState } from "react";
import * as weatherApi from "../apis/ weather.action";
import useGeoLocation from "../hooks/useGeoLocation";
import { WeatherContextType } from "../types/weather";
import routes from "../routes.json";

const WeatherContext = createContext<WeatherContextType>(
  {} as WeatherContextType
);

export const WeatherProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const location = useGeoLocation();

  const getCurrentWeather = async () => {
    try {
      setLoading(true);
      const res = await weatherApi.getCurrentWeather(location);
      console.log(res);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        loading,
        error,
        location,
        getCurrentWeather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default function useAuth(): WeatherContextType {
  return useContext(WeatherContext);
}
