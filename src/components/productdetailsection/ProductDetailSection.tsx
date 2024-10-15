"use client";

import React, { useState } from "react";
import { SingleProductComponentsProp } from "@/src/types/IconTypes";
import FacebookIcon from "@/public/assets/icons/FacebookIcon";
import LinkedInIcon from "@/public/assets/icons/LinkedInIcon";
import TwitterIcon from "@/public/assets/icons/TwitterIcon";
import { useAppDispatch, useAppSelector } from "@/src/lib/hooks";
import { addToCart, cartInfo, openCart } from "@/src/lib/features/cartSlice";
import CartSection from "../cartsection/cartSection";

const ProductDetailSection = ({
  productDetails,
  isLoading,
}: SingleProductComponentsProp) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(cartInfo);

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  const handleQuantityChange = (type: string) => {
    if (type === "increment") {
      setQuantity(quantity + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (productDetails) {
      const cartItem = {
        id: productDetails.id,
        name: productDetails.name,
        price: productDetails.price,
        quantity,
        size: selectedSize,
        color: selectedColor,
      };
      dispatch(addToCart(cartItem));
      dispatch(openCart());
    }
  };

  

  if (isLoading || !productDetails) {
    return (
      <div className="py-5 px-8 w-full md:w-1/2 animate-pulse">
        <div className="mb-4">
          <div className="h-10 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-6 bg-gray-300 rounded w-1/3"></div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-6 bg-gray-300 rounded w-16"></div>
            <div className="h-6 bg-gray-300 rounded w-16"></div>
            <div className="h-6 bg-gray-300 rounded w-16"></div>
            <div className="h-6 bg-gray-300 rounded w-16"></div>
            <div className="h-6 bg-gray-300 rounded w-16"></div>
            <div className="w-[2px] h-8 bg-gray-300 mx-2"></div>
            <div className="h-6 bg-gray-300 rounded w-24"></div>
          </div>

          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <div className="h-6 bg-gray-300 rounded w-1/3 mb-2"></div>
              <div className="flex gap-2">
                <div className="h-10 w-10 bg-gray-300 rounded"></div>
                <div className="h-10 w-10 bg-gray-300 rounded"></div>
                <div className="h-10 w-10 bg-gray-300 rounded"></div>
              </div>
            </div>

            <div>
              <div className="h-6 bg-gray-300 rounded w-1/3 mb-2"></div>
              <div className="flex gap-2">
                <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
                <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
                <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:gap-4">
            <div className="h-12 bg-gray-300 rounded w-24"></div>
            <div className="h-12 bg-gray-300 rounded w-full"></div>
            <div className="h-12 bg-gray-300 rounded w-full"></div>
          </div>

          <hr className="my-8" />
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          </div>

          <div className="flex gap-3 mt-4">
            <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
            <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
            <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-5 px-8 md:p-3 lg:py-5 lg:px-8 w-full lg:w-1/2">
      <h1 className="text-4xl font-semibold mb-2">{productDetails?.name}</h1>

      <div className="flex flex-col gap-6">
        <p className="text-2xl text-gray-600 ">{productDetails?.price}</p>

        <div className="flex flex-row gap-2 items-center ">
          <span className="text-yellow-400 ">★</span>
          <span className="text-yellow-400">★</span>
          <span className="text-yellow-400">★</span>
          <span className="text-yellow-400">★</span>
          <span className="text-yellow-400">★</span>
          <div className="w-[2px] h-8 bg-[#9F9F9F]/70 mx-2 "></div>

          <span className="ml-2 text-gray-600">
            {productDetails?.reviews?.length || 0} Customer Review
          </span>
        </div>

        <p className="text-gray-700 ">{productDetails?.desc}</p>

        <div className="flex flex-col gap-4">
          <h4 className="font-semibold">Sizes</h4>
          <div className="flex flex-row gap-2">
            {productDetails?.sizes.map((size, index) => (
              <button
                key={index}
                className={`px-4 py-2 border rounded-md hover:bg-gray-100 ${
                  selectedSize === size ? "bg-gray-300" : ""
                }`}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-semibold">Color</h4>
          <div className="flex flex-row gap-2 items-center">
            {productDetails?.colors.map((color, index) => (
              <div
                key={index}
                className={`w-6 h-6 rounded-full cursor-pointer ${
                  selectedColor === color.value ? "scale-125" : ""
                }`}
                style={{ backgroundColor: color.value }}
                onClick={() => handleColorClick(color.value)}
              ></div>
            ))}
          </div>
        </div>

        <div className="flex flex-row md:flex-col lg:flex-row gap-4 md:gap-4">
          <div className="flex flex-row md:justify-between items-center border border-[#9F9F9F] rounded-lg ">
            <button
              onClick={() => handleQuantityChange("decrement")}
              className="pl-2 py-1 md:pl-6 "
            >
              -
            </button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="w-12 text-center"
            />
            <button
              onClick={() => handleQuantityChange("increment")}
              className="pr-2 py-1 md:pr-6"
            >
              +
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="px-2 py-3 lg:px-6 lg:py-2 border rounded-lg border-black hover:bg-gray-100 "
          >
            Add To Cart
          </button>
          <button className="px-2 py-3 lg:px-6 lg:py-2 border rounded-lg border-black hover:bg-gray-100">
            + Compare
          </button>
        </div>
        <hr className="my-8 flex " />
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-gray-600">SKU : {productDetails?.sku}</p>
        <p className="text-gray-600">Category : {productDetails?.category}</p>
        <p className="text-gray-600">
          Tags : {productDetails?.tags.reduce((str, item) => str + " " + item)}
        </p>
        <div className="flex flex-row gap-3">
          <p className="text-gray-600">Share : </p>
          <FacebookIcon />
          <LinkedInIcon />
          <TwitterIcon />
        </div>
      </div>

      {cart.isCartVisible && <CartSection />}
    </div>
  );
};

export default ProductDetailSection;
