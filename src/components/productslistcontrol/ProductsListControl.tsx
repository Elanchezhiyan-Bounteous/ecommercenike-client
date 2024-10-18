"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Typography } from "../common/Typography";
import Dropdown from "../common/Dropdown";
import { useMediaQuery } from "react-responsive";
import ProductsListSection from "../productslistsection/ProductsListSection";
import RoundGridIcon from "@/public/assets/icons/RoundGridIcon";
import ViewListIcon from "@/public/assets/icons/ViewListIcon";
import PaginationControls from "../paginationcontrolsection/PaginationControls";
import { useGetAllProducts } from "@/src/hooks/useProduct";
import { ProductForApi } from "@/src/types/IconTypes";
import { useAtom } from "jotai";
import { showFilterAtom } from "@/src/lib/filterAtoms";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Button } from "../ui/button";
import ProductFilters from "../productfiltersection/ProductFilterSection";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const ProductsListControl = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "16";

  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const {
    data: productsofapi,
    isLoading,
    isSuccess,
    isError,
  } = useGetAllProducts();
  const [showFilter, setShowFilter] = useAtom(showFilterAtom);

  const [currentPage, setCurrentPage] = useState<number>(Number(page));
  const [productsPerPage, setProductsPerPage] = useState<number>(
    Number(per_page)
  );

  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    setTimeout(() => {
      window.scrollTo({
        top: 100,
        behavior: "smooth",
      });
    }, 300);
  };

  const [sortedProducts, setSortedProducts] = useState<ProductForApi[]>([]);
  const [sortOption, setSortOption] = useState<string | number>("Default");
  const [filterByName, setFilterByName] = useState<string>("");

  const options = [
    "Default",
    "A to Z",
    "Z to A",
    "Price Low to High",
    "Price High to Low",
  ];
  const showAsOptions = [8, 16, 24, 32];

  const handleSortChange = (value: string | number) => setSortOption(value);
  const handleShowAsChange = (value: number | string) =>
    setProductsPerPage(Number(value));

  const applySorting = (products: ProductForApi[], sortBy: string | number) => {
    let sortedArray = [...products];
    switch (sortBy) {
      case "A to Z":
        sortedArray = sortedArray.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z to A":
        sortedArray = sortedArray.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "Price Low to High":
        sortedArray = sortedArray.sort((a, b) => a.price - b.price);
        break;
      case "Price High to Low":
        sortedArray = sortedArray.sort((a, b) => b.price - a.price);
        break;
      default:
        sortedArray = products;
        break;
    }
    return sortedArray;
  };

  const applyFilter = (products: ProductForApi[], nameFilter: string) => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
  };

  const handleFilter = () => {
    setShowFilter(!showFilter);
  };

  useEffect(() => {
    if (isSuccess && productsofapi) {
      const updatedProducts = applySorting(
        productsofapi as ProductForApi[],
        sortOption
      );
      const filteredProducts = applyFilter(updatedProducts, filterByName);
      setSortedProducts(filteredProducts);
    }
  }, [sortOption, filterByName, isSuccess, productsofapi]);

  const currentProducts =
    sortedProducts.length > 0 ? sortedProducts.slice(start, end) : [];

  useEffect(() => {
    router.push(`/shop/?page=${currentPage}&per_page=${productsPerPage}`);
  }, [productsPerPage, currentPage]);

  const [isGridView, setIsGridView] = useState(true);
  const toggleView = (viewType: string) => setIsGridView(viewType === "grid");

  if (isError) return <div>Something went wrong</div>;

  return (
    <>
      <div className="flex flex-col gap-8 justify-center px-6 pt-24 md:flex-row md:justify-between md:px-8 md:items-center transition-all duration-300 ease-in-out">
        <div className="hidden lg:flex lg:flex-row gap-6 items-center">
          <div onClick={() => toggleView("grid")}>
            <RoundGridIcon
              className={`h-7 w-7 object-contain ${
                isGridView ? "bg-[#B88E2F]  rounded-lg p-1 h-8 w-8" : ""
              }`}
            />
          </div>
          <div onClick={() => toggleView("list")}>
            <ViewListIcon
              className={`h-7 w-7 ${
                !isGridView ? "bg-[#B88E2F] rounded-lg p-1 h-8 w-8" : ""
              }`}
            />
          </div>
          <div className="w-[2px] h-8 bg-[#9F9F9F]/70 mx-2 "></div>
          <div className="w-32">
            <Typography as="p" className="text-base font-poppins ">
              {start + 1}–{Math.min(end, sortedProducts.length)} of{" "}
              {sortedProducts.length} results
            </Typography>
          </div>
        </div>

        <div className="flex flex-col gap-5 md:gap-16 md:flex-row w-full">
          <div className="flex md:flex-row justify-between items-center w-full">
            <div>
              {isLargeScreen ? (
                <Sheet open={open} onOpenChange={setOpen}>
                  <SheetTrigger asChild>
                    <Button onClick={handleFilter} variant="outline">
                      <p className="text-xl">Filters</p>
                    </Button>
                  </SheetTrigger>

                  <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                    <div className="h-full overflow-y-auto">
                      <SheetHeader className="text-left">
                        <SheetTitle>Filters</SheetTitle>
                        <ProductFilters />
                      </SheetHeader>
                    </div>
                    <SheetFooter>
                      <SheetClose asChild>
                        <Button variant="outline" onClick={handleFilter}>
                          Close
                        </Button>
                      </SheetClose>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>
              ) : (
                <Drawer open={open} onOpenChange={setOpen}>
                  <DrawerTrigger asChild>
                    <Button variant="outline" onClick={handleFilter}>
                      <p className="text-xl">Filters</p>
                    </Button>
                  </DrawerTrigger>

                  <DrawerContent>
                    <div className="h-full overflow-y-auto">
                      <DrawerHeader className="text-left">
                        <DrawerTitle>Filters</DrawerTitle>
                      </DrawerHeader>
                      <ProductFilters />
                    </div>
                    <DrawerFooter>
                      <DrawerClose asChild>
                        <Button variant="outline" onClick={handleFilter}>
                          Close
                        </Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              )}
            </div>
            <Typography as="p" className="lg:hidden text-base font-poppins">
              {start + 1}–{Math.min(end, sortedProducts.length)} of{" "}
              {sortedProducts.length} results
            </Typography>
          </div>
          <hr className="md:hidden" />

          <div className="flex md:flex-row gap-16 md:gap-6 ">
            <div className="flex flex-row items-center gap-3">
              <Typography as="p" className="text-xl">
                Show
              </Typography>
              <Dropdown
                className="w-16 p-3"
                options={showAsOptions}
                selectedValue={productsPerPage}
                onChange={handleShowAsChange}
              />
            </div>

            <div className="flex flex-row gap-3 items-center">
              <Typography as="p" className="text-xl">
                Sort
              </Typography>
              <Dropdown
                className="w-32 p-3"
                options={options}
                selectedValue={sortOption}
                onChange={handleSortChange}
              />
            </div>
          </div>
        </div>
      </div>

      <ProductsListSection products={currentProducts} gridView={isGridView} />

      <PaginationControls
        hasNextPage={end < sortedProducts.length}
        hasPrevPage={start > 0}
        onPageChange={handlePageChange}
        page={currentPage}
        totalPages={Math.ceil(sortedProducts.length / productsPerPage)}
      />
    </>
  );
};

export default ProductsListControl;
