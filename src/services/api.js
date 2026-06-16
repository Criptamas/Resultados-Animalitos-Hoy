const API_URL = import.meta.env.VITE_API_URL || "";

export async function fetchResultados() {
  console.log("API_URL =", API_URL);

  if (!API_URL) {
    console.log("No existe VITE_API_URL");
    return null;
  }

  try {
    const res = await fetch(API_URL);

    console.log("STATUS =", res.status);

    const data = await res.json();

    console.log("DATA =", data);

    if (!Array.isArray(data) || data.length === 0) {
      throw new Error("Formato incorrecto");
    }

    return data;
  } catch (err) {
    console.error("ERROR API:", err);
    return null;
  }
}
