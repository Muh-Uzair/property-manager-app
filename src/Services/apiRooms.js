import supabase, { supabaseKey } from "../../supabase";
import { monthsArr } from "../utils/constants";

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
    .gte("id", 1001)
    .lte("id", 1010)
    .order("id", { ascending: true })
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
    .select("id , room_number , floor , size , rent, renter_id , rent_details")
    .eq("status", "occupied")
    .order("id", { ascending: true });

  if (error) throw new Error("Unable to get all occupied rooms");

  return data;
};

// FUNCTION
export const payRentRooms = async (rentFormData) => {
  const roomNumber = rentFormData?.rfPropertyNumber?.slice(5).trim();
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
    .from("rooms")
    .update({ rent_details: newRentDetails })
    .eq("room_number", roomNumber)
    .select();

  if (error) throw new Error("Unable to pay rent for room");
};

// FUNCTION
export const getRoomEditData = async (roomId) => {
  let { data, error } = await supabase
    .from("rooms")
    .select("floor , size , status , rent , image , renter_id")
    .eq("id", roomId);

  if (error) throw new Error("Error fetching room data for edit form");

  return data;
};

// FUNCTION
export const uploadRoomEditDetails = async (editFormData, roomId) => {
  // 1 :  destructure the necessary things out
  const { floor, size, status, rent } = editFormData;

  // 2 : upload it supabase
  const { error } = await supabase
    .from("rooms")
    .update({
      floor,
      size,
      status,
      rent,
    })
    .eq("id", Number(roomId))
    .select();

  // 3 : throw error if any
  if (error)
    throw new Error(
      `Unable to upload property edit form tenant details ${error?.message}`,
    );
};

// FUNCTION
export const getAllOccupiedRoomNumbers = async () => {
  try {
    // 1 : make a fetch call
    const response = await fetch(
      "https://ibtqqypbjddszazggxmp.supabase.co/rest/v1/rooms?select=room_number,renter_id&status=eq.occupied&id=gte.1001&id=lte.1010&order=id.asc",
      {
        method: "GET",
        headers: {
          apiKey: `${supabaseKey}`,
          Authorization: `Bearer ${supabaseKey}`,
        },
      },
    );

    // 2 : unpack the response

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(`Unable to fetch occupied room number ${error.message}`);
  }
};
