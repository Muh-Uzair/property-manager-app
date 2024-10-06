import supabase from "../../supabase";
import { supabaseUrl } from "../../supabase";

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
    selectedTenantImage,
  } = editFormData;

  // if user provides a new image
  if (selectedTenantImage[0]) {
    // 1 : prepare name of the image
    const imageName = `${selectedTenantImage[0].name}`;

    // 2 : prepare image path
    const imagePath = `${supabaseUrl}/storage/v1/object/public/tenantImages/${imageName}`;

    console.log(imagePath);

    // 3 : upload destructured properties to supabase
    const { data2, error2 } = await supabase
      .from("renters")
      .update({
        name,
        contact_info,
        nationality,
        id_card_number,
        occupation,
        marital_status,
        image: imagePath,
      })
      .eq("id", tenantId)
      .select();

    // 4 : if error in uploading throw it
    if (error2)
      throw new Error(
        `Unable to upload property edit form tenant details ${error?.message}`,
      );

    console.log(data2);

    // 3 : upload image to supabase
    const { data, error } = await supabase.storage
      .from("tenantImages")
      .upload(imageName, selectedTenantImage[0], { upsert: true });

    // 3 : if there was an error uploading image throw it
    if (error) {
      throw new Error(`Unable to upload tenant image ${error?.message}`);
    }

    console.log(data);
  }

  // if the user does not provide a new image
  if (!selectedTenantImage[0]) {
    // 1 : upload destructured properties to supabase
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

    // 2 : if error in uploading throw it
    if (error)
      throw new Error(
        `Unable to upload property edit form tenant details ${error?.message}`,
      );
  }
};

//https://ibtqqypbjddszazggxmp.supabase.co/storage/v1/object/public/tenantImages/tenantImage1.jfif
//https://ibtqqypbjddszazggxmp.supabase.co/storage/v1/object/public/tenantImages/tenantImage3.jfif
