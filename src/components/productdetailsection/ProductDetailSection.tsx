import {  useState } from "react";
import { Typography } from "../common/Typography";
import { cartItem, SingleProductComponentsProp } from "@/src/types/IconTypes";
import { useAtom } from "jotai";
import { cartAtom, isCartVisibleAtom } from "@/src/lib/cartAtoms";

import CartSection from "../cartsection/cartSection";

const ProductCard = ({ productDetails }: SingleProductComponentsProp) => {
  const [cartItems, setCartItems] = useAtom<cartItem[]>(cartAtom);
  const [isCartVisible, setIsCartVisible] = useAtom(isCartVisibleAtom);

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
    console.log(cartItems);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const sizeData = [
    { size: "UK 6 (EU 40)", available: 5 },
    { size: "UK 6.5", available: 2 },
    { size: "UK 7", available: 0 },
    { size: "UK 7.5", available: 10 },
    { size: "UK 8", available: 1 },
    { size: "UK 8.5", available: 0 },
    { size: "UK 9", available: 3 },
    { size: "UK 9.5", available: 0 },
    { size: "UK 10", available: 4 },
    { size: "UK 10.5", available: 0 },
    { size: "UK 11", available: 6 },
    { size: "UK 11.5", available: 1 },
    { size: "UK 12", available: 0 },
  ];


  return (
    <div className="w-full px-6  lg:px-4 lg:w-1/2 ">
      <Typography as="h1" className="text-2xl font-bold">
        Air Force 1
      </Typography>
      <Typography as="p" className="text-gray-500">
        Dominate the game and Just do it!
      </Typography>

      <div className="flex items-center my-2">
        <div className="flex text-yellow-400 text-3xl ">
          <Typography as="span">&#9733;</Typography>
          <Typography as="span">&#9733;</Typography>
          <Typography as="span">&#9733;</Typography>
          <Typography as="span">&#9733;</Typography>
          <Typography className="text-gray-300">&#9733;</Typography>
        </div>
        <p className="text-sm text-gray-500 ml-2">(250 Ratings)</p>
      </div>

      <div className="flex items-center my-2">
        <Typography as="span" className="text-3xl font-bold text-black">
          $54.69
        </Typography>
        <Typography as="span" className="text-gray-500 ml-4 line-through">
          $78.66
        </Typography>
      </div>

      <div className="my-4 lg:w-full">
        <div className="flex justify-between items-center mb-2">
          <Typography as="span" className="font-bold">
            Select Size
          </Typography>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {sizeData.map((sizeObj, index) => (
            <button
              key={index}
              onClick={() => setSelectedSize(sizeObj.size)}
              className={`border py-2 text-center rounded-lg ${
                selectedSize === sizeObj.size
                  ? "border-black"
                  : "border-gray-300 text-gray-500"
              } ${
                sizeObj.available === 0 ? "bg-gray-100 cursor-not-allowed" : ""
              }`}
              disabled={sizeObj.available === 0}
            >
              {sizeObj.size}
              <Typography as="p" className="block text-xs text-gray-400">
                {sizeObj.available > 0
                  ? `${sizeObj.available} available`
                  : "Out of stock"}
              </Typography>
            </button>
          ))}
        </div>
      </div>

      <div className="my-4 flex items-center">
        <Typography as="p" className="mr-4">
          Quantity:
        </Typography>
        <div className="flex items-center border rounded">
          <button
            className="px-2 py-1 border-r"
            onClick={handleDecreaseQuantity}
          >
            -
          </button>
          <Typography as="p" className="px-4">
            {quantity}
          </Typography>
          <button
            className="px-2 py-1 border-l"
            onClick={handleIncreaseQuantity}
          >
            +
          </button>
        </div>
      </div>

      <div className="my-4 overflow-x-auto flex space-x-4 py-2 scrollbar-none ">
        <div className=" flex flex-row items-center gap-4 border-2 border-black px-2 h-24 min-w-80 rounded-lg text-center">
          <div className="flex flex-col gap-2">
            <Typography as="p" className="text-sm text-left">
              Get upto 30% Off on order value above $100
            </Typography>
            <button className="text-blue-500 text-sm text-left">
              Terms & Conditions
            </button>
          </div>
          <button className="block text-sm text-gray-700 border rounded-md p-2">
            Use Code: ORDER100
          </button>
        </div>
        <div className=" flex flex-row items-center gap-4 border-2 border-black px-2 h-24 min-w-80 rounded-lg text-center">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-left">
              Get upto 30% Off on order value above $100
            </p>
            <button className="text-blue-500 text-sm text-left">
              Terms & Conditions
            </button>
          </div>
          <button className="block text-sm text-gray-700 border rounded-md p-2">
            Use Code: ORDER100
          </button>
        </div>
        <div className=" flex flex-row items-center gap-4 border-2 border-black px-2 h-24 min-w-80 rounded-lg text-center">
          <div className="flex flex-col gap-2">
            <Typography as="p" className="text-sm text-left">
              Get upto 30% Off on order value above $100
            </Typography>
            <button className="text-blue-500 text-sm text-left">
              Terms & Conditions
            </button>
          </div>
          <button className="block text-sm text-gray-700 border rounded-md p-2">
            Use Code: ORDER100
          </button>
        </div>
      </div>

      <div className="flex gap-4">
        <CartSection
       
          product={productDetails}
          productId={productDetails.id}
          quantity={quantity}
        />
        <button className="border py-2 px-4 rounded-lg w-full">
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
