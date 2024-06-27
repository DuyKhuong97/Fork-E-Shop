// import { useUI } from "@contexts/ui.context";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
import { useMutation } from "react-query";
import { useUI } from "../../../contexts/ui.context";

export interface CategoryInputType {
  name: string;
  slug: string;
  image: string;
}
async function setCategory(input: CategoryInputType) {
  return http.put(API_ENDPOINTS.CATEGORY, input).then((res) => {
    return res;
  });
}
export const useSetCategoryMutation = () => {
  const { closeModal } = useUI();
  return useMutation((input: CategoryInputType) => setCategory(input), {
    onSuccess: (_data) => {
      console.log("Success");
      closeModal();
    },
    onError: (data) => {
      console.log(data, "login error response");
    },
  });
};
