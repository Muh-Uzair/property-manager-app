import { useState } from "react";
import { getLastPaidMonth } from "../../../utils/helpers";

export function useGetDueMonths(occupiedProperty) {
  const indexLastPaidMonth = getLastPaidMonth(occupiedProperty?.rent_details);
  const indexCurrentMonth = new Date().getMonth();
  const [stOccupiedProperty, setStOccupiedProperty] = useState(
    occupiedProperty?.rent_details,
  );
  let dueMonths = stOccupiedProperty?.filter((val, i) => {
    if (i > indexLastPaidMonth && i <= indexCurrentMonth) {
      return val;
    }
  });

  let flag = true; // represents the paid is false for first time
  for (let i = 0; i < dueMonths?.length; i++) {
    if (
      // if you found the fist paid false or null value make only that !disabled
      flag === true &&
      (dueMonths[i].paid === false || dueMonths[i].paid === null)
    ) {
      dueMonths[i] = { ...dueMonths[i], disabled: false };
      flag = false;
      continue;
    }
    if (
      // the rest false or null value make it disabled
      flag === false &&
      (dueMonths[i].paid === false || dueMonths[i].paid === null)
    ) {
      dueMonths[i] = { ...dueMonths[i], disabled: true };
    }
  }
  return { dueMonths, stOccupiedProperty, setStOccupiedProperty };
}
