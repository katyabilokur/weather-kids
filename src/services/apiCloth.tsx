import supabase from "./supabase";

export async function getCloth(
  minTemp: number,
  maxTemp: number,
  gender: boolean | null,
  precipitation: number
) {
  const rain = precipitation === 0 ? false : true;

  console.log(`min: ${minTemp}, max: ${maxTemp}, prec: ${precipitation}`);

  const { data, error } = await supabase
    .from("cloth")
    .select("url")
    .lte("tempStart", minTemp)
    .gte("tempEnd", maxTemp)
    .eq("gender", gender ? "girl" : "boy")
    .eq("rain", rain);

  if (error) {
    console.log(error);
    throw new Error("Cloth cannot be loaded");
  }

  return data;
}

export async function getRainCloth() {
  const { data, error } = await supabase
    .from("cloth")
    .select("url")
    .eq("rain", true);

  if (error) {
    console.log(error);
    throw new Error("Rain cloth cannot be loaded");
  }

  return data;
}
