import { prisma } from "../../../../../server/db/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function getFeatureProducts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  switch (method) {
    case "GET":
      const products = await prisma.shopProducts.findMany({
        where: {
          is_featured: true,
        },
      });
      res.status(200).json(products);
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
