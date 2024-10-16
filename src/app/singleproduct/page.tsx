"use client"

import BreadCrumbNavigation from "@/src/components/breadcrumbnavigation/BreadCrumbNavigation";
import ImageViewer from "@/src/components/imageviewer/ImageViewer";
import ProductDetailSection from "@/src/components/productdetailsection/ProductDetailSection";
import ProductInformationSection from "@/src/components/productinformationsection/ProductInformationSection";
import RelatedProductsSection from "@/src/components/relatedproductsection/RelatedProductsSection";
import { useGetProductsById } from "@/src/hooks/useProduct";
import { ProductForApi } from "@/src/types/IconTypes";
import { useSearchParams } from "next/navigation";
import React from "react";

const SingleProduct = () => {
 
  const searchParams = useSearchParams();
  const productId = searchParams.get("id") ?? "21";
  const { data: product, isSuccess, isLoading } = useGetProductsById(productId);

  return (
    <>
      <BreadCrumbNavigation productDetails={product as ProductForApi} isLoading={isLoading} />
      <div className="flex flex-col py-4 lg:flex-row lg:items-start md:px-4 lg:px-28 lg:pb-10 md:gap-4">
        <ImageViewer productDetails={product as ProductForApi} isLoading={isLoading} isSuccess={isSuccess} />
        <ProductDetailSection productDetails={product as ProductForApi}  />
      </div>
      <hr />
      <ProductInformationSection productDetails={product as ProductForApi} isLoading={isLoading}  />
      <RelatedProductsSection productDetails={product as ProductForApi} isLoading={isLoading}  />
    </>
  );
};

export default SingleProduct;