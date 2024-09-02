import supabase from "./supabase";

export async function getCloth(gender: boolean | null) {
  const { data, error } = await supabase
    .from("cloth")
    .select("*")
    .eq("gender", gender ? "girl" : "boy");

  if (error) {
    console.log(error);
    throw new Error("Cloth cannot be loaded");
  }

  return data;
}
