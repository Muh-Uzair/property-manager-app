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
  if (!renter_id) return {};

  const { data: dataRenter, error } = await supabase
    .from("renters")
    .select("name")
    .eq("id", renter_id);

  if (error) throw new Error("Unable to get renter based on id");

  const { name: renterName } = dataRenter[0];

  return renterName;
};

// FUNCTION
export const getRenterDetailsOnId = async (renterId) => {
  if (!renterId) return {};

  const { data, error } = await supabase
    .from("renters")
    .select(
      "name, contact_info , nationality , id_card_number , renter_from , occupation , marital_status , rent_property , propertyID , image ",
    )
    .eq("id", renterId);

  if (error)
    throw new Error(`Unable to fetch renter details: ${error?.message}`);

  return { data };
};

// FUNCTION
export const getTenantDetailRentForm = async (renterId) => {
  if (!renterId) return {};

  const { data, error } = await supabase
    .from("renters")
    .select("name, contact_info , nationality , id_card_number , occupation ")
    .eq("id", renterId);

  if (error)
    throw new Error(`Unable to fetch renter details: ${error?.message}`);

  return { data };
};

// FUNCTION
export const getTenantDataPropertyEdit = async (renterID) => {
  const { data, error } = await supabase
    .from("renters")
    .select(
      "name, contact_info , nationality , id_card_number , occupation, marital_status , image ",
    )
    .eq("id", renterID);

  if (error)
    throw new Error(`Unable to fetch renter details: ${error?.message}`);

  return data;
};

// FUNCTION
export const uploadTenantEditDetails = async (editFormData, tenantId) => {
  // 1 :  destructure the necessary things out
  const {
    name,
    contact_info,
    nationality,
    id_card_number,
    occupation,
    marital_status,
  } = editFormData;

  // 2 : upload it supabase
  const { error } = await supabase
    .from("renters")
    .update({
      name,
      contact_info,
      nationality,
      id_card_number,
      occupation,
      marital_status,
    })
    .eq("id", tenantId)
    .select();

  if (error)
    throw new Error(
      `Unable to upload property edit form tenant details ${error?.message}`,
    );
};
