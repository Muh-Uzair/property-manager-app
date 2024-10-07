import supabase, { supabaseUrl } from "../../supabase";
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
    .gte("id", 3001) // Filter IDs greater than or equal to 3001
    .lte("id", 3016) // Filter IDs less than or equal to 3015
    .order("id", { ascending: true }) // Sort by id in ascending order
    .range(from, to); // Apply pagination

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
  // 1 :  destructure the necessary things out
  const { floor, size, status, rent, selectedPropertyImage } = editFormData;

  // 2 : DIVIDER if the user upload a form with a new image
  if (selectedPropertyImage[0] !== undefined && selectedPropertyImage[0]) {
    // 1 : prepare image name
    const imageName = `${selectedPropertyImage[0]?.name}`;

    // 2 : prepare image path
    const imagePath = `${supabaseUrl}/storage/v1/object/public/flatsImages/${imageName}`;

    // 3 : upload textual data to supabase tables
    const { error } = await supabase
      .from("flats")
      .update({
        floor,
        size,
        status,
        rent,
        image: imagePath,
      })
      .eq("id", Number(flatId))
      .select();

    // 3 : throw error if any
    if (error)
      throw new Error(
        `Unable to upload property edit form flat details ${error?.message}`,
      );

    // 4 : if everything above were successful than upload the image to supabase
    const { error2 } = await supabase.storage
      .from("flatsImages")
      .upload(imageName, selectedPropertyImage[0], {
        upsert: true,
      });

    if (error2)
      throw new Error(
        `Unable to upload property edit form property image ${error2?.message}`,
      );
  }

  // 3 : DIVIDER if the user upload form with out property image
  else {
    // 1 : upload it supabase
    const { error } = await supabase
      .from("flats")
      .update({
        floor,
        size,
        status,
        rent,
      })
      .eq("id", Number(flatId))
      .select();

    // 3 : throw error if any
    if (error)
      throw new Error(
        `Unable to upload property edit form tenant details ${error?.message}`,
      );
  }
};

//https://ibtqqypbjddszazggxmp.supabase.co/storage/v1/object/public/flatsImages/flatsImg1.jfif
