import supabase from "../../supabase";

// FUNCTION
export const uploadAllRooms = async (roomsDataArr) => {
  console.log("upload fn");
  const { error } = await supabase.from("rooms").insert(roomsDataArr).select();

  if (error)
    throw new Error(`Error in uploading all rooms : ${error?.message}`);
};

// FUNCTION
export const deleteAllRooms = async () => {
  const { error } = await supabase.from("rooms").delete().neq("id", -69999);

  if (error)
    throw new Error(`Error in deleting deleting rooms : ${error?.message}`);
};
