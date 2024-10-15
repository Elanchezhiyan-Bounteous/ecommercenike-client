import React from "react";

interface ProductsListPageSkeletonProps {
  isGridView: boolean;
}

const ProductsListPageSkeleton = ({isGridView}:ProductsListPageSkeletonProps) => {
  return (
    <div className="flex flex-col gap-5 md:gap-0">
      {isGridView ? (
        <div
          className={`grid grid-cols-1 gap-y-10 px-8 py-5 md:grid-cols-3 lg:grid-cols-4 md:gap-y-10 md:gap-x-8 lg:gap-x-10 md:px-10 lg:px-40  md:py-10 lg:py-16 transition-opacity duration-300`}
        >
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="w-full relative animate-pulse bg-gray-200 p-4 rounded-md"
            >
              <div className="w-full h-48 bg-gray-300 rounded-md"></div>
              <div className="flex flex-col gap-2 mt-4">
                <div className="h-6 w-3/4 bg-gray-300 rounded-md"></div>
                <div className="h-4 w-2/4 bg-gray-300 rounded-md"></div>
                <div className="h-6 w-1/4 bg-gray-300 rounded-md mt-2"></div>
              </div>
              <div className="absolute inset-0 flex flex-col gap-4 justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-10 w-28 bg-gray-300 rounded-md"></div>
                <div className="flex flex-row gap-6 text-white items-center">
                  <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                  <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                  <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-8 px-8 py-5 md:px-40 md:py-16">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="w-full flex flex-col md:flex-row gap-6 items-center bg-gray-200 p-5 rounded-lg shadow-md animate-pulse"
            >
              <div className="w-full h-48 md:w-48 bg-gray-300 rounded-md"></div>
              <div className="flex flex-col gap-2 flex-1">
                <div className="h-6 w-3/4 bg-gray-300 rounded-md"></div>
                <div className="h-4 w-2/4 bg-gray-300 rounded-md"></div>
                <div className="h-6 w-1/4 bg-gray-300 rounded-md"></div>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <div className="h-10 w-28 bg-gray-300 rounded-md"></div>
                <div className="flex flex-row gap-6 text-gray-600">
                  <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                  <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                  <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsListPageSkeleton;
