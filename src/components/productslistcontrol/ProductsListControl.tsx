"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Typography } from "../common/Typography";
import Dropdown from "../common/Dropdown";
import ProductsListSection from "../productslistsection/ProductsListSection";
import VectorIcon from "@/public/assets/icons/VectorIcon";
import RoundGridIcon from "@/public/assets/icons/RoundGridIcon";
import ViewListIcon from "@/public/assets/icons/ViewListIcon";
import PaginationControls from "../paginationcontrolsection/PaginationControls";
import { useGetAllProducts } from "@/src/hooks/useProduct";
import { ProductForApi } from "@/src/types/IconTypes";
import FilterSectionSkeleton from "../skeletons/FilterSectionSkeleton";
import ProductsListPageSkeleton from "../skeletons/ProductsListPageSkeleton";

const ProductsListControl = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "16";

  const {
    data: productsofapi,
    isLoading,
    isSuccess,
    isError,
  } = useGetAllProducts();

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
        top: 400,
        behavior: "smooth",
      });
    }, 300);
  };

  const [sortedProducts, setSortedProducts] = useState<ProductForApi[]>([]);
  const [sortOption, setSortOption] = useState<string | number>("Default");
  const [filterVisible, setFilterVisible] = useState<boolean>(false);
  const [filterByName, setFilterByName] = useState<string>("");
  const options = [
    "Default",
    "A to Z",
    "Z to A",
    "Price Low to High",
    "Price High to Low",
  ];
  const showAsOptions = [8, 16, 24, 32];

  const handleSortChange = (value: string | number) => {
    setSortOption(value);
  };

  const handleShowAsChange = (value: number | string) => {
    setProductsPerPage(Number(value));
  };

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

  const toggleView = (viewType: string) => {
    setIsGridView(viewType === "grid");
  };

  if (isError) {
    return <div>Something went wrong</div>;
  }

  if (isLoading) {
    return (
      <>
        <FilterSectionSkeleton />
        <ProductsListPageSkeleton isGridView={isGridView} />
      </>
    );
  }

  return (
    <>
      <div className="h-40 md:h-24  bg-[#F9F1E7] flex flex-col gap-8 justify-center px-6 md:flex-row md:justify-between md:px-6 lg:px-28 md:items-center">
        <div className="flex flex-row gap-6 items-center">
          <div className="flex flex-row justify-between gap-2 cursor-pointer">
            <div
              className="flex flex-row gap-2 items-center"
              onClick={() => setFilterVisible(!filterVisible)}
            >
              <VectorIcon className="h-6 w-6 cursor-pointer" />
              <Typography as="p" className="font-poppins text-xl font-[400]">
                Filter
              </Typography>
            </div>

            {filterVisible && (
              <div className="absolute mt-12 bg-white border border-gray-300 rounded-md shadow-lg w-72 z-10">
                <div className="px-4 py-2">
                  <input
                    type="text"
                    value={filterByName}
                    onChange={(e) => setFilterByName(e.target.value)}
                    placeholder="Enter product name"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="" onClick={() => toggleView("grid")}>
            <RoundGridIcon
              className={`h-7 w-7 object-contain ${
                isGridView ? "bg-[#B88E2F]  rounded-lg p-1 h-8 w-8" : ""
              }`}
            />
          </div>
          <div className="" onClick={() => toggleView("list")}>
            <ViewListIcon
              className={`h-7 w-7 ${
                !isGridView ? "bg-[#B88E2F] rounded-lg p-1 h-8 w-8" : ""
              }`}
            />
          </div>
          <div className="w-[2px] h-8 bg-[#9F9F9F]/70 mx-2 "></div>
          <Typography as="p" className="text-base font-poppins">
            Showing {start + 1}–{Math.min(end, sortedProducts.length)} of{" "}
            {sortedProducts.length} results
          </Typography>
        </div>

        <div className="flex flex-row gap-8 justify-center items-center">
          <div className="flex flex-row gap-3 items-center">
            <p className="text-xl md:ml-4">Show</p>
            <Dropdown
              options={showAsOptions}
              selectedValue={productsPerPage}
              onChange={handleShowAsChange}
            />
          </div>
          <div className="flex flex-row gap-3 items-center">
            <p className="text-xl">Sort</p>
            <Dropdown
              options={options}
              selectedValue={sortOption}
              onChange={handleSortChange}
            />
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
