-- CreateTable
CREATE TABLE "acl_users" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "last_name" TEXT,
    "first_name" TEXT,
    "gender" TEXT,
    "email" TEXT,
    "birthday" TIMESTAMP(3),
    "avatar" TEXT,
    "code" TEXT,
    "job_title" TEXT,
    "department" TEXT,
    "manager_id" INTEGER,
    "phone" TEXT,
    "address1" TEXT,
    "address2" TEXT,
    "city" TEXT,
    "state" TEXT,
    "postal_code" TEXT,
    "country" TEXT,
    "remember_token" TEXT,
    "active_code" TEXT,
    "status" INTEGER,

    CONSTRAINT "acl_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "acl_permissions" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "guard_name" TEXT NOT NULL,
    "display_name" TEXT,

    CONSTRAINT "acl_permissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "acl_roles" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "guard_name" TEXT NOT NULL,
    "display_name" TEXT,

    CONSTRAINT "acl_roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "acl_user_has_permissions" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "permissions_id" INTEGER NOT NULL,

    CONSTRAINT "acl_user_has_permissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "acl_user_has_roles" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "role_id" INTEGER NOT NULL,

    CONSTRAINT "acl_user_has_roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "acl_role_has_permissions" (
    "id" SERIAL NOT NULL,
    "role_id" INTEGER NOT NULL,
    "permissions_id" INTEGER NOT NULL,

    CONSTRAINT "acl_role_has_permissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shop_stores" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "store_code" INTEGER NOT NULL,
    "store_name" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,

    CONSTRAINT "shop_stores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shop_imports" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "shop_stores_id" INTEGER NOT NULL,
    "employee_id" INTEGER NOT NULL,
    "import_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "shop_imports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shop_exports" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "store_id" INTEGER NOT NULL,
    "employee_id" INTEGER NOT NULL,
    "export_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "shop_exports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shop_import_details" (
    "id" SERIAL NOT NULL,
    "import_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    "quantiny" DECIMAL(65,30) NOT NULL,
    "unit_price" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "shop_import_details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shop_exports_details" (
    "id" SERIAL NOT NULL,
    "export_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    "quantiny" DECIMAL(65,30) NOT NULL,
    "unit_price" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "shop_exports_details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shop_products" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "product_code" INTEGER NOT NULL,
    "product_name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "image" TEXT,
    "short_description" TEXT,
    "description" TEXT,
    "standard_cost" DECIMAL(65,30),
    "list_price" DECIMAL(65,30) NOT NULL,
    "quantity_per_unit" DECIMAL(65,30),
    "discontinued" INTEGER,
    "is_featured" BOOLEAN,
    "is_new" BOOLEAN,
    "categories_id" INTEGER NOT NULL,
    "supplier_id" INTEGER NOT NULL,

    CONSTRAINT "shop_products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shop_categories" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "category_code" SERIAL NOT NULL,
    "category_name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,

    CONSTRAINT "shop_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shop_suppliers" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "suppier_code" SERIAL NOT NULL,
    "supplier_name" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,

    CONSTRAINT "shop_suppliers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shop_product_reviews" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "product_id" INTEGER NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "comment" TEXT NOT NULL,

    CONSTRAINT "shop_product_reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shop_product_images" (
    "id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "shop_product_images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shop_product_discounts" (
    "id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "discount_name" TEXT NOT NULL,
    "discount_amount" DECIMAL(65,30) NOT NULL,
    "is_fixed" BOOLEAN NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "shop_product_discounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shop_orders" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "employee_id" INTEGER NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "order_date" TIMESTAMP(3) NOT NULL,
    "shipped_date" TIMESTAMP(3) NOT NULL,
    "ship_name" TEXT,
    "ship_address1" TEXT NOT NULL,
    "ship_address2" TEXT,
    "ship_city" TEXT NOT NULL,
    "ship_state" TEXT NOT NULL,
    "ship_postal_code" TEXT NOT NULL,
    "ship_country" TEXT NOT NULL,
    "shipping_fee" DECIMAL(65,30) NOT NULL,
    "payment_type_id" INTEGER NOT NULL,
    "paid_date" TIMESTAMP(3) NOT NULL,
    "order_status" TEXT NOT NULL,

    CONSTRAINT "shop_orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shop_payment_types" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "payment_code" INTEGER NOT NULL,
    "payment_name" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,

    CONSTRAINT "shop_payment_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shop_customers" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "birthday" TIMESTAMP(3),
    "avatar" TEXT,
    "code" TEXT,
    "company" TEXT,
    "phone" TEXT,
    "billing_address" TEXT,
    "shipping_address" TEXT,
    "city" TEXT,
    "state" TEXT,
    "postal_code" TEXT NOT NULL,
    "country" TEXT,
    "remember_token" TEXT,
    "activate_code" TEXT,
    "status" TEXT,

    CONSTRAINT "shop_customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shop_order_details" (
    "id" SERIAL NOT NULL,
    "order_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    "quantity" DECIMAL(65,30) NOT NULL,
    "unit_price" DECIMAL(65,30) NOT NULL,
    "discount_percentage" DOUBLE PRECISION NOT NULL,
    "discount_amount" DECIMAL(65,30) NOT NULL,
    "order_detail_status" TEXT,
    "date_allocated" TIMESTAMP(3),

    CONSTRAINT "shop_order_details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shop_vouchers" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deleteAt" TIMESTAMP(3) NOT NULL,
    "voucher_code" TEXT NOT NULL,
    "voucher_name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "uses" INTEGER NOT NULL,
    "max_uses" INTEGER NOT NULL,
    "max_uses_user" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "discount_amount" DECIMAL(65,30) NOT NULL,
    "is_fixed" BOOLEAN NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,

    CONSTRAINT "shop_vouchers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shop_customer_vouchers" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "voucher_id" INTEGER NOT NULL,

    CONSTRAINT "shop_customer_vouchers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shop_product_vouchers" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "product_id" INTEGER NOT NULL,
    "voucher_id" INTEGER NOT NULL,

    CONSTRAINT "shop_product_vouchers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "acl_users_username_key" ON "acl_users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "acl_permissions_name_key" ON "acl_permissions"("name");

-- CreateIndex
CREATE UNIQUE INDEX "acl_roles_name_key" ON "acl_roles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "shop_stores_store_code_key" ON "shop_stores"("store_code");

-- CreateIndex
CREATE UNIQUE INDEX "shop_products_product_code_key" ON "shop_products"("product_code");

-- CreateIndex
CREATE UNIQUE INDEX "shop_categories_category_code_key" ON "shop_categories"("category_code");

-- CreateIndex
CREATE UNIQUE INDEX "shop_categories_category_name_key" ON "shop_categories"("category_name");

-- CreateIndex
CREATE UNIQUE INDEX "shop_suppliers_suppier_code_key" ON "shop_suppliers"("suppier_code");

-- CreateIndex
CREATE UNIQUE INDEX "shop_suppliers_supplier_name_key" ON "shop_suppliers"("supplier_name");

-- CreateIndex
CREATE UNIQUE INDEX "shop_customers_email_key" ON "shop_customers"("email");

-- AddForeignKey
ALTER TABLE "acl_user_has_permissions" ADD CONSTRAINT "acl_user_has_permissions_permissions_id_fkey" FOREIGN KEY ("permissions_id") REFERENCES "acl_permissions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acl_user_has_permissions" ADD CONSTRAINT "acl_user_has_permissions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "acl_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acl_user_has_roles" ADD CONSTRAINT "acl_user_has_roles_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "acl_roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acl_user_has_roles" ADD CONSTRAINT "acl_user_has_roles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "acl_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acl_role_has_permissions" ADD CONSTRAINT "acl_role_has_permissions_permissions_id_fkey" FOREIGN KEY ("permissions_id") REFERENCES "acl_permissions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acl_role_has_permissions" ADD CONSTRAINT "acl_role_has_permissions_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "acl_roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shop_imports" ADD CONSTRAINT "shop_imports_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "acl_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shop_imports" ADD CONSTRAINT "shop_imports_shop_stores_id_fkey" FOREIGN KEY ("shop_stores_id") REFERENCES "shop_stores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shop_exports" ADD CONSTRAINT "shop_exports_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "shop_stores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shop_exports" ADD CONSTRAINT "shop_exports_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "acl_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shop_import_details" ADD CONSTRAINT "shop_import_details_import_id_fkey" FOREIGN KEY ("import_id") REFERENCES "shop_imports"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shop_import_details" ADD CONSTRAINT "shop_import_details_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "shop_products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shop_exports_details" ADD CONSTRAINT "shop_exports_details_export_id_fkey" FOREIGN KEY ("export_id") REFERENCES "shop_imports"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shop_exports_details" ADD CONSTRAINT "shop_exports_details_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "shop_products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shop_products" ADD CONSTRAINT "shop_products_supplier_id_fkey" FOREIGN KEY ("supplier_id") REFERENCES "shop_suppliers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shop_products" ADD CONSTRAINT "shop_products_categories_id_fkey" FOREIGN KEY ("categories_id") REFERENCES "shop_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shop_product_reviews" ADD CONSTRAINT "shop_product_reviews_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "shop_products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shop_product_reviews" ADD CONSTRAINT "shop_product_reviews_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "shop_customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shop_product_images" ADD CONSTRAINT "shop_product_images_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "shop_products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shop_product_discounts" ADD CONSTRAINT "shop_product_discounts_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "shop_products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shop_orders" ADD CONSTRAINT "shop_orders_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "acl_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shop_orders" ADD CONSTRAINT "shop_orders_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "shop_customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shop_orders" ADD CONSTRAINT "shop_orders_payment_type_id_fkey" FOREIGN KEY ("payment_type_id") REFERENCES "shop_payment_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shop_order_details" ADD CONSTRAINT "shop_order_details_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "shop_products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shop_order_details" ADD CONSTRAINT "shop_order_details_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "shop_orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shop_customer_vouchers" ADD CONSTRAINT "shop_customer_vouchers_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "shop_customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shop_customer_vouchers" ADD CONSTRAINT "shop_customer_vouchers_voucher_id_fkey" FOREIGN KEY ("voucher_id") REFERENCES "shop_vouchers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shop_product_vouchers" ADD CONSTRAINT "shop_product_vouchers_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "shop_products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shop_product_vouchers" ADD CONSTRAINT "shop_product_vouchers_voucher_id_fkey" FOREIGN KEY ("voucher_id") REFERENCES "shop_vouchers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
