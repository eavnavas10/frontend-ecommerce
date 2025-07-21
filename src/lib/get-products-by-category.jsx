import { query, STRAPI_HOST } from "./strapi";

export async function getProductsByCategory(categoryId, { page = 1, pageSize = 10 } = {}) {
  const params = new URLSearchParams();

  params.append("filters[categories][id][$eq]", categoryId);
  params.append("sort", "publishedAt:desc");
  params.append("pagination[page]", page);
  params.append("pagination[pageSize]", pageSize);
  params.append("populate[images][fields][0]", "url");
  params.append("fields[0]", "title");
  params.append("fields[1]", "oldPrice");
  params.append("fields[2]", "price");

  const res = await query(`products?${params.toString()}`);
  const data = await res.json();

  if (!data.data || !Array.isArray(data.data)) return [];

  return data.data.map((item) => {
    const firstImage = item.images?.[0];
    const imageUrl = firstImage?.formats?.small?.url || firstImage?.url || "";

    return {
      id: item.id,
      title: item.title || "Sin título",
      oldPrice: item.oldPrice || 0,
      price: item.price || 0,
      image: imageUrl ? `${STRAPI_HOST}${imageUrl}` : "",
    };
  });
}
