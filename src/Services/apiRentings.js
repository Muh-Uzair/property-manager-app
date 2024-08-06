import supabase from "../../supabase";

// FUNCTION
export const uploadAllRentings = async (allRentingsDataArr) => {
  const { error } = await supabase
    .from("allRentings")
    .insert(allRentingsDataArr)
    .select();

  if (error)
    throw new Error(`Error in uploading all rentings : ${error?.message}`);
};

// FUNCTION
export const deleteAllRentings = async () => {
  const { error } = await supabase
    .from("allRentings")
    .delete()
    .neq("id", -69999);

  if (error)
    throw new Error(`Error in deleting all rentings : ${error?.message}`);
};
