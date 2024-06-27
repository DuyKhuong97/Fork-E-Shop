
import { useTranslation } from "next-i18next";
import { useUI } from "@contexts/ui.context";
import React from 'react';
import MyTable from "./table-categories";

export default function CategoriesLayout() {
  const { t } = useTranslation();

  const { setModalView, openModal } = useUI();

  function handleAddCategori() {
    setModalView("ADD_CATEGORY");
    return openModal();
  }

  return (
    <>
      <div className="text-lg font-semibold pt-3 pl-3 pb-5">
        {t(`${"text-admin-categogies-header"}`)}
      </div>
      <div className="flex justify-end pt-12 pb-6">
        <button
          onClick={handleAddCategori}
          className="bg-[#ff8084] hover:bg-[#ff8084] text-white font-bold py-2 px-4 rounded"
        >{t(`${"text-add-to-category"}`)}</button>
      </div>
      <div className="w-full border-inherit border-2 border-gray-300 rounded">
        <MyTable />
      </div>
    </>
  );
}
