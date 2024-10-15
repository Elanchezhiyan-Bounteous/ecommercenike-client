import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-10 px-8 font-Poppins">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-10">
          <h2 className="text-2xl font-semibold">Funiro.</h2>
          <address className="not-italic text-gray-500 text-sm">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </address>
        </div>

        <div className="flex flex-col gap-10">
          <h3 className="text-gray-400 font-semibold ">Links</h3>
          <ul className="space-y-8 font-medium">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">Shop</li>
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </div>

        <div className="flex flex-col gap-10">
          <h3 className="text-gray-400 font-semibold">Help</h3>
          <ul className="space-y-8 font-medium">
            <li className="hover:underline cursor-pointer">Payment Options</li>
            <li className="hover:underline cursor-pointer">Returns</li>
            <li className="hover:underline cursor-pointer">Privacy Policies</li>
          </ul>
        </div>

        <div className="flex flex-col gap-10">
          <h3 className="text-gray-400 font-semibold">Newsletter</h3>
          <div className="flex flex-row items-center gap-x-4">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="border-b border-gray-800 py-2 w-full"
            />
            <Button
              variant="v4"
              size="medium"
              value="Subscribe"
              className="py-2"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-10 text-center border-t border-gray-200 pt-4 text-sm font-medium flex justify-start">
        <p>2023 Funiro. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
