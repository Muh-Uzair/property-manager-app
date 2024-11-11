import supabase, { supabaseKey } from "../../supabase";
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

    // 3 : upload destructured properties to supabase
    const { error2 } = await supabase
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

    // 3 : upload image to supabase
    const { error } = await supabase.storage
      .from("tenantImages")
      .upload(imageName, selectedTenantImage[0], { upsert: true });

    // 3 : if there was an error uploading image throw it
    if (error) {
      throw new Error(`Unable to upload tenant image ${error?.message}`);
    }
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

// FUNCTION
export const getOccupiedTenantNames = async () => {
  try {
    const response = await fetch(
      "https://ibtqqypbjddszazggxmp.supabase.co/rest/v1/renters?select=id,name,rent_property",
      {
        method: "GET",
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
        },
      },
    );

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(`Unable to fetch renter names: ${error.message}`);
  }
};

// FUNCTION
export const removeTenant = async (tenantId) => {
  try {
    const response = await fetch(
      `${supabaseUrl}/rest/v1/renters?id=eq.${tenantId}`,
      {
        method: "DELETE",
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
        },
      },
    );

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(
        `Unable to remove tenant: ${response.status} - ${errorMessage}`,
      );
    }

    if (response.ok) return true;
  } catch (error) {
    throw new Error(
      `Unable to remove tenant Error message -> ${error.message}`,
    );
  }
};

// FUNCTION
export const admitExistingTenant = async (
  newTenantData = {},
  propertyType,
  propertyId,
) => {
  console.log(newTenantData);
  console.log(propertyType);
  console.log(propertyId);
};

// FUNCTION
export const admitNewTenant = async (
  newTenantData = {},
  propertyType,
  propertyId,
) => {
  console.log(newTenantData);
  const currentDate = new Date();
  const renter_from = `${currentDate.getDate()}, ${currentDate.toLocaleString("en-GB", { month: "short" })} ${currentDate.getFullYear()}`;

  const dataToUpload = new Object({
    name: newTenantData?.name,
    contact_info: newTenantData?.contact,
    id_card_number: newTenantData?.idCard,
    renter_from,
    occupation: newTenantData?.occupation,
    marital_status:
      newTenantData?.martialStatus === "married" ? "married" : "unmarried",
    rent_property: new Object({
      rent_property: [`${propertyType.slice(0, -1)}`],
    }),
    propertyID: new Object({ property_id: [propertyId] }),
    image: newTenantData?.tenantImage,
    nationality: newTenantData?.selectedCountryName,
  });

  console.log(dataToUpload);

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/renters`, {
      method: "POST",
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToUpload),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(
        `Unable to upload new tenant data Error => ${errorMessage}`,
      );
    }
  } catch (err) {
    throw new Error(`Unable to upload new tenant data Error => ${err.message}`);
  }
};

// FUNCTION
export const uploadTenantAdmissionData = async (
  newTenantData = {},
  propertyType,
  propertyId,
) => {
  //name, contact_info, nationality, id_card_number, renter from, occupation, marital_status, rent_property, propertyID, image

  // check wether the tenant is new or existing

  const newTenant = true;

  if (newTenant) {
    admitNewTenant(newTenantData, propertyType, propertyId);
  } else {
    admitExistingTenant(newTenantData, propertyType, propertyId);
  }
};
