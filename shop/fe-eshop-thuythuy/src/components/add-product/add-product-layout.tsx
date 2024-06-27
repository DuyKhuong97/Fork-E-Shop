import React from "react";
import { useTranslation } from "next-i18next";
import { useUI } from "@contexts/ui.context";
// import { useForm } from "react-hook-form";

import TableProducts from "./table-products";

const AddProductLayout = () => {
  const { t } = useTranslation();

  const { setModalView, openModal } = useUI();

  function handleAddProduct() {
    setModalView("ADD_PRODUCT");
    return openModal();
  }

  return (
    <>
      <div className="cart-header py-7 border-b">
        <h5 className="text-lg font-semibold ">
          {t("common:text-add-product")}
        </h5>
      </div>

      <div className="flex justify-end pt-12 pb-6">
        <button
          onClick={handleAddProduct}
          className="bg-[#ff8084] hover:bg-[#ff8084] text-white font-bold py-2 px-4 rounded"
        >
          {t(`${"common:text-add-product"}`)}
        </button>
      </div>
      <div className="w-full border-inherit border-2 border-gray-300 rounded">
        <TableProducts />
      </div>
    </>
  );
};

export default AddProductLayout;
