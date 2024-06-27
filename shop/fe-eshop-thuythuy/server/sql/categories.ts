import { Prisma } from "@prisma/client";

export const queryCategories = () => {
  return Prisma.sql`SELECT category_name, slug, image FROM shop_categories`;
};
