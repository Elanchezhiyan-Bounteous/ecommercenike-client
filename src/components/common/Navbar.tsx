"use client";
import React, { useState } from "react";
import CartIcon from "../../../public/assets/icons/CartIcon";
import HeartIcon from "../../../public/assets/icons/HeartIcon";
import ProfileAlertIcon from "../../../public/assets/icons/ProfileAlertIcon";
import SearchIcon from "../../../public/assets/icons/SearchIcon";
import Link from "next/link";
import { TbMenuDeep } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import { Typography } from "./Typography";
import { useAtom } from "jotai";
import { showFilterAtom } from "@/src/lib/filterAtoms";
import { isAuthenticatedAtom, removeUser, userAtom } from "@/src/lib/authAtoms";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../../components/ui/hover-card";

import {
  Cart,
  useAddToCart,
  useGetAllProductsInCart,
} from "@/src/hooks/useCartApi";
import { useRouter } from "next/navigation";
import { cn } from "@/src/utils/cn";

const Navbar = () => {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showFilter] = useAtom(showFilterAtom);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };


  const {
    data: productsOfCart,
    isLoading,
    isSuccess,
  } = useGetAllProductsInCart();
  
  const [isAuthenticated, setIsAuthenticated] = useAtom(isAuthenticatedAtom);

  return (
    <header className="fixed z-50 w-full bg-white text-black justify-between font-montserrat items-center flex flex-row px-4 md:px-14 py-4">
      <div className="flex flex-row items-center gap-1">
        <svg
          aria-hidden="true"
          className="w-8 h-8"
          focusable="false"
          viewBox="0 0 24 24"
          role="img"
          width="24px"
          height="24px"
          fill="none"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
            clipRule="evenodd"
          ></path>
        </svg>
        <Typography as="h1" className="text-3xl font-bold">
          Nike
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
        <HoverCard>
          <HoverCardTrigger className="cursor-pointer">
            <ProfileAlertIcon className="w-7 h-7 " />
          </HoverCardTrigger>
          {isAuthenticated ? (
            <HoverCardContent
              className="w-24 cursor-pointer"
              onClick={() => {
                {
                  router.push("/shop");
                }
                removeUser();
                setIsAuthenticated(false);
              }}
            >
              Logout
            </HoverCardContent>
          ) : (
            <HoverCardContent
              className="w-24 cursor-pointer"
              onClick={() => {
                router.push("login");
              }}
            >
              Login!
            </HoverCardContent>
          )}
        </HoverCard>

        <SearchIcon className="w-7 h-7" />
        {isAuthenticated && (productsOfCart as Cart)?.products.length > 0 ? (
          <div className="relative inline-block">
            <HeartIcon className="w-7 h-7" />
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-black text-white text-xs font-bold rounded-full w-7 h-7 flex items-center justify-center">
              {(productsOfCart as Cart)?.products.length}
            </span>
          </div>
        ) : (
          <HeartIcon className="w-7 h-7" />
        )}

        {isAuthenticated && (productsOfCart as Cart)?.products.length > 0 ? (
          <div
            className="relative inline-block cursor-pointer"
            onClick={() => {
              router.push("/cart");
            }}
          >
            <CartIcon className="w-7 h-7" />
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-black text-white text-xs font-bold rounded-full w-7 h-7 flex items-center justify-center">
              {(productsOfCart as Cart)?.products.length}
            </span>
          </div>
        ) : (
          <CartIcon className="w-7 h-7" />
        )}
      </div>

      <button
        className="lg:hidden flex flex-row gap-6 items-center"
        onClick={toggleDrawer}
      >
        <TbMenuDeep className="w-8 h-8" />
        <div className="relative inline-block">
          <CartIcon className="w-7 h-7" />
          <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-black text-white text-xs font-bold rounded-full w-7 h-7 flex items-center justify-center">
            {(productsOfCart as Cart)?.products.length}
          </span>
        </div>
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
