import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
import { useMutation } from "react-query";
import { Item } from "../../../contexts/cart/cart.utils";
import { loadStripe } from "@stripe/stripe-js";

export interface CheckoutInputType {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
  save: boolean;
  note: string;
}

export interface CheckoutSessionsStripe {
  user: CheckoutInputType;
  lineItems: Item[];
}

const NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: any =
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

async function checkout(input: CheckoutSessionsStripe) {
  return http.post(API_ENDPOINTS.CHECK_OUT, input).then(async (res) => {
    let stripe = await loadStripe(NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    stripe?.redirectToCheckout({
      sessionId: res.data.id,
    });
  });
}
export const useCheckoutMutation = () => {
  return useMutation((input: CheckoutSessionsStripe) => checkout(input), {
    onSuccess: (data) => {
      console.log(data, "Checkout success response");
    },
    onError: (data) => {
      console.log(data, "Checkout error response");
    },
  });
};
