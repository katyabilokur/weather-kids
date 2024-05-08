//TODO: fix or delete.
import { useQuery } from "@tanstack/react-query";
import { fetchLocation } from "../../services/apiLocations";
import Coordinates from "../../interfaces/Coordinates";
import { useState } from "react";

export function useGeocoding(coordinates: Coordinates | null = null) {
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState<Coordinates | null | unknown>(
    coordinates
  );
  const [error, setError] = useState<Error | null>(null);

  function getLocation(coordinates: Coordinates | null) {
    if (coordinates !== null) {
      setIsLoading(true);
      const {
        // isLoading: isLoadingQuery,
        data,
        error,
      } = useQuery({
        queryKey: ["location"],
        queryFn: () => fetchLocation(coordinates),
      });
      setLocation(data);
      setError(error);
      setIsLoading(false);
    }
  }
  // const {
  //   isLoading,
  //   data: location,
  //   error,
  // } = useQuery({
  //   queryKey: ["location"],
  //   queryFn: () => fetchLocation(coordinates.lat, coordinates.lng),
  // });

  return { isLoading, location, error, getLocation };
}
