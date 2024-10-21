import Footer from "@/src/components/common/Footer";
import ProductsListControl from "@/src/components/productslistcontrol/ProductsListControl";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <ProductsListControl />
      <Footer />
    </Suspense>
  );
};

export default page;
