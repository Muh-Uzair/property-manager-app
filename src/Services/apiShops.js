import { prepareRentDetailsArr } from "@/utils/helpers";
import supabase, { supabaseKey, supabaseUrl } from "../../supabase";
import { monthsArr } from "../utils/constants";
import { getTenantOnIdCard } from "./apiRenters";

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

// FUNCTION
export const getAllShops = async (currPage) => {
  const from = (currPage - 1) * 10;
  const to = currPage * 10 - 1;
  let {
    data: dataShops,
    error,
    count: totalShops,
  } = await supabase
    .from("shops")
    .select("*", { count: "exact" })
    .gte("id", 2001)
    .lte("id", 2020)
    .order("id", { ascending: true })
    .range(from, to);

  if (error) throw new Error(`Error in fetching all shops : ${error?.message}`);

  return { dataShops, totalShops };
};

// FUNCTION
export const getTotalShopsQuantity = async () => {
  let { count: totalShopsQuantity, error } = await supabase
    .from("shops")
    .select("*", { count: "exact" });

  if (error)
    throw new Error(`Unable to fetch shops quantity : ${error?.message}`);

  return { totalShopsQuantity };
};

// FUNCTION
export const getShopDataOnId = async (shopId) => {
  let { data, error } = await supabase
    .from("shops")
    .select()
    .eq("id", Number(shopId));

  if (error) throw new Error(`Unable to fetch shop data : ${error?.message}`);

  return { data };
};

// FUNCTION
export const getShopNameOnId = async (shopId) => {
  let { data, error } = await supabase
    .from("shops")
    .select("shop_number")
    .eq("id", shopId);

  if (error) throw new Error(`Unable to fetch shop name : ${error.message}`);

  return data;
};

// FUNCTION
export const getAllOccupiedShops = async () => {
  let { data, error } = await supabase
    .from("shops")
    .select("shop_number , floor , size , rent , renter_id , rent_details")
    .eq("status", "occupied")
    .order("id", { ascending: true });

  if (error) throw new Error("Unable to get all occupied shops");

  return data;
};

// FUNCTION
export const payRentShops = async (rentFormData) => {
  const shopNumber = rentFormData?.rfPropertyNumber?.slice(5).trim();
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
    .from("shops")
    .update({ rent_details: newRentDetails })
    .eq("shop_number", shopNumber)
    .select();

  if (error) throw new Error("Unable to pay rent for room");
};

// FUNCTION
export const getShopEditData = async (shopId) => {
  let { data, error } = await supabase
    .from("shops")
    .select("floor , size , status , rent , image , renter_id")
    .eq("id", shopId);

  if (error) throw new Error("Error fetching shop data for edit form");

  return data;
};

// FUNCTION
export const uploadShopEditDetails = async (editFormData, shopId) => {
  // 1 :  destructure the necessary things out
  const { floor, size, status, rent } = editFormData;

  // 2 : upload it supabase
  const { error } = await supabase
    .from("shops")
    .update({
      floor,
      size,
      status,
      rent,
    })
    .eq("id", Number(shopId))
    .select();

  // 3 : throw error if any
  if (error)
    throw new Error(
      `Unable to upload property edit form tenant details ${error?.message}`,
    );
};

// FUNCTION
export const getAllOccupiedShopNumbers = async () => {
  try {
    const response = await fetch(
      "https://ibtqqypbjddszazggxmp.supabase.co/rest/v1/shops?select=id,shop_number,renter_id,image&status=eq.occupied&id=gte.2001&id=lte.2020&order=id.asc",
      {
        method: "GET",
        headers: {
          apiKey: `${supabaseKey}`,
          Authorization: `Bearer ${supabaseKey}`,
        },
      },
    );

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(`Unable to fetch occupied shop numbers ${error.message}`);
  }
};

// FUNCTION
export const apiLeaveShop = async (shopId) => {
  const { error } = await supabase
    .from("shops")
    .update({ status: "unoccupied", renter_id: null })
    .eq("id", shopId)
    .select();

  if (error) throw new Error(`Unable to leave shop ${shopId} ${error.message}`);
};

//FUNCTION
export const apiGetShopDataOnTenantId = async (tenantId) => {
  try {
    // 1 : fetching
    const response = await fetch(
      `${supabaseUrl}/rest/v1/shops?renter_id=eq.${tenantId}&select=*`,
      {
        method: "GET",
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
        },
      },
    );

    // 2 : if error than throw it
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(
        `Unable to get shop data on tenant id ${response.status} Error message => ${errorMessage}`,
      );
    }

    // 3 : parse the json received
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(
      `Unable to get shop data on tenant id Error message => ${error.message}`,
    );
  }
};

// FUNCTION
export const apiGetAllUnoccupiedShops = async () => {
  try {
    const response = await fetch(
      `${supabaseUrl}/rest/v1/shops?status=eq.unoccupied&id=gte.2001&id=lte.2020&order=id.asc&select=*`,
      {
        method: "GET",
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
        },
      },
    );

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(
        `Unable to fetch all unoccupied shops Error => ${errorMessage}`,
      );
    }

    const responseText = await response.text();

    const data = JSON.parse(responseText);

    return data;
  } catch (error) {
    throw new Error(
      `Unable to fetch all unoccupied shops Error => ${error.message}`,
    );
  }
};

// FUNCTION
export const admissionShop = async (newTenantData, propertyId) => {
  const tenantId = await getTenantOnIdCard(newTenantData?.idCard);

  const rent_details = prepareRentDetailsArr();

  if (tenantId >= 0 || tenantId) {
    const { data, error } = await supabase
      .from("shops")
      .update({ status: "occupied", renter_id: Number(tenantId), rent_details })
      .eq("id", propertyId)
      .select();

    if (error) {
      throw new Error(`Unable to admit tenant in shop Error => ${error}`);
    }

    return data;
  }
};

// FUNCTION
export const getAllShopsQt = async () => {
  const { data, error } = await supabase.from("shops").select("id");

  if (error) {
    throw new Error(`Unable to get shops quantity ${error}`);
  }

  return data;
};

// FUNCTION
export const getAllOccupiedShopsQt = async () => {
  const { data, error } = await supabase
    .from("shops")
    .select("id")
    .eq("status", "occupied");

  if (error) {
    throw new Error(`Unable to get occupied shops quantity ${error}`);
  }

  return data;
};

// FUNCTION
export const getAllShopsForHome = async () => {
  let { data, error } = await supabase
    .from("shops")
    .select("id,shop_number, status , renter_id , image")
    .gte("id", 2001)
    .lte("id", 2020)
    .order("id", { ascending: true });

  if (error) {
    throw new Error(`Unable to get shops for home page Error => ${error}`);
  }

  return data;
};
