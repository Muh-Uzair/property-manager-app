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
export const getTotalTenantsQuantity = async () => {
  let { count: totalTenantsQuantity, error } = await supabase
    .from("renters")
    .select("*", { count: "exact" });

  if (error)
    throw new Error(`Unable to fetch flats quantity : ${error?.message}`);

  return { totalTenantsQuantity };
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
    const {
      data: { session },
    } = await supabase.auth.getSession();
    const jwtToken = session?.access_token;

    const response = await fetch(
      "https://ibtqqypbjddszazggxmp.supabase.co/rest/v1/renters?select=id,name,rent_property",
      {
        method: "GET",
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${jwtToken}`,
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
    const {
      data: { session },
    } = await supabase.auth.getSession();
    const jwtToken = session?.access_token;

    const response = await fetch(
      `${supabaseUrl}/rest/v1/renters?id=eq.${tenantId}`,
      {
        method: "DELETE",
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${jwtToken}`,
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

export const getTenantOnIdCard = async (tenantIdCard) => {
  if (!tenantIdCard) {
    throw new Error("Tenant ID card number is required.");
  }

  let { data, error } = await supabase
    .from("renters") // Update to the correct table name if needed
    .select("id")
    .eq("id_card_number", Number(tenantIdCard));

  if (error) {
    throw new Error(
      `Unable to get tenant on ID card. Error => ${error.message}`,
    );
  }

  return data[0]?.id;
};

// FUNCTION
export const checkTenantNewOld = async (tenantIdCard) => {
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    const jwtToken = session?.access_token;

    const response = await fetch(
      `${supabaseUrl}//rest/v1/renters?id_card_number=eq.${tenantIdCard}&select=*`,
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
        `Unable tp fetch a tenant by id card Error => ${errorMessage}`,
      );
    }

    const responseText = await response.text();

    const data = JSON.parse(responseText);

    if (data.length > 0) {
      return { newTenant: false, data: data?.[0] };
    }
  } catch (err) {
    throw new Error(`Unable to fetch a tenant by id card Error => ${err}`);
  }

  return { newTenant: true, data: [] };
};

// FUNCTION
export const admitNewTenant = async (
  newTenantData = {},
  propertyType,
  propertyId,
) => {
  // prepare the date of rent
  const currentDate = new Date();
  const renter_from = `${currentDate.getDate()}, ${currentDate.toLocaleString("en-GB", { month: "short" })} ${currentDate.getFullYear()}`;

  // prepare the image path only if it exists
  let imageName = "";
  let imagePath = null;
  if (newTenantData?.tenantImage) {
    imageName =
      `${Math.random()}-${newTenantData?.tenantImage[0]?.name}`.replaceAll(
        "/",
        "",
      );
    imagePath = `${supabaseUrl}/storage/v1/object/public/tenantImages/${imageName}`;
  }

  // preparing the object to upload
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
    image: imagePath,
    nationality: newTenantData?.selectedCountryName,
  });

  // uploading the actual data
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

    if (newTenantData?.tenantImage) {
      const { tenantImageError } = await supabase.storage
        .from("tenantImages")
        .upload(imageName, newTenantData?.tenantImage[0], {
          upsert: false,
        });

      if (tenantImageError) {
        throw new Error("Unable to upload tenant image");
      }
    }
  } catch (err) {
    throw new Error(`Unable to upload new tenant data Error => ${err.message}`);
  }
};

// FUNCTION
export const admitExistingTenant = async (
  newTenantData = {},
  propertyType,
  propertyId,
  existingTenantData,
) => {
  // deal with the tenant image
  let imageName = "";
  let imagePath = null;
  if (newTenantData?.tenantImage) {
    imageName =
      `${Math.random()}-${newTenantData?.tenantImage[0]?.name}`.replaceAll(
        "/",
        "",
      );
    imagePath = `${supabaseUrl}/storage/v1/object/public/tenantImages/${imageName}`;
  }

  // make the object to upload
  const dataToUpload = new Object({
    contact_info: newTenantData?.contact,
    image: newTenantData?.tenantImage ? imagePath : existingTenantData?.image,
    marital_status:
      newTenantData?.martialStatus === "married" ? "married" : "unmarried",
    name: newTenantData?.name,
    nationality: newTenantData?.selectedCountryName,
    occupation: newTenantData?.occupation,
    propertyID: {
      property_id: [
        ...existingTenantData.propertyID.property_id,
        Number(propertyId),
      ],
    },
    rent_property: {
      rent_property: [
        ...existingTenantData.rent_property.rent_property,
        `${propertyType.slice(0, -1)}`,
      ],
    },
  });

  // upload the data
  try {
    const { error } = await supabase
      .from("renters")
      .update(dataToUpload)
      .eq("id", existingTenantData?.id)
      .select();

    if (error) {
      throw new Error(
        `Unable to upload existing tenant data for admissions Error => ${error}`,
      );
    }

    // uploading image to storage
    if (newTenantData?.tenantImage) {
      const { tenantImageError } = await supabase.storage
        .from("tenantImages")
        .upload(imageName, newTenantData?.tenantImage[0], {
          upsert: false,
        });

      if (tenantImageError) {
        throw new Error("Unable to upload tenant image");
      }
    }
  } catch (error) {
    throw new Error(`Unable to admit existing tenant Error => ${error}`);
  }
};

// FUNCTION
export const uploadTenantAdmissionData = async (
  newTenantData = {},
  propertyType,
  propertyId,
) => {
  // check wether the tenant is new or existing
  const { newTenant, data: existingTenantData } = await checkTenantNewOld(
    newTenantData?.idCard,
  );

  if (newTenant) {
    await admitNewTenant(newTenantData, propertyType, propertyId);
  } else {
    await admitExistingTenant(
      newTenantData,
      propertyType,
      propertyId,
      existingTenantData,
    );
  }
};

// FUNCTION
export const getAllTenantsQt = async () => {
  const { data, error } = await supabase.from("renters").select("id");

  if (error) {
    throw new Error(`Unable to get renters quantity ${error}`);
  }

  return data;
};
