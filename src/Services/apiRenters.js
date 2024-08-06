import supabase from "../../supabase";

// FUNCTION
export const uploadAllRenters = async (rentersDataArr) => {
  const { error } = await supabase
    .from("renters")
    .insert(rentersDataArr)
    .select();

  if (error)
    throw new Error(`Error in uploading all renters : ${error?.message}`);
};

// FUNCTION
export const deleteAllRenters = async () => {
  const { error } = await supabase.from("renters").delete().neq("id", -69999);

  if (error)
    throw new Error(`Error in deleting all renters : ${error?.message}`);
};
