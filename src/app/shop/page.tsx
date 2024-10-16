import ProductsListControl from "@/src/components/productslistcontrol/ProductsListControl";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <div className="">
        <ProductsListControl />
      </div>
    </Suspense>
  );
};

export default page;
