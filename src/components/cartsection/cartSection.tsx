"use client";

import { cartInfo, closeCart } from "@/src/lib/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/src/lib/hooks";
import React from "react";

const CartSection = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(cartInfo);
  const handleCloseCart = () => {
    dispatch(closeCart());
  }
  console.log(cartItems);
  return (
    <div className="fixed right-0 top-0 w-96 bg-white shadow-lg p-5 rounded-lg z-50">
      <button onClick={handleCloseCart} className="absolute top-2 right-2">X</button>
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      <div className="flex flex-col space-y-4">
        {cartItems.items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-3 border rounded-lg"
          >
            <div className="flex items-center space-x-2">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">
                  {item.quantity} x Rs. {item.price.toLocaleString()}
                </p>
              </div>
            </div>
            <button className="text-gray-500 hover:text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 10h-2v2a1 1 0 002 0v-2zm-1-10a7 7 0 100 14 7 7 0 000-14z" />
              </svg>
            </button>
          </div>
        ))}
      </div>
      <hr className="my-4" />
      <div className="flex justify-between text-lg font-semibold">
        <span>Subtotal</span>
      </div>
      <div className="mt-4 flex space-x-4">
        <button className="flex-1 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
          Cart
        </button>
        <button className="flex-1 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
          Checkout
        </button>
        <button className="flex-1 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
          Comparison
        </button>
      </div>
    </div>
  );
};

export default CartSection;
