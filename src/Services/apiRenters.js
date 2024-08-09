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

// FUNCTION
export const getRenterOnID = async (renter_id) => {
  const { data: dataRenter, error } = await supabase
    .from("renters")
    .select("name")
    .eq("id", renter_id);

  if (error) throw new Error("Unable to get renter based on id");

  const { name: renterName } = dataRenter[0];

  return renterName;
};
