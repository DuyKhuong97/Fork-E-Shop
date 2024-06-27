// import { useUI } from "@contexts/ui.context";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
import { useMutation } from "react-query";
import { useUI } from "../../../contexts/ui.context";

export interface ProductInputType {
  name: string;
  slug: string;
  image: string;
  list_price: number;
  code: number;
  categories_id: number;
}
async function setProduct(input: ProductInputType) {
  return http.put(API_ENDPOINTS.SET_PRODUCT, input).then((res) => {
    return res;
  });
}
export const useSetProductMutation = () => {
  const { closeModal } = useUI();
  return useMutation((input: ProductInputType) => setProduct(input), {
    onSuccess: (_data) => {
      console.log("Success");
      closeModal();
    },
    onError: (data) => {
      console.log(data, "login error response");
    },
  });
};
