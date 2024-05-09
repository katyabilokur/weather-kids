import Coordinates from "../interfaces/Coordinates";
import ResponseLocation from "../interfaces/ResponseLocation";
import { fetchLocation } from "../services/apiLocations";

export async function getLocation(
  coordinates: Coordinates,
  setter: any,
  save: boolean = false
) {
  const dataFetched = await fetchLocation(coordinates);
  const newData = dataFetched as ResponseLocation;

  const location = newData.features[0].properties.address_line2;
  setter(location);

  if (save) {
    saveLocationLocalStorage(location);
  }
}

function saveToLocalStorage(name: string, value: any) {
  localStorage.setItem(name, JSON.stringify(value));
}

export function saveCoordinatesLocalStorage(value: Coordinates) {
  saveToLocalStorage("weatherLocationCoordinates", value);
}

function saveLocationLocalStorage(value: string) {
  saveToLocalStorage("weatherLocation", value);
}

export function getLocationLocalStorage(): string {
  return JSON.parse(localStorage.getItem("weatherLocation") || "");
}

export function getCoordinatesLocalStorage(): Coordinates {
  const locCoordinates = localStorage.getItem("weatherLocationCoordinates");
  return JSON.parse(locCoordinates || "{}") as Coordinates;
}

export function localLocationDataExists(): boolean {
  const locCoordinates = localStorage.getItem("weatherLocationCoordinates");

  return locCoordinates ? true : false;
}
