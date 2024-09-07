import { useQuery } from "@tanstack/react-query";
import { getTenantDetailRentForm } from "../../../Services/apiRenters";

export function useGetTenantDetailRentForm(renter_id) {
  let { data: dataTenantDetailRentForm, status: statusTenantDetailRentForm } =
    useQuery({
      queryFn: async () => {
        return await getTenantDetailRentForm(renter_id);
      },
      queryKey: ["tenantData", renter_id, "rentForm"],
    });

  return { dataTenantDetailRentForm, statusTenantDetailRentForm };
}
