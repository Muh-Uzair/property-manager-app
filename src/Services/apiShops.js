import supabase from "../../supabase";

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
