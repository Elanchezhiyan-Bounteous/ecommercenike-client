import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../@/components/ui/accordion";
import { Checkbox } from "../../../@/components/ui/checkbox";
import { Label } from "../../../@/components/ui/label";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../../@/components/ui/drawer";

import { Menu } from "lucide-react";
import { Button } from "../../../@/components/ui/button";
import { useAtom } from "jotai";
import { showFilterAtom } from "@/src/lib/filterAtoms";

export default function ProductFilters() {
  const [showFilter, setShowFilter] = useAtom(showFilterAtom);
  const [open, setOpen] = React.useState(false);

  const handleFilter = () => {
    setShowFilter(!showFilter);
    console.log(showFilter);
  };

  return (
    <div className="relative">
      <div
        className={`fixed inset-y-0 left-0 z-50 w-[300px] sm:w-[540px] bg-background shadow-lg transform transition-transform duration-300 ease-in-out ${
          showFilter ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full overflow-y-auto p-6">

          <Accordion type="multiple" className="w-full">
            <AccordionItem value="gender">
              <AccordionTrigger className="text-lg">
                Gender (1)
              </AccordionTrigger>
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
              <AccordionTrigger className="text-lg">
                Shop By Price
              </AccordionTrigger>
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
              <AccordionTrigger className="text-lg">
                Sale & Offers (1)
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex items-center space-x-2">
                  <Checkbox id="sale" defaultChecked />
                  <Label htmlFor="sale">Sale</Label>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="color">
              <AccordionTrigger className="text-lg">Color</AccordionTrigger>
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

            <AccordionItem value="brand">
              <AccordionTrigger className="text-lg">Brand</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="nike" />
                    <Label htmlFor="nike">Nike Sportswear</Label>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleFilter}
        />
      )}
    </div>
  );
}
