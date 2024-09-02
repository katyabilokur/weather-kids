import { useQuery } from "@tanstack/react-query";
import { getCloth } from "../services/apiCloth";

export function useCloth(gender: boolean | null) {
  const {
    isLoading,
    data: clothData,
    error,
  } = useQuery({
    queryKey: ["cloth"],
    queryFn: () => getCloth(gender),
  });

  return { isLoading, clothData, error };
}
