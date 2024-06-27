import React, { useState } from "react";
import { useRouter } from "next/router";
import isEmpty from "lodash/isEmpty";
import { ROUTES } from "@utils/routes";
import { useUI } from "@contexts/ui.context";
import Button from "@components/ui/button";
import Counter from "@components/common/counter";
import { useCart } from "@contexts/cart/cart.context";
// import { ProductAttributes } from "@components/product/product-attributes";
import { generateCartItem } from "@utils/generate-cart-item";
import usePrice from "@framework/product/use-price";
import { getVariations } from "@framework/utils/get-variations";
import { useTranslation } from "next-i18next";
import HeartIcon from "@components/icons/heart-icon";
import { toast } from "react-toastify";
import { useWindowSize } from "@utils/use-window-size";

export default function ProductPopup() {
  const { t } = useTranslation("common");
  const {
    modalData: { data },
    closeModal,
    openCart,
  } = useUI();
  const router = useRouter();
  const { addItemToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [attributes, _setAttributes] = useState<{ [key: string]: string }>({});
  const [viewCartBtn, setViewCartBtn] = useState<boolean>(false);
  const [addToCartLoader, setAddToCartLoader] = useState<boolean>(false);
  const { price, basePrice, discount } = usePrice({
    amount: data.list_price,
    baseAmount: data.list_price,
    currencyCode: "CZK",
  });
  const variations = getVariations(data.variations);
  const { product_code, slug, image, product_name, description } = data;
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");




  const isSelected = !isEmpty(variations)
    ? !isEmpty(attributes) &&
      Object.keys(variations).every((variation) =>
        attributes.hasOwnProperty(variation)
      )
    : true;
  const { width } = useWindowSize();
  function addToCart() {
    if (!isSelected||!size||!color) return;
    // to show btn feedback while product carting
    setAddToCartLoader(true);
    setTimeout(() => {
      setAddToCartLoader(false);
      setViewCartBtn(true);
    }, 600);
    const item = generateCartItem(data!, {
      ...attributes,
      size: size,
      color: color,
    });
    addItemToCart(item, quantity);
    toast("Added to the bag", {
      type: "success",
      progressClassName: "fancy-progress-bar",
      position: width > 768 ? "bottom-right" : "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }

  function navigateToProductPage() {
    closeModal();
    router.push(
      `${ROUTES.PRODUCT}/${slug}?product_code=${product_code}`,
      undefined,
      {
        locale: router.locale,
      }
    );
  }

  // function handleAttribute(attribute: any) {
  //   setAttributes((prev) => ({
  //     ...prev,
  //     ...attribute,
  //   }));
  // }

  function navigateToCartPage() {
    closeModal();
    setTimeout(() => {
      openCart();
    }, 300);
  }

  return (
    <div className="rounded-lg bg-white">
      <div className="flex flex-col lg:flex-row w-full md:w-[650px] lg:w-[960px] mx-auto overflow-hidden">
        <div className="flex-shrink-0 flex items-center justify-center w-full lg:w-430px max-h-430px lg:max-h-full overflow-hidden bg-gray-300">
          <img
            src={image ?? "/assets/placeholder/products/product-thumbnail.svg"}
            alt={product_name}
            className="lg:object-cover lg:w-full lg:h-full"
          />
        </div>

        <div className="flex flex-col flex-grow p-5 md:p-8 w-full ">
          <div className="pb-5">
            <div
              className="mb-2 md:mb-2.5 block -mt-1.5"
              onClick={navigateToProductPage}
              role="button"
            >
              <h2 className="text-heading text-lg md:text-xl lg:text-2xl font-semibold hover:text-black">
                {product_name}
              </h2>
            </div>
            <p className="text-sm leading-6 md:text-body md:leading-7">
              {description}
            </p>

            {/* giá */}
            <div className="flex items-center mt-3">
              <div className="text-heading font-semibold text-base md:text-xl lg:text-2xl">
                <HeartIcon />
                {price}
              </div>
              {discount && (
                <del className="font-segoe text-gray-400 text-base lg:text-xl ps-2.5 -mt-0.5 md:mt-0">
                  {basePrice}
                </del>
              )}
            </div>
          </div>
          {/* size and color */}
          <div className="flex gap-5">
            <div className="relative mt-2 rounded-md shadow-sm">
              <label htmlFor="size" className="block text-sm font-medium leading-6 text-gray-900">Size</label>
              <input type="text" name="size" id="size" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="XL"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              />
            </div>
            <div className="relative mt-2 rounded-md shadow-sm">
              <label htmlFor="color" className="block text-sm font-medium leading-6 text-gray-900">Color</label>
              <input type="text" name="color" id="color" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Blue" 
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </div>
          </div>
          {/* {Object.keys(variations).map((variation) => {
            return (
              <ProductAttributes
                key={`popup-attribute-key${variation}`}
                title={variation}
                attributes={variations[variation]}
                active={attributes[variation]}
                onClick={handleAttribute}
              />
            );
          })} */}

          <div className="pt-2 md:pt-4">
            <div className="flex items-center justify-between mb-4 space-s-3 sm:space-s-4">
              <Counter
                quantity={quantity}
                onIncrement={() => setQuantity((prev) => prev + 1)}
                onDecrement={() =>
                  setQuantity((prev) => (prev !== 1 ? prev - 1 : 1))
                }
                disableDecrement={quantity === 1}
              />
              <Button
                onClick={addToCart}
                variant="flat"
                className={`w-full h-11 md:h-12 px-1.5 ${
                  !isSelected && "bg-gray-400 hover:bg-gray-400"
                }`}
                disabled={!isSelected}
                loading={addToCartLoader}
              >
                {t("text-add-to-cart")}
              </Button>
            </div>

            {viewCartBtn && (
              <button
                onClick={navigateToCartPage}
                className="w-full mb-4 h-11 md:h-12 rounded bg-gray-100 text-heading focus:outline-none border border-gray-300 transition-colors hover:bg-gray-50 focus:bg-gray-50"
              >
                {t("text-view-cart")}
              </button>
            )}

            <Button
              onClick={navigateToProductPage}
              variant="flat"
              className="w-full h-11 md:h-12"
            >
              {t("text-view-details")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
