import { useState } from "react";
import Coordinates from "../interfaces/Coordinates";
import { saveCoordinatesLocalStorage } from "../helpers/locationHelpers";

export function useGeolocation() {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState<Coordinates>();
  const [error, setError] = useState<string | null>(null);

  function getPosition(save: boolean = false) {
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const newPosition = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };
        setPosition(newPosition);
        setIsLoading(false);

        if (save) {
          saveCoordinatesLocalStorage(newPosition);
        }
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }

  return { isLoading, position, error, getPosition };
}
