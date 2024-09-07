import supabase from "../../supabase";

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
