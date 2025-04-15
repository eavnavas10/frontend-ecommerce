import { query } from "./strapi";

const STRAPI_HOST = "http://localhost:4000";

export async function getAllProducts() {
  return query("products?fields=title&fields=description&fields=oldPrice&fields=price&fields=offer&populate[sizes][fields]=size&populate[images][fields]=url")
    .then((response) => response.json())
    .then((data) => {
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
          sizes: item.sizes ? item.sizes.map((size) => size.size) : [],
          image: imageUrl ? `${STRAPI_HOST}${imageUrl}` : "",
        };
      });

      return formattedProducts;
    });
}
