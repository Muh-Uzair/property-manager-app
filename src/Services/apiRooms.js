import supabase from "../../supabase";

// FUNCTION
export const uploadAllRooms = async (roomsDataArr) => {
  const { error } = await supabase.from("rooms").insert(roomsDataArr).select();

  if (error)
    throw new Error(`Error in uploading all rooms : ${error?.message}`);
};

// FUNCTION
export const deleteAllRooms = async () => {
  const { error } = await supabase.from("rooms").delete().neq("id", -69999);

  if (error) throw new Error(`Error in deleting all rooms : ${error?.message}`);
};

// FUNCTION
export const getAllRooms = async () => {
  let {
    data: dataRooms,
    error,
    count: totalRooms,
  } = await supabase.from("rooms").select("*", { count: "exact" });

  if (error) throw new Error(`Error in fetching all rooms : ${error?.message}`);

  return { dataRooms, totalRooms };
};
