"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import {
  ProductForApi,
  SingleProductComponentsProp,
} from "@/src/types/IconTypes";
import { useGetProductsByCategory } from "@/src/hooks/useProduct";
import { Typography } from "../common/Typography";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const RelatedProductsSection = ({
  productDetails,
  isLoading,
  isSuccess,
}: SingleProductComponentsProp) => {
  const router = useRouter();

  useEffect(() => {
    console.log(productDetails, "hey");
  }, [isSuccess]);

  const [showAll, setShowAll] = useState(false);

  const { data: relatedProducts, isLoading: relatedProductsLoading } =
    useGetProductsByCategory(productDetails?.category);

  if (isLoading || !productDetails || relatedProductsLoading) {
    return <div>Loading</div>;
  }

  const visibleProducts = showAll
    ? relatedProducts
    : (relatedProducts as ProductForApi[]).slice(0, 3);
  return (
    <div className=" px-8 py-5 md:px-8 md:py-10 lg:px-40 lg:py-12">
      <Typography
        as="h2"
        className="text-left text-3xl font-semibold pb-6 md:pb-6 md:pl-6 lg:pb-10"
      >
        You Might Also Like
      </Typography>
      <div
        className={`transition-all duration-300 ease-in-out grid grid-cols-1 gap-y-10 px-4 py-5 lg:gap-x-4
            md:grid-cols-2 lg:grid-cols-3 md:gap-y-2 md:gap-x-4 lg:px-8 lg:pb-10 lg:pt-4`}
      >
        {visibleProducts?.map((product, index) => (
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
                  Nike Air Force 1 Low Retro Premium
                </Typography>
                <Typography as="p" className="text-gray-500 text-lg">
                  Men's shoes
                </Typography>
                <div className="flex flex-row items-center">
                  <Typography
                    as="span"
                    className="text-lg font-[500] text-primary"
                  >
                    Rs 10000
                  </Typography>
                  {product.originalPrice && (
                    <Typography
                      as="span"
                      className="text-gray-400 line-through ml-2"
                    >
                      Rs 15000
                    </Typography>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        {showAll ? (
          <Button
            variant="outline"
            value="Show Less"
            onClick={() => setShowAll(false)}
            className="px-20 py-2"
          >
            Show Less
          </Button>
        ) : (
          <Button
            variant="outline"
            value="Show More"
            onClick={() => setShowAll(true)}
            className="px-20 py-2"
          >
            Show More
          </Button>
        )}
      </div>
    </div>
  );
};

export default RelatedProductsSection;
