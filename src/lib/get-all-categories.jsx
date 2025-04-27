import { query } from "./strapi";

const STRAPI_HOST = "http://localhost:4000";

export async function getAllCategories() {
    return query("categories?fields=title&populate[icon][fields]=url&sort=title:asc")
      .then((response) => response.json())
      .then((data) => {
        if (!data.data || !Array.isArray(data.data)) return [];
  
        const formattedCategories = data.data.map((item) => {
          const iconUrl = item.icon?.url || "";
  
          return {
            id: item.id,
            title: item.title || "Sin título",
            image: iconUrl ? `${STRAPI_HOST}${iconUrl}` : "",
          };
        });
  
        return formattedCategories;
      });
  }
  