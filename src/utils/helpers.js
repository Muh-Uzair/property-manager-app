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
  const lastRentIndex = lastRentMonth;
  const currentMonthIndex = new Date().getDate();

  let dueMonths = [];

  monthsArr.forEach((month, i) => {
    if (i > lastRentIndex && i <= currentMonthIndex + 1) {
      dueMonths.push(month);
    }
  });

  return dueMonths;
}

// FUNCTION
export function getLastPaidMonth(rentDetailsArr) {
  let lastMonthPaid = -1;
  for (let i = 0; i < rentDetailsArr.length; i++) {
    if (rentDetailsArr[i].paid === true) {
      lastMonthPaid += 1;
    }
  }

  return lastMonthPaid;
}
