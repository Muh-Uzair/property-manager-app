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
export const getAllFlats = async () => {
  let {
    data: dataFlats,
    error,
    count: totalFlats,
  } = await supabase.from("flats").select("*", { count: "exact" });

  if (error) throw new Error(`Error in fetching all flats : ${error?.message}`);

  return { dataFlats, totalFlats };
};
