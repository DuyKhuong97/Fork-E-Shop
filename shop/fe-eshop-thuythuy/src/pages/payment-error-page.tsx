import Layout from "@components/layout/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PaymentError from "@components/payment-Error/error-payment";
import { GetStaticProps } from "next";

export default function PaymentErrorPage() {
    return <PaymentError />;
}

PaymentErrorPage.Layout = Layout;

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
