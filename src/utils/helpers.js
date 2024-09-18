// FUNCTION
export const calculateTotalPages = (totalProperty) => {
  return Math.ceil(totalProperty / 10);
};

// FUNCTION
export function calculateDues(lastRentMonth, rent) {
  const currentMonth = new Date().getMonth();
  const dues = (currentMonth - lastRentMonth) * Number(rent);

  return dues;
}

// FUNCTION
export function getLastPaidMonth(rentDetailsArr = []) {
  let lastMonthPaid = -1;
  for (let i = 0; i < rentDetailsArr?.length; i++) {
    if (rentDetailsArr[i].paid === true) {
      lastMonthPaid += 1;
    }
  }

  return lastMonthPaid;
}

// FUNCTION
export function helperUpdateAmountReceived(
  e,
  setAmountReceived,
  occupiedProperty,
  stOccupiedProperty,
  setStOccupiedProperty,
) {
  let paid = e.target.value === "true" ? false : true;

  // if the user checks the box , so user pays rent , so make that month paid
  if (paid) {
    setAmountReceived(
      (amountReceived) => (amountReceived += occupiedProperty?.rent),
    );

    let newStOccupiedProperty = [];
    let flag = true;
    for (let i = 0; i < stOccupiedProperty?.length; i++) {
      if (
        flag === true &&
        (stOccupiedProperty[i].paid === null ||
          stOccupiedProperty[i].paid === false)
      ) {
        newStOccupiedProperty.push({ ...stOccupiedProperty[i], paid: true });
        flag = false;
        continue;
      } else {
        newStOccupiedProperty.push({ ...stOccupiedProperty[i] });
        continue;
      }
    }
    setStOccupiedProperty(newStOccupiedProperty);
  } else if (!paid) {
    // but if user unchecks the checkbox so remove that moth from paid
    setAmountReceived(
      (amountReceived) => (amountReceived -= occupiedProperty?.rent),
    );

    let newStOccupiedProperty = [];
    let flag = true;
    for (let i = stOccupiedProperty.length - 1; i >= 0; i--) {
      if (flag === true && stOccupiedProperty[i].paid === true) {
        newStOccupiedProperty.push({ ...stOccupiedProperty[i], paid: false });
        flag = false;
        continue;
      } else {
        newStOccupiedProperty.push({ ...stOccupiedProperty[i] });
        continue;
      }
    }

    newStOccupiedProperty = newStOccupiedProperty.reverse();

    setStOccupiedProperty(newStOccupiedProperty);
  }
}
