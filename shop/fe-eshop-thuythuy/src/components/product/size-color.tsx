import React, { useState } from "react";
import { generateCartItem } from "@utils/generate-cart-item";
import { useCart } from "@contexts/cart/cart.context";
import { Product } from "@framework/types";
import { toast } from "react-toastify";

interface ProductProps {
    product: Product;
    className?: string;
    contactClassName?: string;
    imageContentClassName?: string;
    variant?: "grid" | "gridSlim" | "list" | "listSmall";
    imgWidth?: number | string;
    imgHeight?: number | string;
    imgLoading?: "eager" | "lazy";
    hideSizeColor: () => void; // Thêm prop hideSizeColor vào interface
}
const SizeColor: React.FC<ProductProps> = ({product,hideSizeColor})=> {
    const { addItemToCart } = useCart();
    const [attributes, setAttributes] = useState<{ [key: string]: string }>({});
    
    const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAttributes((prevAttributes) => ({
            ...prevAttributes,
            size: event.target.value,
        }));
    };
    const resetSizeColor = () => {
        setAttributes({});
    };

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAttributes((prevAttributes) => ({
            ...prevAttributes,
            color: event.target.value,
        }));
    };
    
    const addToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
        // console.log('đã đến đây',data); // Kiểm tra giá trị của data
        event.preventDefault();

        if (attributes.size && attributes.color) {
            const item = generateCartItem(product, {
                ...attributes,
                size: attributes.size,
                color: attributes.color,
            });
            addItemToCart(item, 1);
            // console.log('item', item);
            toast("Added to the bag success", {
                type: "success",
                progressClassName: "fancy-progress-bar",
                position:"top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            // Gọi hàm để ẩn SizeColor sau khi thêm sản phẩm vào giỏ hàng
            hideSizeColor();
            resetSizeColor();
        } else {
            console.log('Please select both size and color.'); // Hoặc bạn có thể thêm thông báo lỗi tùy ý
        }

    };

    return (
        <form className='flex absolute bottom-0 justify-between start-0 gap-2 bg-white pt-2 pb-2'>
            <div className='size w-2/6 pl-1'>
                <input
                    type="text"
                    name="size"
                    id="size"
                    className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder={'size'}
                    onChange={handleSizeChange}
                />
            </div>
            <div className='color w-2/6'>
                <input
                    type="text"
                    name="color"
                    id="color"
                    className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder={'color'}
                    onChange={handleColorChange}
                />
            </div>
            <div className='order pr-1'>
                <button
                    type="button"
                    className='block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    onClick={addToCart}
                >
                    Order
                </button>
            </div>
        </form>
    );
};

export default SizeColor;
