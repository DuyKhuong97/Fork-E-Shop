import ExclamationTriangleIcon from "@components/icons/triangle-exclamation";
import Link from "@components/ui/link";
import { useTranslation } from "next-i18next";

const PaymentError: React.FC = () => {
  const { t } = useTranslation("common");
  return (
    <div className="flex h-full w-full justify-center items-center border-t border-b border-gray-300 text-center px-16 py-16 sm:py-20 lg:py-24 xl:py-32">
      <div className="bg-white p-4 rounded flex flex-col items-center">
        <div className="icon mx-auto flex h-160 w-160 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-16 sm:w-16">
          <ExclamationTriangleIcon
            className="h-16 w-18 text-red-600"
            aria-hidden="true"
          />
        </div>
        <h2 className="text-lg mt-6 font-semibold mb-2 text-black">
          {t("error-payment")}
        </h2>
        <p className="text-gray-700 mb-20">{t("error-sub-payment")}</p>
        <Link
          href="/checkout"
          className="text-[13px] md:text-sm lg:text-base leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 bg-heading text-white px-4 md:px-6  py-2.5 lg:py-3 hover:text-white hover:bg-gray-600 hover:shadow-cart rounded-lg mt-8"
        >
          <span className="ps-1.5">{t("button-go-checkout")}</span>
        </Link>
      </div>
    </div>
  );
};

export default PaymentError;
