import FeatureSection from "@/src/components/featuresection/FeatureSection";
import HeroSection from "@/src/components/herosection/HeroSection";
import ProductsListControl from "@/src/components/productslistcontrol/ProductsListControl";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <div className="">
        <HeroSection />
        <ProductsListControl />
        <FeatureSection />
      </div>
    </Suspense>
  );
};

export default page;
