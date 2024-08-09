import { useQuery } from "@tanstack/react-query";
import { getRenterOnID } from "../../Services/apiRenters";

export const useGetRenterOnID = (renter_id) => {
  const { data: dataRenter, status: statusRenter } = useQuery({
    queryFn: async () => {
      return await getRenterOnID(renter_id);
    },
    queryKey: ["renterData", renter_id],
  });

  return { dataRenter, statusRenter };
};
