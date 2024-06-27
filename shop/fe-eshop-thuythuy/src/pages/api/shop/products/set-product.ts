// import { prisma } from "../../../server/db/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../../server/db/client";

export default async function setProduct(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const product = req.body;

  switch (method) {
    case "PUT":
      try {
        const newCategoty = await prisma.shopProducts.create({
          data: {
            product_code: product.code,
            product_name: product.name,
            list_price: product.list_price,
            categories_id: product.categories_id,
            supplier_id: 1,
            slug: product.slug,
            image: product.image,
          },
          select: {
            createdAt: true,
          },
        });
        if (newCategoty) {
          res.status(200).json({
            errorCode: 0,
            message: "Successfully created !",
          });
        }
      } catch (error) {
        res.status(400).json({
          errorCode: 1,
          message: `error: ${error}`,
        });
      }
      break;

    case "DELETE":
      try {
        const deleteCategoryById = await prisma.shopProducts.delete({
          where: {
            id: Number(product.id),
          },
        });
        if (deleteCategoryById) {
          res.status(200).json({
            errorCode: 0,
            message: "Successfully deleted !",
          });
        }
      } catch (error) {
        res.status(400).json({
          errorCode: 2,
          message: `error: ${error}`,
        });
      }
      break;

    case "POST":
      try {
        const newUpdateCategoty = await prisma.shopProducts.update({
          where: {
            id: Number(product.id),
          },
          data: {
            product_code: product.code,
            product_name: product.name,
            list_price: product.list_price,
            categories_id: product.categories_id,
            supplier_id: 1,
            slug: product.slug,
            image: product.image,
          },
          select: {
            updatedAt: true,
          },
        });
        if (newUpdateCategoty) {
          res.status(200).json({
            errorCode: 0,
            message: "Successfully updated !",
          });
        }
      } catch (error) {
        res.status(400).json({
          errorCode: 3,
          message: `error: ${error}`,
        });
      }
      break;

    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
