import Layout from "@components/layout/admin/layout-admin";
import AdminLayout from "../../components/admin/admin-layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import CategoriesLayout from "@components/add-categories/add-categories-layout";
export default function AdminCategoriesPage() {
  return (
    <AdminLayout>
      <CategoriesLayout/>
    </AdminLayout>
  );
}

AdminCategoriesPage.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "common",
        "forms",
        "menu",
        "footer",
      ])),
    },
  };
};
