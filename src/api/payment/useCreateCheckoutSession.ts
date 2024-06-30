import { createAxios } from "@/api/base/createAxios";
import { redirect } from "next/navigation";

const useCreateCheckoutSession = () => {
  return async (input: {
    priceId: string,
    successUrl: string,
    cancelUrl: string
  }) => {
    try {
      const response = await createAxios().post<{id: string, url: string}>(
        "/checkout/sessions",
        JSON.stringify(input)
      );

      return response.data;
    } catch (error) {
      console.error('Failed to create checkout session', error);
      throw error;
    }
  };
};

export default useCreateCheckoutSession;