import { useUI } from "@contexts/ui.context";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
import Cookies from "js-cookie";
import Router from "next/router";
import { useMutation } from "react-query";

export interface LoginInputType {
  email: string;
  password: string;
  remember_me: boolean;
}
async function login(input: LoginInputType) {
  return http.post(API_ENDPOINTS.LOGIN, input).then((res) => {
    return {
      name: res.data.name,
      accessToken: res.data.access_token,
      expiredAt: res.data.expired_at,
    };
  });
}
export const useLoginMutation = () => {
  const { authorize, closeModal } = useUI();
  return useMutation((input: LoginInputType) => login(input), {
    onSuccess: (data) => {
      Cookies.set("auth_token", data.accessToken);
      authorize();
      closeModal();
      Router.push(`/admin`);
    },
    onError: (data) => {
      console.log(data, "login error response");
    },
  });
};
