import supabase from "../../supabase";

// FUNCTION
export const uploadAllShops = async (shopsDataArr) => {
  const { error } = await supabase.from("shops").insert(shopsDataArr).select();

  if (error)
    throw new Error(`Error in uploading all shops : ${error?.message}`);
};

// FUNCTION
export const deleteAllShops = async () => {
  const { error } = await supabase.from("shops").delete().neq("id", -69999);

  if (error) throw new Error(`Error in deleting all shops : ${error?.message}`);
};