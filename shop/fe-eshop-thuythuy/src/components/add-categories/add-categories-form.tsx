import React from "react";
import { useTranslation } from "next-i18next";
// import UploadImage from 'src/pages/upload-image';

import Button from "@components/ui/button";
import UploadImage from "src/pages/upload-image";
import { useUI } from "@contexts/ui.context";
import { useForm } from "react-hook-form";
import Input from "@components/ui/input";
import {
  CategoryInputType,
  useSetCategoryMutation,
} from "../../framework/basic-rest/category/set-category";

export default function CategoriesForm() {
  const { t } = useTranslation("forms");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryInputType>();
  const { mutate: setCategory } = useSetCategoryMutation();
  const { closeModal } = useUI();
  const onSubmit = ({ name, slug, image }: CategoryInputType) => {
    setCategory({
      name,
      slug,
      image,
    });
  };
  return (
    <div>
      <form
        className="bg-gray-350 border border-solid border-gray-400 p-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-content">
          <div className="md:flex block items-center mb-6">
            <label className="w-5/12">{t("label-category-image")} </label>
            <UploadImage multiple={false}></UploadImage>
          </div>

          <div className="md:flex block items-center mb-6">
            <label htmlFor="product_name" className="w-5/12">
              {t("label-category-name")}{" "}
            </label>
            {/* <input name='name' type="text" className='text-sm rounded px-3 py-2 w-full border border-solid border-gray-400' /> */}
            <div className="w-7/12">
              <Input
                type="text"
                variant="solid"
                {...register("name", {
                  required: `${t("forms:label-category-name-required")}`,
                })}
                formAdd={true}
                className="text-sm rounded px-3 py-2 w-full border border-solid border-gray-400 "
                errorKey={errors.name?.message}
              />
            </div>
          </div>
        </div>

        <div className="xl:ml-3 sm:ml-4">
          <Button
            type="submit"
            className="h-11 md:h-12 mt-1.5 bg-[#ff8084] hover:bg-[#ff5059]"
          >
            {t("common:text-add-to-category")}
          </Button>

          <Button
            type="reset"
            variant="flat"
            className="h-11 md:h-12 mt-1.5 ml-3 bg-gray-400 hover:bg-gray-400"
            onClick={closeModal}
          >
            {t("common:button-reset")}
          </Button>
        </div>
      </form>
    </div>
  );
}
