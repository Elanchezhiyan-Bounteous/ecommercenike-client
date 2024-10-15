import TrophyIcon from "@/public/assets/icons/TrophyIcon";
import React from "react";
import { Typography } from "../common/Typography";
import WarrantyIcon from "@/public/assets/icons/WarrantyIcon";
import FreeShipping from "@/public/assets/icons/FreeShipping";
import CustomerSupportIcon from "@/public/assets/icons/CustomerSupportIcon";


const FeatureSection = () => {
  return (
    <div className="lg:h-60 bg-[#FAF3EA] flex flex-col px-10 py-5 items-center gap-10  lg:flex-row  lg:gap-10 lg:items-center lg:justify-around">
      <div className="w-96 flex flex-row gap-4 items-center">
        <TrophyIcon />
        <div className="flex flex-col gap-1 justify-center">
          <Typography as="p" className="font-poppins font-[600] text-xl">
            High Quality
          </Typography>
          <Typography
            as="p"
            className="font-poppins font-medium text-[#898989] text-lg"
          >
            crafted from top materials
          </Typography>
        </div>
      </div>
      <div className="w-96 flex flex-row gap-4 items-center">
        <WarrantyIcon />
        <div className="flex flex-col gap-1 justify-center">
          <Typography as="p" className="font-poppins font-[600] text-xl">
            Warranty Protection
          </Typography>
          <Typography
            as="p"
            className="font-poppins font-medium text-[#898989] text-lg"
          >
            Over 2 years
          </Typography>
        </div>
      </div>
      <div className="w-96 flex flex-row gap-4 items-center">
        <FreeShipping/>
        <div className="flex flex-col gap-1 justify-center">
          <Typography as="p" className="font-poppins font-[600] text-xl">
            Free Shipping
          </Typography>
          <Typography
            as="p"
            className="font-poppins font-medium text-[#898989] text-lg"
          >
            Order over 150$
          </Typography>
        </div>
      </div>
      <div className="w-96 flex flex-row gap-4 items-center">
        <CustomerSupportIcon/>
        <div className="flex flex-col gap-1 justify-center">
          <Typography as="p" className="font-poppins font-[600] text-xl">
            24 / 7 Support
          </Typography>
          <Typography
            as="p"
            className="font-poppins font-medium text-[#898989] text-lg"
          >
            Dedicated support
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
