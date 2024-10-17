import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { useAtom } from "jotai";
import { showFilterAtom } from "@/src/lib/filterAtoms";

export default function ProductFilters() {
  const [showFilter, setShowFilter] = useAtom(showFilterAtom);

  return (
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
                <Label htmlFor="price-2">₹ 2,501.00 - ₹ 7,500.00</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="price-3" />
                <Label htmlFor="price-3">₹ 7,501.00 - ₹ 12,500.00</Label>
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
                <div key={color} className="flex items-center space-x-2">
                  <Checkbox
                    id={color.toLowerCase().replace(" ", "-")}
                    defaultChecked={color === "Crimson Red"}
                  />
                  <Label htmlFor={color.toLowerCase().replace(" ", "-")}>
                    {color}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
