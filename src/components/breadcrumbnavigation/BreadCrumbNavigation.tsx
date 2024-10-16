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
  return (
    <div className="px-8  flex flex-row justify-between  lg:px-32 items-center">
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
