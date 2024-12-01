import { prepareRentDetailsArr } from "@/utils/helpers";
import supabase, { supabaseKey, supabaseUrl } from "../../supabase";
import { monthsArr } from "../utils/constants";
import { getTenantOnIdCard } from "./apiRenters";

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
    .gte("id", 3001) // Filter IDs greater than or equal to 3001
    .lte("id", 3016) // Filter IDs less than or equal to 3015
    .order("id", { ascending: true }) // Sort by id in ascending order
    .range(from, to); // Apply pagination

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
    .select("id , flat_number , floor , size , rent , renter_id , rent_details")
    .eq("status", "occupied")
    .order("id", { ascending: true });

  if (error)
    throw new Error(`Unable to get all occupied flats ${error.message}`);

  return data;
};

// FUNCTION
export const payRentFlats = async (rentFormData = {}) => {
  const flatNumber = rentFormData?.rfPropertyNumber?.slice(5).trim();
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
    .from("flats")
    .update({ rent_details: newRentDetails })
    .eq("flat_number", flatNumber)
    .select();

  if (error) throw new Error("Unable to pay rent for flat");
};

// FUNCTION
export const getFlatEditData = async (flatId) => {
  let { data, error } = await supabase
    .from("flats")
    .select("floor , size , status , rent , image , renter_id")
    .eq("id", flatId);

  if (error) throw new Error("Error fetching flat data for edit form");

  return data;
};

// FUNCTION
export const uploadFlatEditDetails = async (editFormData, flatId) => {
  // 1 :  destructure the necessary things out
  const { floor, size, status, rent, selectedPropertyImage } = editFormData;

  // 2 : DIVIDER if the user upload a form with a new image
  if (selectedPropertyImage[0] !== undefined && selectedPropertyImage[0]) {
    // 1 : prepare image name
    const imageName = `${selectedPropertyImage[0]?.name}`;

    // 2 : prepare image path
    const imagePath = `${supabaseUrl}/storage/v1/object/public/flatsImages/${imageName}`;

    // 3 : upload textual data to supabase tables
    const { error } = await supabase
      .from("flats")
      .update({
        floor,
        size,
        status,
        rent,
        image: imagePath,
      })
      .eq("id", Number(flatId))
      .select();

    // 3 : throw error if any
    if (error)
      throw new Error(
        `Unable to upload property edit form flat details ${error?.message}`,
      );

    // 4 : if everything above were successful than upload the image to supabase
    const { error2 } = await supabase.storage
      .from("flatsImages")
      .upload(imageName, selectedPropertyImage[0], {
        upsert: true,
      });

    if (error2)
      throw new Error(
        `Unable to upload property edit form property image ${error2?.message}`,
      );
  }

  // 3 : DIVIDER if the user upload form with out property image
  else {
    // 1 : upload it supabase
    const { error } = await supabase
      .from("flats")
      .update({
        floor,
        size,
        status,
        rent,
      })
      .eq("id", Number(flatId))
      .select();

    // 3 : throw error if any
    if (error)
      throw new Error(
        `Unable to upload property edit form tenant details ${error?.message}`,
      );
  }
};

// FUNCTION
export const getAllOccupiedFlatNumbers = async () => {
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    const jwtToken = session?.access_token;

    // 1 : receive the response
    const res = await fetch(
      "https://ibtqqypbjddszazggxmp.supabase.co/rest/v1/flats?select=id,flat_number,renter_id,image&status=eq.occupied&id=gte.3001&id=lte.3016&order=id.asc",
      {
        method: "GET",
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${jwtToken}`,
        },
      },
    );

    // 2 : unpack the response
    const data = await res.json();

    // 3 : return the data
    return data;
  } catch (error) {
    // 4 : catch and throw errors if any
    throw new Error(`Unable to fetch occupied flat numbers ${error.message}`);
  }
};

// FUNCTION
export const apiLeaveFlat = async (flatId) => {
  const { error } = await supabase
    .from("flats")
    .update({ status: "unoccupied", renter_id: null })
    .eq("id", flatId)
    .select();

  if (error) throw new Error(`Unable to leave flat ${flatId} ${error.message}`);
};

//FUNCTION
export const apiGetFlatDataOnTenantId = async (tenantId) => {
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    const jwtToken = session?.access_token;

    // 1 : fetching
    const response = await fetch(
      `${supabaseUrl}/rest/v1/flats?renter_id=eq.${tenantId}&select=*`,
      {
        method: "GET",
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${jwtToken}`,
        },
      },
    );

    // 2 : if error than throw it
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(
        `Unable to get flat on tenant id ${response.status} Error message => ${errorMessage}`,
      );
    }

    // 3 : parse the json received
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(
      `Unable to get flat on tenant id Error message => ${error.message}`,
    );
  }
};

// FUNCTION
export const apiGetAllUnoccupiedFlats = async () => {
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    const jwtToken = session?.access_token;

    const response = await fetch(
      `${supabaseUrl}/rest/v1/flats?status=eq.unoccupied&id=gte.3001&id=lte.3016&order=id.asc&select=*`,
      {
        method: "GET",
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${jwtToken}`,
        },
      },
    );

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(
        `Unable to fetch all unoccupied flats Error => ${errorMessage}`,
      );
    }

    const responseText = await response.text();

    const data = JSON.parse(responseText);

    return data;
  } catch (error) {
    throw new Error(
      `Unable to fetch all unoccupied flats Error => ${error.message}`,
    );
  }
};

// FUNCTION
export const admissionFlat = async (newTenantData, propertyId) => {
  const tenantId = await getTenantOnIdCard(newTenantData?.idCard);

  const rent_details = prepareRentDetailsArr();

  // Only proceed with the update if tenantId is a valid number greater than zero
  if (tenantId >= 0 || tenantId) {
    const { data, error } = await supabase
      .from("flats")
      .update({ status: "occupied", renter_id: Number(tenantId), rent_details })
      .eq("id", propertyId)
      .select();

    if (error) {
      throw new Error(`Unable to admit tenant in flat Error => ${error}`);
    }

    return data;
  } else {
    throw new Error("Invalid tenant ID. Admission cannot proceed.");
  }
};

// FUNCTION
export const getAllFlatsForHome = async () => {
  let { data, error } = await supabase
    .from("flats")
    .select("id,flat_number, status , renter_id , image ")
    .gte("id", 3001)
    .lte("id", 3016)
    .order("id", { ascending: true });

  if (error) {
    throw new Error(`Unable to get flats for home page Error => ${error}`);
  }

  return data;
};

// FUNCTION
export const getAllFlatsQt = async () => {
  const { data, error } = await supabase.from("flats").select("id");

  if (error) {
    throw new Error(`Unable to get flats quantity ${error}`);
  }

  return data;
};

// FUNCTION
export const getAllOccupiedFlatsQt = async () => {
  const { data, error } = await supabase
    .from("flats")
    .select("id")
    .eq("status", "occupied");

  if (error) {
    throw new Error(`Unable to get occupied flats quantity ${error}`);
  }

  return data;
};
