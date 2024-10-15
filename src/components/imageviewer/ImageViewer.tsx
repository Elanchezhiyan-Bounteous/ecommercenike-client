"use client";

import { SingleProductComponentsProp } from "@/src/types/IconTypes";
import Image from "next/image";
import { useEffect, useState } from "react";

const ImageViewer = ({
  productDetails,
  isLoading,
  isSuccess,
}: SingleProductComponentsProp) => {
  const [selectedImage, setSelectedImage] = useState<string>();

  useEffect(() => {
    if (isSuccess) {
      setSelectedImage(productDetails?.productGallery[0].imageUrl);
    }
  }, [productDetails]);

  const [selectedIndex, setSelectedIndex] = useState(0); // Track current image index

  const handleNextImage = () => {
    if (selectedIndex < productDetails.productGallery.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    } else {
      setSelectedIndex(0); // Loop back to the first image
    }
    setSelectedImage(productDetails.productGallery[selectedIndex].imageUrl);
  };

  const handlePrevImage = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    } else {
      setSelectedIndex(productDetails.productGallery.length - 1); // Loop back to the last image
    }
    setSelectedImage(productDetails.productGallery[selectedIndex].imageUrl);
  };

  if (isLoading || !selectedImage) {
    return (
      <div className="flex flex-col-reverse md:flex-row md:px-8 md:py-2 lg:py-5 lg:px-4 gap-4 justify-around w-full lg:w-1/2 animate-pulse">
        <div className="flex flex-row md:flex-col gap-2 justify-between items-start w-full md:w-auto">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="w-24 h-20 bg-gray-300 rounded-lg"></div>
          ))}
        </div>
        <div className="w-full max-w-lg h-96 bg-gray-300 rounded-lg"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col-reverse lg:flex-row py-5 px-8 md:p-3 lg:py-5 lg:px-4 gap-2 justify-around w-full lg:w-1/2">
      <div className="flex flex-row lg:flex-col gap-2 justify-between items-start">
        {productDetails?.productGallery.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer w-full"
            onMouseEnter={() => setSelectedImage(image.imageUrl)}
          >
            <div className="h-[60px] w-[60px]">
              <Image
                height={60}
                width={60}
                src={image.imageUrl}
                alt={`Thumbnail ${index}`}
                className=" w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Main image section */}
      <div className="relative w-full max-w-lg h-auto">
        <Image
          height={480} // Increase the size of the main image
          width={480}
          src={selectedImage}
          alt="Selected"
          className="w-full h-full object-contain"
        />

        {/* Navigation buttons at the right corner */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          <button
            className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
            onClick={handlePrevImage}
          >
            {/* Previous Button Icon */}
            &lt;
          </button>
          <button
            className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
            onClick={handleNextImage}
          >
            {/* Next Button Icon */}
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageViewer;
