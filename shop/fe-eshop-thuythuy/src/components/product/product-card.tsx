import React, { useState } from "react";
import cn from "classnames";
import Image from "next/image";
import type { FC } from "react";
import { useUI } from "@contexts/ui.context";
import usePrice from "@framework/product/use-price";
import { Product } from "@framework/types";
import HeartIcon from "@components/icons/heart-icon";
import SizeColor from "@components/product/size-color";

interface ProductProps {
  product: Product;
  className?: string;
  contactClassName?: string;
  imageContentClassName?: string;
  variant?: "grid" | "gridSlim" | "list" | "listSmall";
  imgWidth?: number | string;
  imgHeight?: number | string;
  imgLoading?: "eager" | "lazy";
  hideSizeColor?: () => void;
}

const ProductCard: FC<ProductProps> = ({
  product,
  className = "",
  contactClassName = "",
  imageContentClassName = "",
  variant = "list",
  imgWidth = 340,
  imgHeight = 440,
  imgLoading,
}) => {
  const { openModal, setModalView, setModalData } = useUI();
  const placeholderImage = `/assets/placeholder/products/product-${variant}.svg`;
  const { price } = usePrice({
    amount: product.list_price,
    baseAmount: product.list_price,
    currencyCode: "CZK",
  });

  const hideSizeColor = () => {setSizeColorVisible(false);};

  const [sizeColorVisible, setSizeColorVisible] = useState(false); // State để kiểm soát việc hiển thị
  const [plusIconVisible, setPlusIconVisible] = useState(false);
  function handlePopupView() {
    setModalData({ data: product });
    setModalView("PRODUCT_VIEW");
    return openModal();
  }



  return (
    <div
      className={cn(
        "group box-border overflow-hidden flex rounded-md cursor-pointer",
        {
          "pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-product":
            variant === "grid",
          "pe-0 md:pb-1 flex-col items-start bg-white": variant === "gridSlim",
          "items-center bg-transparent border border-gray-100 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-listProduct":
            variant === "listSmall",
          "flex-row items-center transition-transform ease-linear bg-gray-200 pe-2 lg:pe-3 2xl:pe-4":
            variant === "list",
        },
        className
      )}
      title={product?.product_name}
      onMouseEnter={() => setPlusIconVisible(true)} // Hiển thị biểu tượng "+" khi hover vào
      onMouseLeave={() => {setPlusIconVisible(false);hideSizeColor()}} // Ẩn biểu tượng "+" khi chuột rời khỏi
    >
      <div
        className={cn(
          "flex relative",
          {
            "mb-3 md:mb-3.5": variant === "grid",
            "mb-3 md:mb-3.5 pb-0": variant === "gridSlim",
            "flex-shrink-0 w-32 sm:w-44 md:w-36 lg:w-44":
              variant === "listSmall",
          },
          imageContentClassName
        )}
        
      >
        <div className="image" onClick={handlePopupView}
        role="button">
          <Image
            src={product?.image ?? placeholderImage}
            width={imgWidth}
            height={imgHeight}
            loading={imgLoading}
            quality={100}
            alt={product?.product_name || "Product Image"}
            className={cn("bg-gray-300 object-cover rounded-s-md", {
              "w-full rounded-md transition duration-200 ease-in group-hover:rounded-b-none":
                variant === "grid",
              "rounded-md transition duration-150 ease-linear transform group-hover:scale-105":
                variant === "gridSlim",
              "rounded-s-md transition duration-200 ease-linear transform group-hover:scale-105":
                variant === "list",
            })}
          />
        </div>
        {plusIconVisible && (
          <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 h-1/6 w-1/6 rounded-full bg-black bg-opacity-30 md:bg-opacity-0 flex justify-center items-center transition duration-200 ease-in-out md:group-hover:bg-opacity-30" 
          role="button"
          onClick={() => setSizeColorVisible(!sizeColorVisible)} // Khi nhấn vào dấu +, thay đổi state để ẩn/hiện SizeColor
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512">{/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<style dangerouslySetInnerHTML={{__html: "svg{fill:#FFFFFF}" }} />
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
            </svg>
          </div>
        )}
        
        {sizeColorVisible && <SizeColor product={product} hideSizeColor={hideSizeColor} />}
        
      </div>
      
      <div
        className={cn(
          "w-full overflow-hidden",
          {
            "ps-0 lg:ps-2.5 xl:ps-4 pe-2.5 xl:pe-4": variant === "grid",
            "ps-0": variant === "gridSlim",
            "px-4 lg:px-5 2xl:px-4": variant === "listSmall",
          },
          contactClassName
        )}
      >
        <div onClick={handlePopupView} role="button">
          <h2
            className={cn("text-heading font-semibold truncate mb-1", {
              "text-sm md:text-base": variant === "grid",
              "md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg":
                variant === "gridSlim",
              "text-sm sm:text-base md:mb-1.5 pb-0": variant === "listSmall",
              "text-sm sm:text-base md:text-sm lg:text-base xl:text-lg md:mb-1.5":
                variant === "list",
            })}
          >
            {product?.product_name}
          </h2>
          {product?.description && (
            <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
              {product?.description}
            </p>
          )}
        </div>
        <div
          className={`text-heading font-semibold text-sm sm:text-base mt-1.5 space-s-2 flex ${
            variant === "grid"
              ? "lg:text-lg lg:mt-2.5"
              : "sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3"
          }`}
        >
          <HeartIcon />
          <span className="inline-block">{price}</span>
          {/* {discount && (
            <del className="sm:text-base font-normal text-gray-800">
              {basePrice}
            </del>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
