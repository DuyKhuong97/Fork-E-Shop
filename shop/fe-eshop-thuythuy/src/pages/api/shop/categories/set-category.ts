// import { prisma } from "../../../server/db/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../../server/db/client";

export default async function setCategory(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const category = req.body;

  switch (method) {
    case "PUT":
      try {
        const newCategoty = await prisma.shopCategories.create({
          data: {
            category_name: category.name,
            slug: category.slug,
            image: category.image,
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
        const deleteCategoryById = await prisma.shopCategories.delete({
          where: {
            id: Number(category.id),
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
        const newUpdateCategoty = await prisma.shopCategories.update({
          where: {
            id: Number(category.id),
          },
          data: {
            category_name: category.name,
            slug: category.slug,
            image: category.image,
            description: category.description,
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
