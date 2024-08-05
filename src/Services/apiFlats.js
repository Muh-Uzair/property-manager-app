import supabase from "../../supabase";

// FUNCTION
export const uploadAllFlats = async (flatsDataArr) => {
  console.log(flatsDataArr);
  const { data, error } = await supabase
    .from("flats")
    .insert(flatsDataArr)
    .select();

  if (error) {
    throw new Error(error);
  }

  return data;
};

// FUNCTION
export const getAllFlats = async () => {
  let { data: flatsData, error } = await supabase.from("flats").select("*");

  if (error) console.log(error);

  console.log(flatsData);

  return flatsData;
};

// FUNCTION
