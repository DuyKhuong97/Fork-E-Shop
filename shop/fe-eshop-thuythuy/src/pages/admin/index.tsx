import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import AdminLayout from "../../components/admin/admin-layout";
import LayoutAdmin from "../../components/layout/admin/layout-admin";
import OverallLayout from "@components/Overall/overall-layout";
export default function AdminPage() {
  return (
    <>
      <AdminLayout>
        <OverallLayout/>
      </AdminLayout>
    </>
  );
}

AdminPage.Layout = LayoutAdmin;

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
