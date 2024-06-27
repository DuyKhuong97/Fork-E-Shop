// import { useUI } from "@contexts/ui.context";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
import Cookies from "js-cookie";
import { useMutation } from "react-query";
import { useUI } from "../../../contexts/ui.context";

export interface SignUpInputType {
  email: string;
  password: string;
  name: string;
}
async function signUp(input: SignUpInputType) {
  return http.post(API_ENDPOINTS.REGISTER, input).then((res) => {
    return {
      name: res.data.name,
      accessToken: res.data.access_token,
      expiredAt: res.data.expired_at,
    };
  });
}
export const useSignUpMutation = () => {
  const { authorize, closeModal } = useUI();
  return useMutation((input: SignUpInputType) => signUp(input), {
    onSuccess: (data) => {
      Cookies.set("auth_token", data.accessToken);
      authorize();
      closeModal();
    },
    onError: (data) => {
      console.log(data, "login error response");
    },
  });
}
