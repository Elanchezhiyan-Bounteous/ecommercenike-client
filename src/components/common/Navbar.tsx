"use client";
import React, { useState } from "react";
import FurniroLogo from "../../../public/assets/icons/FurniroLogo";
import CartIcon from "../../../public/assets/icons/CartIcon";
import HeartIcon from "../../../public/assets/icons/HeartIcon";
import ProfileAlertIcon from "../../../public/assets/icons/ProfileAlertIcon";
import SearchIcon from "../../../public/assets/icons/SearchIcon";
import Link from "next/link";
import { TbMenuDeep } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import { Typography } from "./Typography";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="w-full bg-white text-black justify-between font-montserrat items-center flex flex-row px-4 md:px-14 py-6">
      <div className="flex flex-row items-center gap-1">
        <FurniroLogo />
        <Typography as="h1" className="text-3xl font-bold">
          Furniro
        </Typography>
      </div>

      <div className="hidden lg:pl-24 lg:flex flex-row md:gap-20 items-center">
        <Link href="/home">
          <Typography as="p" className="text-base font-poppins font-medium">
            Home
          </Typography>
        </Link>
        <Link href="/shop">
          <Typography as="p" className="text-base font-poppins font-medium">
            Shop
          </Typography>
        </Link>
        <Link href="/about">
          <Typography as="p" className="text-base font-poppins font-medium">
            About
          </Typography>
        </Link>
        <Link href="/contact">
          <Typography as="p" className="text-base font-poppins font-medium">
            Contact
          </Typography>
        </Link>
      </div>
      <div className="hidden lg:flex flex-row gap-12 items-center">
        <ProfileAlertIcon className="w-7 h-7" />
        <SearchIcon className="w-7 h-7" />
        <HeartIcon className="w-7 h-7" />
        <div>
          <CartIcon className="w-7 h-7" />
        </div>
      </div>

      <button className="lg:hidden flex items-center" onClick={toggleDrawer}>
        <TbMenuDeep className="w-8 h-8" />
      </button>

      <div
        className={`fixed top-0 right-0 h-full bg-white w-[75%] z-50 transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-md`}
      >
        <div className="flex justify-between items-center p-6">
          <Typography as="span" className="text-3xl font-medium">
            Furniro
          </Typography>
          <button onClick={toggleDrawer}>
            <IoMdClose className="w-6 h-6" />
          </button>
        </div>

        <ul className="flex flex-col gap-y-6 font-medium items-start text-[18px] p-6">
          <li>
            <Link href="/" onClick={toggleDrawer}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" onClick={toggleDrawer}>
              Shop
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={toggleDrawer}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={toggleDrawer}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleDrawer}
        ></div>
      )}
    </header>
  );
};

export default Navbar;
