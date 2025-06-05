import { query, STRAPI_HOST } from "./strapi";

export async function getAllProducts({
  category,
  size,
  gender,
  page = 1,
  pageSize = 25,
} = {}) {
  const params = new URLSearchParams();

  // Campos
  params.append("fields[0]", "title");
  params.append("fields[1]", "description");
  params.append("fields[2]", "oldPrice");
  params.append("fields[3]", "price");
  params.append("fields[4]", "offer");
  params.append("fields[5]", "qty");
  params.append("fields[6]", "gender");

  // Relaciones
  params.append("populate[categories][fields][0]", "title");
  params.append("populate[sizes][fields][0]", "size");
  params.append("populate[images][fields][0]", "url");

  // Filtros
  if (category) {
    params.append("filters[categories][title][$eq]", category);
  }
  if (size) {
    params.append("filters[sizes][size][$eq]", size);
  }
  if (gender) {
    params.append("filters[gender][$eq]", gender);
  }

  // Orden descendente por fecha de publicación
  params.append("sort", "publishedAt:desc");

  // Paginación
  params.append("pagination[page]", page);
  params.append("pagination[pageSize]", pageSize);

  const res = await query(`products?${params.toString()}`);
  const data = await res.json();

  if (!data.data || !Array.isArray(data.data)) return;

  const formattedProducts = data.data.map((item) => {
    const firstImage = item.images?.[0];
    const imageUrl = firstImage?.formats?.small?.url || firstImage?.url || "";

    return {
      id: item.id,
      title: item.title || "Sin título",
      description: item.description || "Sin descripción",
      oldPrice: item.oldPrice || undefined,
      price: item.price || 0,
      offer: item.offer || false,
      qty: item.qty || 0,
      gender: item.gender || "Sin género",
      category: item.categories
        ? item.categories.map((category) => category.title)
        : [],
      sizes: item.sizes ? item.sizes.map((size) => size.size) : [],
      image: imageUrl ? `${STRAPI_HOST}${imageUrl}` : "",
    };
  });

  return {
    products: formattedProducts,
    pagination: data.meta.pagination,
  };
}
