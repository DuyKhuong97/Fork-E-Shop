import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

export default async function checkoutSessions(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const body = req.body;
  const header = req.headers;
  switch (method) {
    case "POST":
      try {
        // Create Checkout Sessions from body params.
        const params: Stripe.Checkout.SessionCreateParams = {
          submit_type: "pay",
          line_items: body.lineItems.map((item: any) => ({
            price_data: {
              currency: "czk",
              product_data: {
                name: item.name,
                images: [item.images],
              },
              unit_amount: item.price * 100,
            },
            quantity: item.quantity,
          })),
          success_url: `${header.origin}/order`,
          cancel_url: `${header.origin}/checkout`,
          mode: "payment",
        };

        const checkoutSession: Stripe.Checkout.Session =
          await stripe.checkout.sessions.create(params);

        res.status(200).json(checkoutSession);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Internal server error";
        res.status(500).json({ statusCode: 500, message: errorMessage });
      }
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
