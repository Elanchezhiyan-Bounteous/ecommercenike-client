"use client";
import React from "react";
import { Typography } from "../common/Typography";
import RightArrowIcon from "@/public/assets/icons/RightArrowIcon";
import { SingleProductComponentsProp } from "@/src/types/IconTypes";
import { useRouter } from "next/navigation";

const BreadCrumbNavigation = ({
  productDetails,
  isLoading,
}: SingleProductComponentsProp) => {
  const router = useRouter();

  if (isLoading || !productDetails) {
    return (
      <div className="px-8 bg-[#F9F1E7] flex flex-row h-24 justify-between md:px-28 items-center animate-pulse">
        <div className="flex flex-row gap-6 items-center justify-between">
          <div className="w-16 h-6 bg-gray-300 rounded"></div>

          <div className="w-4 h-4 bg-gray-300 rounded"></div>

          <div className="w-16 h-6 bg-gray-300 rounded"></div>

          <div className="w-[2px] h-8 bg-gray-300"></div>

          <div className="w-32 h-6 bg-gray-300 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-8 bg-[#F9F1E7] flex flex-row h-24 justify-between  lg:px-36 items-center">
      <div className="flex flex-row gap-3 md:gap-10 lg:gap-6 items-center justify-between">
        <Typography
          as="p"
          className="text-xl text-[#9F9F9F] font-[400] hover:cursor-pointer hover:underline"
          onClick={() => router.push("/home")}
        >
          Home
        </Typography>

        <RightArrowIcon />
        <Typography
          as="p"
          className="text-xl text-[#9F9F9F] font-[400] hover:cursor-pointer  hover:underline"
          onClick={() => router.push("/shop")}
        >
          Shop
        </Typography>
        <div className="w-[2px] h-8 bg-[#9F9F9F]/70"></div>
        <Typography as="p" className="text-base font-poppins">
          {productDetails?.name}
        </Typography>
      </div>
    </div>
  );
};

export default BreadCrumbNavigation;
