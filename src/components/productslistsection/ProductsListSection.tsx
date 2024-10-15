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

interface ProductListSectionProps {
  products: ProductForApi[];
  gridView: boolean;
}

const ProductsListSection = ({
  products,
  gridView,
}: ProductListSectionProps) => {
  const router = useRouter();

  return (
    <div className="">
      {gridView ? (
        <div
          className={`grid grid-cols-1 w-full h-full gap-y-10 px-8 py-5 md:grid-cols-2 lg:grid-cols-3 md:gap-y-10 md:gap-x-8 lg:gap-x-5 md:px-10 lg:px-12  md:py-10 lg:py-16 transition-opacity duration-300`}
        >
          {products.map((product, index) => (
            <div
              className=""
              onClick={() => router.push(`/singleproduct/?id=${product.id}`)}
              key={index}
            >
              <div className="w-full h-[517px]">
                <Image
                  height={517}
                  width={517}
                  src="/assets/nikeimages/nikeairforce1gallery1.png"
                  alt="alt"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="pt-3 pb-3 flex flex-col gap-0.5 w-full h-32">
                <Typography
                  as="h2"
                  className="font-[500] text-base font-poppins"
                >
                  Nike Air Force 1 Low Retro Premium
                </Typography>
                <Typography as="p" className="text-gray-500 font-poppins">
                  Men's shoes
                </Typography>
                <div className="flex flex-row items-center w-full">
                  <Typography
                    as="span"
                    className="text-base font-[500] text-primary font-poppins"
                  >
                    Rs 10000
                  </Typography>
                  {product.originalPrice && (
                    <Typography
                      as="span"
                      className="text-gray-400 line-through ml-2 font-poppins"
                    >
                      Rs 15000
                    </Typography>
                  )}
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
                className="w-full h-[300px] md:h-[250px] md:w-[250px] lg:h-[200px] lg:w-[200px]"
              />
              <div className="flex flex-col gap-2 flex-1">
                <Typography
                  as="h2"
                  className="font-semibold text-xl font-poppins"
                >
                  {product.name}
                </Typography>
                <Typography as="p" className="text-gray-500 font-poppins">
                  {product.desc}
                </Typography>
                <div className="flex flex-row items-center">
                  <Typography
                    as="span"
                    className="text-xl font-bold text-primary font-poppins"
                  >
                    {product.price}
                  </Typography>
                  {product.originalPrice && (
                    <Typography
                      as="span"
                      className="text-gray-400 line-through ml-2 font-poppins"
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
                  <button className="hover:text-gray-400 font-poppins flex flex-row gap-1 items-center">
                    <ShareIcon className="stroke-black" />
                    Share
                  </button>
                  <button className="hover:text-gray-400 font-poppins flex flex-row gap-1 items-center">
                    <CompareIcon className="stroke-black" />
                    Compare
                  </button>
                  <button className="hover:text-gray-400 font-poppins flex flex-row gap-1 items-center">
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
