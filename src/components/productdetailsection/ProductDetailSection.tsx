import { useState } from "react";
import { Typography } from "../common/Typography";
import { cartItem, SingleProductComponentsProp } from "@/src/types/IconTypes";
import { useAtom } from "jotai";
import { cartAtom, isCartVisibleAtom } from "@/src/lib/cartAtoms";

import CartSection from "../cartsection/cartSection";
import { isAuthenticatedAtom } from "@/src/lib/authAtoms";
import { useToast } from "@/src/hooks/use-toast";
import { Button } from "../ui/button";

const ProductCard = ({ productDetails }: SingleProductComponentsProp) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const [isAuthenticated] = useAtom(isAuthenticatedAtom);
  const { toast } = useToast();

  return (
    <div className="w-full px-6  lg:px-4 lg:w-1/2 ">
      <Typography as="h1" className="text-2xl font-bold">
        {productDetails.name}
      </Typography>
      <Typography as="p" className="text-gray-500">
        {productDetails.desc}
      </Typography>

      <div className="flex items-center my-2">
        <div className="flex text-yellow-400 text-3xl ">
          <Typography as="span">&#9733;</Typography>
          <Typography as="span">&#9733;</Typography>
          <Typography as="span">&#9733;</Typography>
          <Typography as="span">&#9733;</Typography>
          <Typography className="text-gray-300">&#9733;</Typography>
        </div>
        <p className="text-sm text-gray-500 ml-2">
          ({productDetails.reviews.length} Ratings)
        </p>
      </div>

      <div className="flex items-center my-2">
        <Typography as="span" className="text-3xl font-bold text-black">
          {productDetails.price}
        </Typography>
        <Typography as="span" className="text-gray-500 ml-4 line-through">
          {productDetails.originalPrice}
        </Typography>
      </div>

      <div className="my-4 lg:w-full">
        <div className="flex justify-between items-center mb-2">
          <Typography as="span" className="font-bold">
            Select Size
          </Typography>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {productDetails.sizes.map((sizeObj, index) => (
            <button
              key={index}
              onClick={() => setSelectedSize(sizeObj.size)}
              className={`border py-2 text-center rounded-lg ${
                selectedSize === sizeObj.size
                  ? "border-black"
                  : "border-gray-300 text-gray-500"
              } ${sizeObj.stock === 0 ? "bg-gray-100 cursor-not-allowed" : ""}`}
              disabled={sizeObj.stock === 0}
            >
              {sizeObj.size}
              <Typography as="p" className="block text-xs text-gray-400">
                {sizeObj.stock > 0
                  ? `${sizeObj.stock} available`
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
        <Button
          variant="outline"
          className="border py-2 px-4 rounded-lg w-1/2"
          onClick={() => {
            toast({
              description: "Added to wishList",
            });
            if (isAuthenticated) {
            } else {
              toast({
                description: "Please Login to add Items to your Cart",
              });
            }
          }}
        >
          Add to Wishlist
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
