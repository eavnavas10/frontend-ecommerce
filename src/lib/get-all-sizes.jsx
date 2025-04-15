import { query } from "./strapi";

export async function getAllSizes() {
  return query("sizes?sort=size%3Aasc")
    .then((response) => response.json())
    .then((data) => {
      if (!data.data || !Array.isArray(data.data)) return [];
      return data.data.map((item) => item.size || "Talla desconocida");
    });
}