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
export const getAllRooms = async (currPage) => {
  const from = (currPage - 1) * 10;
  const to = currPage * 10 - 1;
  let {
    data: dataRooms,
    error,
    count: totalRooms,
  } = await supabase
    .from("rooms")
    .select("*", { count: "exact" })
    .range(from, to);

  if (error) throw new Error(`Error in fetching all rooms : ${error?.message}`);

  return { dataRooms, totalRooms };
};

// FUNCTION
export const getTotalRoomsQuantity = async () => {
  let { count: totalRoomsQuantity, error } = await supabase
    .from("rooms")
    .select("*", { count: "exact" });

  if (error)
    throw new Error(`Unable to fetch rooms quantity : ${error?.message}`);

  return { totalRoomsQuantity };
};

// FUNCTION
export const getRoomDataOnId = async (roomId) => {
  let { data = {}, error } = await supabase
    .from("rooms")
    .select()
    .eq("id", roomId);

  if (error) throw new Error(`Unable to fetch room data : ${error?.message}`);

  return { data };
};

// FUNCTION
export const getRoomNameOnId = async (roomId) => {
  let { data, error } = await supabase
    .from("rooms")
    .select("room_number")
    .eq("id", roomId);

  if (error) throw new Error(`Unable to fetch room name : ${error.message}`);

  return data;
};

// FUNCTION
export const getAllOccupiedRooms = async () => {
  let { data, error } = await supabase
    .from("rooms")
    .select("room_number , floor , size , rent, renter_id , rent_details")
    .eq("status", "occupied");

  if (error) throw new Error("Unable to get all occupied rooms");

  return data;
};

// FUNCTION
export const payRentRooms = async (rentFormData) => {
  console.log(rentFormData);
  const { error } = await supabase
    .from("rooms")
    .update({ rent_details: "Australia" })
    .eq("id", 1);

  if (error) throw new Error("Unable to pay rent for room");
};
