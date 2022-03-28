import React, { useState, useEffect } from "react";
import { LocationCord } from "../types/location";

const useGeoLocation = () => {
  const [location, setLocation] = useState<LocationCord>();

  const onSuccess = (location: any): void => {
    setLocation({
      loaded: true,
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  };

  const onError = (error: any): void => {
    setLocation({
      loaded: true,
      error: error,
    });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};

export default useGeoLocation;
