import { useState } from "react";
import { getLastPaidMonth } from "../../../utils/helpers";

export function useGetDueMonths(occupiedProperty) {
  const indexLastPaidMonth = getLastPaidMonth(occupiedProperty?.rent_details);
  const indexCurrentMonth = new Date().getMonth();
  const [stOccupiedProperty] = useState(occupiedProperty?.rent_details);
  let dueMonths = stOccupiedProperty?.filter((val, i) => {
    if (i > indexLastPaidMonth && i <= indexCurrentMonth) {
      return val;
    }
  });
  dueMonths = dueMonths?.map((val) => {
    return val.month;
  });

  return dueMonths;
}
