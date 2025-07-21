import { query } from "./strapi";

export async function getHomeCategoryConfig() {
  const res = await query("HomePage?populate=category1&populate=category2");
  const data = await res.json();

  if (!data.data) return null;

  return {
    category1: data.data.category1,
    category2: data.data.category2,
  };
}
