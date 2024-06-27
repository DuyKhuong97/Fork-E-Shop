import { prisma } from "../../../../../server/db/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function getProductById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const body = req.body;
  switch (method) {
    case "POST":
      const products = await prisma.shopProducts.findUnique({
        where: {
          product_code: Number(body.product_code),
        },
      });
      res.status(200).json(products);
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
