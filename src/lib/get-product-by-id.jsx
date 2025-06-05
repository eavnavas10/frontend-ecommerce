import { STRAPI_HOST, query } from "./strapi";

export async function getProductById(id) {
  return query(
    `products?filters[id][$eq]=${id}&fields[0]=title&fields[1]=description&fields[2]=oldPrice&fields[3]=price&fields[4]=offer&fields[5]=qty&fields[6]=gender&populate[categories][fields][0]=title&populate[sizes][fields][0]=size&populate[images][fields][0]=url`
  )
    .then((res) => res.json())
    .then((data) => {
      const item = data.data?.[0];
      if (!item) return null;

      const firstImage = item.images?.[0];
      const imageUrl =
        firstImage?.formats?.small?.url || firstImage?.url || "";

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
}
