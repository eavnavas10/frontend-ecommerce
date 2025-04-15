const STRAPI_HOST = "http://localhost:4000"
const STRAPI_TOKEN = "062453c3365d67828aa10afd979a48a7a2cf3f47cf6c5ff59daf53a08e282be92fbe3672847e00795853081eb4352670377ff07a813c0820c3f3833c76428936dfb2514b0285478adf1c53e7d92f0d109c65ea302450eff76d7d97cb02d9c8471a37d08a2ac29a8b88f16419ac5965fc602caaec86345db6f66e2e8b22fb4dfd"

export function query(url) {
    return fetch(`${STRAPI_HOST}/api/${url}`, {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
    });
  }