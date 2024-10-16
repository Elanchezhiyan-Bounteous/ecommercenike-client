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
import ProductFilters from "../productfiltersection/ProductFilterSection";
import { useAtom } from "jotai";
import { showFilterAtom } from "@/src/lib/filterAtoms";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../@/components/ui/accordion";
import { Checkbox } from "../../../@/components/ui/checkbox";
import { Label } from "../../../@/components/ui/label";

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
    <div>
      {gridView ? (
        <div className="flex flex-col  w-full">
          <div
            className={`transition-all duration-300 ease-in-out ${
              showFilter
                ? "ml-64 w-[84%] lg:gap-x-12"
                : "ml-0 w-full lg:gap-x-3"
            }  grid grid-cols-1  h-full gap-y-10 px-4 py-5 
  md:grid-cols-2 lg:grid-cols-3 md:gap-y-8 md:gap-x-4  lg:px-8 lg:py-10`}
          >
            <div
              className={`fixed left-0 top-0 h-full bg-white z-10 transition-all duration-300 ease-in-out ${
                showFilter ? "translate-x-0" : "-translate-x-full"
              } w-64 shadow-lg overflow-y-auto`}
            >
              <div className="p-4">
                <Accordion type="multiple" className="w-full">
                  <AccordionItem value="gender">
                    <AccordionTrigger>Gender</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="men" defaultChecked />
                          <Label htmlFor="men" className="text-base">
                            Men
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="women" />
                          <Label htmlFor="women">Women</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="unisex" />
                          <Label htmlFor="unisex">Unisex</Label>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="price">
                    <AccordionTrigger>Shop By Price</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="price-1" />
                          <Label htmlFor="price-1">Under ₹ 2,500.00</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="price-2" />
                          <Label htmlFor="price-2">
                            ₹ 2,501.00 - ₹ 7,500.00
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="price-3" />
                          <Label htmlFor="price-3">
                            ₹ 7,501.00 - ₹ 12,500.00
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="price-4" />
                          <Label htmlFor="price-4">Over ₹ 13,000.00</Label>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="sale">
                    <AccordionTrigger>Sale & Offers</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="sale" defaultChecked />
                        <Label htmlFor="sale">Sale</Label>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="color">
                    <AccordionTrigger>Colour</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {[
                          "Blue",
                          "Maroon Red",
                          "Crimson Red",
                          "Seinna Pink",
                          "Teal",
                          "Aquamarine",
                          "Off-White",
                          "Muave Orange",
                        ].map((color) => (
                          <div
                            key={color}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox
                              id={color.toLowerCase().replace(" ", "-")}
                              defaultChecked={color === "Crimson Red"}
                            />
                            <Label
                              htmlFor={color.toLowerCase().replace(" ", "-")}
                            >
                              {color}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            {products.map((product, index) => (
              <div
                className="w-full h-full"
                onClick={() => router.push(`/singleproduct/?id=${product.id}`)}
                key={index}
              >
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    showFilter ? "w-[450px] h-[450px]" : "w-[520px] h-[520px]"
                  }`}
                >
                  <Image
                    height={showFilter ? 500 : 600} // 
                    width={showFilter ? 400 : 517} 
                    src="/assets/nikeimages/nikeairforce1gallery1.png"
                    alt="alt"
                    className="w-full h-full object-cover" 
                  />
                </div>

                <div className="pt-3 flex flex-col gap-0.5 w-full h-32">
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
