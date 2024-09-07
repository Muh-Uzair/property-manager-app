import { monthsArr } from "./constants";

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
export function getDueMonths(lastRentMonth) {
  const lastRentIndex = monthsArr.indexOf(lastRentMonth);
  const currentMonthIndex = new Date().getDate();

  let dueMonths = [];

  monthsArr.forEach((month, i) => {
    if (i > lastRentIndex && i <= currentMonthIndex + 1) {
      dueMonths.push(month);
    }
  });

  return dueMonths;
}
