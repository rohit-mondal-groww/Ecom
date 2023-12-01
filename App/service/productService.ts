const API_URL_STRINGS = {
  getAllProductsApiUrl: 'https://dummyjson.com/products',
  getProductDetailsApiUrl: 'https://dummyjson.com/products/{id}',
};

const getAllProductsApi = () => {
  fetch(API_URL_STRINGS.getAllProductsApiUrl);
};

const getProductDetailsApi = (id: string) => {
  const newApiUrlString = API_URL_STRINGS.getProductDetailsApiUrl.replace(
    '${id}',
    id,
  );
  fetch(newApiUrlString);
};

export const productService = {getAllProductsApi, getProductDetailsApi};
