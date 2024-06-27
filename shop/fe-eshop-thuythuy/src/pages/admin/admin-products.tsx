import Layout from "@components/layout/admin/layout-admin";
import AdminLayout from "../../components/admin/admin-layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import AddProductLayout from "@components/add-product/add-product-layout";

export default function AdminProductsPage() {
  return (
    <AdminLayout>
      <AddProductLayout/>
    </AdminLayout>
  );
};

AdminProductsPage.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!,  [
        "common",
        "forms",
        "menu",
        "footer",
      ])),
    },
  };
};
