import { useQuery } from "@tanstack/react-query";
import { getCloth } from "../services/apiCloth";

export function useCloth(
  minTemp: number,
  maxTemp: number,
  gender: boolean | null,
  precipitation: number
) {
  const {
    isLoading,
    data: clothData,
    error,
  } = useQuery({
    queryKey: ["cloth"],
    queryFn: () => getCloth(minTemp, maxTemp, gender, precipitation),
  });

  return { isLoading, clothData, error };
}
