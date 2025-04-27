import { query, STRAPI_HOST } from "./strapi";

export async function getOffers() {
  return query("products?fields=title&fields=description&fields=oldPrice&fields=price&fields=offer&populate%5Bsizes%5D%5Bfields%5D=size&populate%5Bimages%5D%5Bfields%5D=url&filters%5Boffer%5D%5B%24eq%5D=true")
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
