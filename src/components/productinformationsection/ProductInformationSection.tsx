"use client";

import { SingleProductComponentsProp } from "@/src/types/IconTypes";
import Image from "next/image";
import React, { useState } from "react";

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
        <p className="text-gray-600 text-lg">
          Here you would provide additional information about the product, like
          specifications, materials, or any other technical details that the
          user might want to know before making a purchase decision.
        </p>
      );
    } else if (activeTab === "reviews") {
      return (
        <div className="space-y-4">
          {productDetails.reviews.map((review, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-primary">{review.name}</h4>
              <p className="text-gray-600">{review.feedback}</p>
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
      <div className="px-4 md:px-16 md:pt-2 lg:pt-5 lg:pb-16 lg:px-32 flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-16 md:justify-evenly">
        <div className=" md:w-1/2 sm:w-full ">
          <img
            
            src={productDetails?.descriptionImages[0].imageUrl}
            alt="Product Image 1"
            className="w-full rounded-lg shadow-lg  bg-[#F9F1E7]"
          />
        </div>
        <div className="md:w-1/2 sm:w-full ">
          <img
            height={10}
            width={10}
            src={productDetails?.descriptionImages[1].imageUrl}
            alt="Product Image 2"
            className="w-full rounded-lg shadow-lg bg-[#F9F1E7]"
          />
        </div>
      </div>
      <hr className="mt-6" />
    </>
  );
};

export default ProductInformationSection;
