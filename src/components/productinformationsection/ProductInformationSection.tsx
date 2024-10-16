"use client";

import { SingleProductComponentsProp } from "@/src/types/IconTypes";
import React, { useState } from "react";
import { Typography } from "../common/Typography";

const ProductInformationSection = ({
  productDetails,
}: SingleProductComponentsProp) => {
  const [activeTab, setActiveTab] = useState("description");

  const renderContent = () => {
    if (activeTab === "description") {
      return (
        <p className="text-gray-600 text-lg">
          Embodying the raw, wayward spirit of rock ’n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
          <br />
          <br />
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage-styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine-tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </p>
      );
    } else if (activeTab === "additional") {
      return (
        <Typography as="p" className="text-gray-600 text-lg">
          Here you would provide additional information about the product, like
          specifications, materials, or any other technical details that the
          user might want to know before making a purchase decision.
        </Typography>
      );
    } else if (activeTab === "reviews") {
      return (
        <div className="space-y-4">
          {productDetails.reviews.map((review, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <Typography as="h4" className="font-semibold text-primary">{review.name}</Typography>
              <Typography as="p" className="text-gray-600">{review.feedback}</Typography>
            </div>
          ))}
        </div>
      );
    }
  };
  return (
    <>
      <div className="w-full px-8 py-5 md:px-12 md:py-3 lg:px-44 lg:pt-14">
        <div className="flex flex-row justify-center space-x-8">
          <button
            className={`text-xl pb-2 ${
              activeTab === "description"
                ? "border-b-2 border-black"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`text-xl pb-2 ${
              activeTab === "additional"
                ? "border-b-2 border-black"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("additional")}
          >
            Additional Information
          </button>
          <button
            className={`text-xl pb-2 ${
              activeTab === "reviews"
                ? "border-b-2 border-black"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews [5]
          </button>
        </div>

        <div className="py-6 md:py-5 lg:pt-10 lg:pb-8">{renderContent()}</div>
      </div>

      <hr className="mt-6" />
    </>
  );
};

export default ProductInformationSection;
