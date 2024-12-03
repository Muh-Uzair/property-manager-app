import { useQuery } from "@tanstack/react-query";
import { getRenterDetailsOnId } from "../../../../Services/apiRenters";

export const useGetRenterDetailsOnId = (renterId) => {
  const { data: dataRenterDetails, status: statusRenterDetails } = useQuery({
    queryFn: () => getRenterDetailsOnId(renterId),
    queryKey: ["renterDetails", renterId],
  });

  return { dataRenterDetails, statusRenterDetails };
};
