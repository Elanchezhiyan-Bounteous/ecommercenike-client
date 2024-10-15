"use client"

import React from "react";
import { Typography } from "../common/Typography";
import RightArrowIcon from "@/public/assets/icons/RightArrowIcon";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();
  return (
    <div className="bg-[url('/assets/images/cover.png')] h-72 bg-no-repeat bg-cover flex items-center justify-center">
      <div className="flex flex-col gap-3 items-center ">
        <Typography as="h1" className="text-5xl font-poppins font-medium">
          Shop
        </Typography>
        <div className="flex flex-row gap-1 items-center">
          <div className="cursor-pointer" onClick={()=> {router.push("/home")}}>
            <Typography as="p" className="text-base font-medium font-poppins">
              Home
            </Typography>
          </div>
          <RightArrowIcon />
          <div className="cursor-pointer" onClick={()=> {router.push("/shop")}}>
            <Typography as="p" className="text-base font-normal font-poppins">
              Shop
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
