import { prisma } from "../../../../../server/db/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function featuredCategories(
  this: any,
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const dataCategory = await prisma.shopCategories.findMany({
          include: {
            ShopProducts: true,
          },
        });
        if (dataCategory) {
          res.status(200).json({ data: dataCategory });
        }
      } catch (error) {
        res.status(400).json({
          errorCode: 1,
          message: `error: ${error}`,
        });
      }
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
