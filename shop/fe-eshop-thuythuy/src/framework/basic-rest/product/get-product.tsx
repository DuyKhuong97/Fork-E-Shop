import { Product } from "@framework/types";
import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";

export const fetchProduct = async (product_code: string) => {
  const { data } = await http.post(API_ENDPOINTS.PRODUCT, {
    product_code: product_code,
  });
  return data;
};
export const useProductQuery = (product_code: string) => {
  return useQuery<Product, Error>([API_ENDPOINTS.PRODUCT, product_code], () =>
    fetchProduct(product_code)
  );
};
