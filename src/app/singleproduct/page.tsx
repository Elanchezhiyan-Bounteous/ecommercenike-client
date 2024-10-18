"use client";

import BreadCrumbNavigation from "@/src/components/breadcrumbnavigation/BreadCrumbNavigation";
import ImageViewer from "@/src/components/imageviewer/ImageViewer";
import ProductDetailSection from "@/src/components/productdetailsection/ProductDetailSection";
import ProductInformationSection from "@/src/components/productinformationsection/ProductInformationSection";
import RelatedProductsSection from "@/src/components/relatedproductsection/RelatedProductsSection";
import { useGetProductsById } from "@/src/hooks/useProduct";
import { ProductForApi } from "@/src/types/IconTypes";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const SingleProduct = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get("id") ?? "21";
  const { data: product, isSuccess, isLoading } = useGetProductsById(productId);
  useEffect(() => {
    if (isSuccess) {
      console.log(product);
    }
  }, [isSuccess]);

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <>
      <BreadCrumbNavigation productDetails={product as ProductForApi} />
      <div className="flex flex-col py-4 lg:flex-row lg:items-start md:px-4 lg:px-28 lg:pb-10 lg:pt-16 md:gap-4">
        <ImageViewer
          productDetails={product as ProductForApi}
          isSuccess={isSuccess}
          isLoading={isLoading}
        />
        <ProductDetailSection productDetails={product as ProductForApi} />
      </div>
      <hr />
      <ProductInformationSection productDetails={product as ProductForApi} />
      <RelatedProductsSection productDetails={product as ProductForApi} />
    </>
  );
};

export default SingleProduct;
