const API_URL_STRINGS = {
  allProductsApiUrl: 'https://dummyjson.com/products',
  productDetailsApiUrl: 'https://dummyjson.com/products/{id}',
};

const getAllProductsApi = async () => {
  return fetch(API_URL_STRINGS.allProductsApiUrl).then(res => res.json());
};

const getProductDetailsApi = (id: number) => {
  const newApiUrlString = API_URL_STRINGS.productDetailsApiUrl.replace(
    '{id}',
    id.toString(),
  );
  return fetch(newApiUrlString).then(res => res.json());
};

export const productService = {getAllProductsApi, getProductDetailsApi};
