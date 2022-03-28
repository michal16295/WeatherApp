import httpService from "./httpService";
import routes from "./routes";
import globalConstants from "../constants/globalConstants";
import { LocationCord } from "../types/location";

export const getCurrentWeather = async (
  location: LocationCord | undefined
): Promise<any> => {
  try {
    const res = await httpService.get(
      `${routes.CURRENT_WEATHER}?key=${globalConstants.API_KEY}&q=${location?.latitude},${location?.longitude}&aqi=no`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
