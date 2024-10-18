"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { Typography } from "../common/Typography";
import Button from "../common/Button";
import ShareIcon from "@/public/assets/icons/ShareIcon";
import CompareIcon from "@/public/assets/icons/CompareIcon";
import LikeIcon from "@/public/assets/icons/LikeIcon";
import { ProductForApi } from "@/src/types/IconTypes";
import Image from "next/image";
import { useAtom } from "jotai";
import { showFilterAtom } from "@/src/lib/filterAtoms";

interface ProductListSectionProps {
  products: ProductForApi[];
  gridView: boolean;
}

const ProductsListSection = ({
  products,
  gridView,
}: ProductListSectionProps) => {
  const router = useRouter();
  const [showFilter] = useAtom(showFilterAtom);

  return (
    <div className="">
      {gridView ? (
        <div
          className={`transition-all duration-300 ease-in-out grid grid-cols-1 gap-y-10 px-4 py-5 lg:gap-x-4
            md:grid-cols-2 lg:grid-cols-3 md:gap-y-2 md:gap-x-4 lg:px-8 lg:pb-10 lg:pt-4`}
        >
          {products.map((product, index) => (
            <div
              className="w-full"
              onClick={() => router.push(`/singleproduct/?id=${product.id}`)}
              key={index}
            >
              <div className="relative transition-all duration-300 ease-in-out max-w-full h-full">
                <div className="h-[75%]">
                  <Image
                    height={400}
                    width={400}
                    src="/assets/nikeimages/nikeairforce1gallery1.png"
                    alt="Product Image"
                    className="w-full h-[100%] object-cover"
                  />
                </div>

                <div className="pt-1 flex flex-col gap-0 w-full">
                  <Typography as="h2" className="font-[500] text-xl">
                    {product.name}
                  </Typography>
                  <Typography as="p" className="text-gray-500 text-lg">
                    {product.category}
                  </Typography>
                  <div className="flex flex-row items-center">
                    <Typography
                      as="span"
                      className="text-lg font-[500] text-primary"
                    >
                     {product.price}
                    </Typography>
                    {product.originalPrice && (
                      <Typography
                        as="span"
                        className="text-gray-400 line-through ml-2"
                      >
                        {product.originalPrice}
                      </Typography>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-8 px-8 py-5 md:px-4 lg:px-40 lg:py-16 transition-opacity duration-300">
          {products.map((product, index) => (
            <div
              key={index}
              className="w-full flex flex-col md:flex-row lg:justify-around lg:flex-row gap-6 lg:gap-6 items-center bg-[#F4F5F7] p-5 rounded-lg shadow-md"
              onClick={() => router.push(`/singleproduct/?id=${product.id}`)}
            >
              <img
                src={product.src}
                alt={product.name}
                className="w-full h-auto md:h-[250px] md:w-auto lg:h-[200px] lg:w-auto" 
              />
              <div className="flex flex-col gap-2 flex-1">
                <Typography as="h2" className="font-semibold text-xl">
                  {product.name}
                </Typography>
                <Typography as="p" className="text-gray-500">
                  {product.desc}
                </Typography>
                <div className="flex flex-row items-center">
                  <Typography
                    as="span"
                    className="text-xl font-bold text-primary"
                  >
                    {product.price}
                  </Typography>
                  {product.originalPrice && (
                    <Typography
                      as="span"
                      className="text-gray-400 line-through ml-2"
                    >
                      {product.originalPrice}
                    </Typography>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center ">
                <Button
                  variant="v2"
                  value="Add to cart"
                  className="text-base"
                />
                <div className="flex flex-row md:flex-col lg:flex-row gap-6 md:gap-2 lg:gap-6 text-gray-600">
                  <button className="hover:text-gray-400 flex gap-1 items-center">
                    <ShareIcon className="stroke-black" />
                    Share
                  </button>
                  <button className="hover:text-gray-400 flex gap-1 items-center">
                    <CompareIcon className="stroke-black" />
                    Compare
                  </button>
                  <button className="hover:text-gray-400 flex gap-1 items-center">
                    <LikeIcon className="fill-black" />
                    Like
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsListSection;
