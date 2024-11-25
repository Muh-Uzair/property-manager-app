import supabase from "../../supabase";

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
  return user || {};
};
