/*
  Warnings:

  - You are about to alter the column `standard_cost` on the `shop_products` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `list_price` on the `shop_products` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `quantity_per_unit` on the `shop_products` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.

*/
-- AlterTable
ALTER TABLE "shop_products" ALTER COLUMN "standard_cost" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "list_price" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "quantity_per_unit" SET DATA TYPE DOUBLE PRECISION;
