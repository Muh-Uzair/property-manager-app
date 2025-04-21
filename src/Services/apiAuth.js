import supabase from "../../supabase";

// FUNCTION
export const login = async ({ email, password }) => {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(`Unable to login Error => ${error}`);
  }

  return data;
};

// FUNCTION
export const apiGetCurrentUser = async () => {
  // get the existing session
  const { data: session } = await supabase.auth.getSession();

  // return null if no session
  if (!session.session) {
    return null;
  }

  // if there is a session then get the user
  const {
    data: { user },
    error2,
  } = await supabase.auth.getUser();

  if (error2) {
    throw new Error(`Unable to get the user Error => ${error2}`);
  }

  // and return that user
  return user;
};

// FUNCTION
export const apiLogOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw new Error(`Unable to log out Error => ${error}`);
  }
};

// FUNCTION
export const apiSignUp = async ({ email, password, userName }) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        userName,
      },
    },
  });

  if (error) {
    throw new Error(`Unable to sign up user Error => ${error}`);
  }

  return data;
};

// FUNCTION
export const apiUpdateUser = async (userName) => {
  const { error } = await supabase.auth.updateUser({
    data: { userName },
  });

  if (error) {
    throw new Error(`Unable to update user Error => ${error}`);
  }
};

// FUNCTION
export const useApiSignInTenant = async (propertyId, password) => {
  // 1 : check if any flats  are available for the providedId and password
  const { data: dataFlats, error: errorFlats } = await supabase
    .from("flats")
    .select("id, password")
    .eq("propertyId", propertyId)
    .eq("password", password);

  // 2 : check if any rooms  are available for the providedId and password
  const { data: dataRooms, error: errorRooms } = await supabase
    .from("rooms")
    .select("id, password")
    .eq("propertyId", propertyId)
    .eq("password", password);

  // 2 : check if any shops  are available for the providedId and password
  const { data: dataShops, error: errorShops } = await supabase
    .from("shops")
    .select("id, password")
    .eq("propertyId", propertyId)
    .eq("password", password);

  return {
    flats: { dataFlats, errorFlats },
    rooms: { dataRooms, errorRooms },
    shops: { dataShops, errorShops },
  };
};
