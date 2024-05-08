import Coordinates from "../interfaces/Coordinates";
import ResponseLocation from "../interfaces/ResponseLocation";
import { fetchLocation } from "../services/apiLocations";

export async function getLocation(coordinates: Coordinates, setter: any) {
  const dataFetched = await fetchLocation(coordinates);
  const newData = dataFetched as ResponseLocation;

  setter(newData.features[0].properties.address_line2);
}
