import Coordinates from "../interfaces/Coordinates";

export async function fetchLocation<T>(coordinates: Coordinates): Promise<T> {
  const geo_url = `https://api.geoapify.com/v1/geocode/reverse?lat=${coordinates.lat}&lon=${coordinates.lng}&apiKey=0faacb54d4ce486aa6b33812c2a475e2`;
  const res = await fetch(geo_url);
  let data: Promise<any> | null = null;

  try {
    data = await res.json();
  } catch (err: any) {
    console.log(err.message);
    alert("There was some error while decoding geolocation");
  }

  return data;
}
