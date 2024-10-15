import React from 'react'


const FilterSectionSkeleton = () => {
  return (
    <div className="h-40 md:h-24 bg-[#F9F1E7] flex flex-col gap-8 justify-center px-6 md:flex-row md:justify-between md:px-6 lg:px-28 md:items-center animate-pulse">
      <div className="flex flex-row gap-6 items-center">
        <div className="flex flex-row justify-between gap-2">
          <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
          <div className="h-6 w-24 bg-gray-300 rounded"></div>
        </div>
        <div className="h-7 w-7 bg-gray-300 rounded"></div>
        <div className="h-7 w-7 bg-gray-300 rounded"></div>
        <div className="w-[2px] h-8 bg-gray-300 mx-2"></div>
        <div className="h-6 w-40 bg-gray-300 rounded"></div>
      </div>
      <div className="flex flex-row gap-8 items-center">
        <div className="flex flex-row gap-3 items-center">
          <div className="h-6 w-12 bg-gray-300 rounded"></div>
          <div className="h-10 w-24 bg-gray-300 rounded"></div>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <div className="h-6 w-12 bg-gray-300 rounded"></div>
          <div className="h-10 w-24 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export default FilterSectionSkeleton
