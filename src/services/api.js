// const API_URL = import.meta.env.VITE_API_URL || "";

// export async function fetchResultados() {
//   console.log("API_URL =", API_URL);

//   if (!API_URL) {
//     console.log("No existe VITE_API_URL");
//     return null;
//   }

//   try {
//     const res = await fetch(API_URL);

//     console.log("STATUS =", res.status);

//     const data = await res.json();

//     console.log("DATA =", data);

//     if (!Array.isArray(data) || data.length === 0) {
//       throw new Error("Formato incorrecto");
//     }

//     return data;
//   } catch (err) {
//     console.error("ERROR API:", err);
//     return null;
//   }
// }

const API_URL = "https://resultados-end-point.onrender.com/api/resultados";
const CACHE_KEY = "animalitos_results_v1";

// Las primeras 3 loterías que deben aparecer siempre al inicio, en este orden.
const PRIORITY = ["guacharo", "lotto", "granjita"];

function sortLoterias(data) {
  return [...data].sort((a, b) => {
    const ai = PRIORITY.indexOf(a.id);
    const bi = PRIORITY.indexOf(b.id);
    if (ai !== -1 && bi !== -1) return ai - bi;
    if (ai !== -1) return -1;
    if (bi !== -1) return 1;
    return 0; // las demás conservan el orden que devuelve la API
  });
}

export function loadCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveCache(data) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
  } catch (err) {
    console.warn("[animalitos] No se pudo guardar el caché:", err.message);
  }
}

export async function fetchResultados() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();

    if (!Array.isArray(data) || data.length === 0) {
      console.info(
        "[animalitos] La API devolvió [] — se conservan los resultados anteriores.",
      );
      return null;
    }

    const sorted = sortLoterias(data);
    saveCache(sorted);
    return sorted;
  } catch (err) {
    console.warn("[animalitos] Error al contactar la API:", err.message);
    return null;
  }
}
