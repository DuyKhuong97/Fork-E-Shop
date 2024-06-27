import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import SignUpForm from "@components/auth/sign-up-form";
import PageHeader from "@components/ui/page-header";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

export default function SignUpPage() {
  return (
    <>
      <PageHeader pageHeader="Register" />
      <Container>
        <div className="py-16 lg:py-20">
          <SignUpForm />
        </div>
      </Container>
    </>
  );
}

SignUpPage.Layout = Layout;

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
