import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { useQueryClient } from "@tanstack/react-query";
import { useGetAllProducts } from "@/src/hooks/useProduct";
import { filterAtom } from "@/src/lib/filterAtoms";
import { useAtom } from "jotai";
import { Filters } from "@/src/types/IconTypes";

const ProductFilters: React.FC = () => {
  const [filters, setFilters] = useAtom(filterAtom);
  const { refetch } = useGetAllProducts(filters);

  const handleCheckboxChange = (filterType: keyof Filters, value: string) => {
    setFilters((filters) => {
      const updatedFilters = { ...filters };

      if (updatedFilters[filterType].includes(value)) {
        updatedFilters[filterType] = updatedFilters[filterType].filter(
          (item) => item !== value
        );
      } else {
        updatedFilters[filterType].push(value);
      }

      return updatedFilters;
    });
  };

  useEffect(() => {
    console.log(filters, "filt");
    refetch();
  }, [filters, setFilters]);

  const queryClient = useQueryClient();

  return (
    <div className="p-4">
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="gender">
          <AccordionTrigger>Gender</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="men"
                  checked={filters.gender.includes("Men")}
                  onCheckedChange={() => {
                    handleCheckboxChange("gender", "Men");
                  }}
                />
                <Label htmlFor="men" className="text-base">
                  Men
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="women"
                  checked={filters.gender.includes("Women")}
                  onCheckedChange={() =>
                    handleCheckboxChange("gender", "Women")
                  }
                />
                <Label htmlFor="women">Women</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="unisex"
                  checked={filters.gender.includes("Unisex")}
                  onCheckedChange={() =>
                    handleCheckboxChange("gender", "Unisex")
                  }
                />
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
                <Checkbox
                  id="price-1"
                  checked={filters.priceRange.includes("under2500")}
                  onCheckedChange={() =>
                    handleCheckboxChange("priceRange", "under2500")
                  }
                />
                <Label htmlFor="price-1">Under ₹ 2,500.00</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="price-2"
                  checked={filters.priceRange.includes("2501to7500")}
                  onCheckedChange={() =>
                    handleCheckboxChange("priceRange", "2501to7500")
                  }
                />
                <Label htmlFor="price-2">₹ 2,501.00 - ₹ 7,500.00</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="price-3"
                  checked={filters.priceRange.includes("7501to12500")}
                  onCheckedChange={() =>
                    handleCheckboxChange("priceRange", "7501to12500")
                  }
                />
                <Label htmlFor="price-3">₹ 7,501.00 - ₹ 12,500.00</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="price-4"
                  checked={filters.priceRange.includes("over13000")}
                  onCheckedChange={() =>
                    handleCheckboxChange("priceRange", "over13000")
                  }
                />
                <Label htmlFor="price-4">Over ₹ 13,000.00</Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="sale">
          <AccordionTrigger>Sale & Offers</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="sale"
                  checked={filters.saleOffers.includes("Sale")}
                  onCheckedChange={() =>
                    handleCheckboxChange("saleOffers", "Sale")
                  }
                />
                <Label htmlFor="sale">Sale</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="bestseller"
                  checked={filters.saleOffers.includes("Best Seller")}
                  onCheckedChange={() => {
                    handleCheckboxChange("saleOffers", "Best Seller");
                    //  queryClient.refetchQueries({ queryKey: ["filter"] });
                  }}
                />
                <Label htmlFor="bestseller">Best Seller</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="justin"
                  checked={filters.saleOffers.includes("Just In")}
                  onCheckedChange={() => {
                    handleCheckboxChange("saleOffers", "Just In");
                    // queryClient.refetchQueries({ queryKey: ["filter"] });
                  }}
                />
                <Label htmlFor="justin">Just In</Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="brand">
          <AccordionTrigger>Brand</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="nikesportswear"
                  checked={filters.brand.includes("Nike Sportswear")}
                  onCheckedChange={() =>
                    handleCheckboxChange("brand", "Nike Sportswear")
                  }
                />
                <Label htmlFor="nikesportswear" className="text-base">
                  Nike Sportswear
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="nikelab"
                  checked={filters.brand.includes("NikeLab")}
                  onCheckedChange={() =>
                    handleCheckboxChange("brand", "NikeLab")
                  }
                />
                <Label htmlFor="nikelab">NikeLab</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="nikebyyou"
                  checked={filters.brand.includes("NikeByYou")}
                  onCheckedChange={() =>
                    handleCheckboxChange("brand", "NikeByYou")
                  }
                />
                <Label htmlFor="nikebyyou">NikeByYou</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="jordan"
                  checked={filters.brand.includes("Jordan")}
                  onCheckedChange={() =>
                    handleCheckboxChange("brand", "Jordan")
                  }
                />
                <Label htmlFor="jordan">Jordan</Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ProductFilters;
