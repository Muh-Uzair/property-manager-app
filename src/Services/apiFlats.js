import supabase from "../../supabase";
import { monthsArr } from "../utils/constants";

// FUNCTION
export const uploadAllFlats = async (flatsDataArr) => {
  const { error } = await supabase.from("flats").insert(flatsDataArr).select();

  if (error)
    throw new Error(`Error in uploading all flats : ${error?.message}`);
};

// FUNCTION
export const deleteAllFlats = async () => {
  const { error } = await supabase.from("flats").delete().neq("id", -69999);

  if (error) throw new Error(`Error in deleting all flats : ${error?.message}`);
};

// FUNCTION
export const getAllFlats = async (currPage) => {
  // VARIABLES
  const from = (currPage - 1) * 10;
  const to = currPage * 10 - 1;

  let {
    data: dataFlats,
    error,
    count: totalFlats,
  } = await supabase
    .from("flats")
    .select("*", { count: "exact" })
    .range(from, to);

  if (error) throw new Error(`Error in fetching all flats : ${error?.message}`);

  return { dataFlats, totalFlats };
};

// FUNCTION
export const getTotalFlatsQuantity = async () => {
  let { count: totalFlatsQuantity, error } = await supabase
    .from("flats")
    .select("*", { count: "exact" });

  if (error)
    throw new Error(`Unable to fetch flats quantity : ${error?.message}`);

  return { totalFlatsQuantity };
};

// FUNCTION
export const getFlatDataOnId = async (flatId) => {
  let { data, error } = await supabase.from("flats").select().eq("id", flatId);

  if (error) throw new Error(`Unable to fetch flat data : ${error?.message}`);

  return { data };
};

// FUNCTION
export const getFlatNameOnId = async (flatId) => {
  let { data, error } = await supabase
    .from("flats")
    .select("flat_number")
    .eq("id", flatId);

  if (error) throw new Error(`Unable to fetch flat name : ${error.message}`);

  return data;
};

// FUNCTION
export const getAllOccupiedFlats = async () => {
  let { data, error } = await supabase
    .from("flats")
    .select("flat_number , floor , size , rent , renter_id , rent_details")
    .eq("status", "occupied");

  if (error) throw new Error("Unable to get all occupied flats");

  return data;
};

// FUNCTION
export const payRentFlats = async (rentFormData = {}) => {
  const flatNumber = rentFormData?.rfPropertyNumber?.slice(5).trim();
  const lastRentPaid = monthsArr.indexOf(
    `${rentFormData?.rfRentLastMonthPaid}`.toLowerCase(),
  );
  const currentMonth = monthsArr.indexOf(
    `${rentFormData?.rfRentCurrentMonth}`.toLocaleLowerCase(),
  );

  const newRentDetails = [];
  for (let i = 0; i < monthsArr?.length; i++) {
    if (i > lastRentPaid && i <= currentMonth) {
      if (rentFormData?.[`rfPaymentReceived${monthsArr[i]}`] === "true") {
        newRentDetails.push({ month: monthsArr[i], paid: true });
      } else {
        newRentDetails.push({ month: monthsArr[i], paid: false });
      }
      continue;
    } else if (i <= lastRentPaid) {
      newRentDetails.push({ month: monthsArr[i], paid: true });
      continue;
    } else {
      newRentDetails.push({ month: monthsArr[i], paid: false });
    }
  }

  const { error } = await supabase
    .from("flats")
    .update({ rent_details: newRentDetails })
    .eq("flat_number", flatNumber)
    .select();

  if (error) throw new Error("Unable to pay rent for flat");
};

// FUNCTION
export const getFlatEditData = async (flatId) => {
  let { data, error } = await supabase
    .from("flats")
    .select("floor , size , status , rent , image , renter_id")
    .eq("id", flatId);

  if (error) throw new Error("Error fetching flat data for edit form");

  return data;
};

// FUNCTION
export const uploadFlatEditDetails = async (editFormData, flatId) => {
  console.log(editFormData);
  // 1 :  destructure the necessary things out
  const { floor, size, status, rent } = editFormData;

  // 2 : upload it supabase
  const { data, error } = await supabase
    .from("renters")
    .update({
      floor,
      size,
      status,
      rent,
    })
    .eq("id", flatId)
    .select();

  if (error)
    throw new Error(
      `Unable to upload property edit form tenant details ${error?.message}`,
    );

  return data;
};
