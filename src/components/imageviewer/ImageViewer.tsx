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

  const [selectedIndex, setSelectedIndex] = useState(0); 

  const handleNextImage = () => {
    if (selectedIndex < productDetails.productGallery.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    } else {
      setSelectedIndex(0);
    }
    setSelectedImage(productDetails.productGallery[selectedIndex].imageUrl);
  };

  const handlePrevImage = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    } else {
      setSelectedIndex(productDetails.productGallery.length - 1); 
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
    <div className="flex flex-col-reverse gap-6 w-full  lg:flex-row py-5 px-4 md:p-3 lg:py-0 lg:px-4 lg:w-1/2">
      <div className="flex flex-row gap-6 lg:flex-col lg:gap-2 items-center">
        {productDetails?.productGallery.map((image, index) => (
          <div
            key={index}
            className="h-[60px] w-[60px] cursor-pointer"
            onMouseEnter={() => setSelectedImage(image.imageUrl)}
          >
            <Image
              height={60}
              width={60}
              priority={true}
              src={image.imageUrl}
              alt={`Thumbnail ${index}`}
              className=" w-full h-full object-cover rounded-md"
            />
          </div>
        ))}
      </div>

      <div className="relative w-full h-auto">
        <div className="w-full h-[517px]">
          <Image
            priority={true}
            height={517}
            width={517}
            src={selectedImage}
            alt="alt"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute bottom-4 right-4 flex gap-2">
          <button
            className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
            onClick={handlePrevImage}
          >
            &lt;
          </button>
          <button
            className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
            onClick={handleNextImage}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageViewer;
