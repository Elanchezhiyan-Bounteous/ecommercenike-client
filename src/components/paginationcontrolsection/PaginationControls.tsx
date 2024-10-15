"use client";

import { FC } from "react";

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationControls: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
  page,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <>
     <div className="flex flex-row justify-center gap-6 pb-10">
      <button
        className={`px-4 py-2 rounded ${
          hasPrevPage
            ? "bg-[#B88E2F] text-white"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
        disabled={!hasPrevPage}
        onClick={() => handlePageChange(page - 1)}
      >
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, index) => {
        const pageNumber = index + 1;
        const isSelected = page === pageNumber;
        return (
          <button
            key={index}
            className={`px-4 py-2 rounded ${
              isSelected
                ? "bg-[#B88E2F] text-white"
                : "hover:bg-[#B88E2F] hover:text-white"
            }`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}

      <button
        className={`px-4 py-2 rounded ${
          hasNextPage
            ? "bg-[#B88E2F] text-white"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
        disabled={!hasNextPage}
        onClick={() => handlePageChange(page + 1)}
      >
        Next
      </button>
    </div>
    </>
   
  );
};

export default PaginationControls;
