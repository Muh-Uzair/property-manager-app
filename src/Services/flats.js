import supabase from "../../supabase";

export const getAllFlats = async () => {
  console.log("here");
  let { data: flatsData, error } = await supabase.from("flats").select("*");

  if (error) console.log(error);

  console.log(flatsData);

  return flatsData;
};
