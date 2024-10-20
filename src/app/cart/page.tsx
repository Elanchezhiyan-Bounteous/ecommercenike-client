"use client";

import { Typography } from "@/src/components/common/Typography";
import {
  Cart,
  useAddToCart,
  useDeleteProductFromCart,
  useGetAllProductsInCart,
} from "@/src/hooks/useCartApi";
import { userAtom } from "@/src/lib/authAtoms";
import { useAtom } from "jotai";
import React, { useState } from "react";

const CartPage = () => {
  const [products] = useState([
    {
      id: "1",
      name: "Coach Leather Bag",
      price: 54.69,
      quantity: 1,
      image: "/path/to/image.jpg",
    },
    {
      id: "2",
      name: "Coach Leather Bag",
      price: 54.69,
      quantity: 1,
      image: "/path/to/image.jpg",
    },
  ]);

  
  const {
    data: productsOfCart,
    isLoading,
    isSuccess,
  } = useGetAllProductsInCart();

  const deleteProduct = useDeleteProductFromCart();

  if (isLoading) {
    return <div>isLoading</div>;
  }

  return (
    <div className="flex flex-col md:flex-row justify-between px-14 py-10 pt-24 bg-gray-50">
      <div className="md:w-2/3">
        <h2 className="text-2xl font-bold mb-6">My Cart</h2>
        <table className="w-full text-left table-auto border-separate">
          <thead>
            <tr className="border-b">
              <th className="pb-2">Product Name</th>
              <th className="pb-2">Price</th>
              <th className="pb-2">Qty</th>
              <th className="pb-2">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {(productsOfCart as Cart)?.products?.map((item) => (
              <tr key={item.productId} className="border-b">
                <td className="py-4 flex items-center">
                  <div>
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-gray-600">Qty - {item.quantity}</p>
                    <div className="mt-2 flex flex-row gap-6">
                      <a href="#" className="text-blue-600 mr-4">
                        Move to Wishlist
                      </a>
                      <div
                        onClick={() =>
                          deleteProduct.mutate({
                          
                            productId: item.productId,
                          })
                        }
                      >
                        <a href="#" className="text-red-600">
                          Remove
                        </a>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4">${item.price.toFixed(2)}</td>
                <td className="py-4 text-center">{item.quantity}</td>
                <td className="py-4">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-6">
          <Typography as="h3" className="text-lg font-bold mb-2">
            Apply Coupon Code
          </Typography>
          <div className="flex items-center w-full max-w-sm">
            <input
              type="text"
              placeholder="Apply Coupon Code"
              className="border rounded-l-lg p-2 w-full focus:outline-none"
            />
            <button className="bg-gray-300 px-4 py-2 rounded-r-lg text-sm font-semibold">
              CHECK
            </button>
          </div>
        </div>
      </div>

      <div className="md:w-1/3 bg-white p-6 rounded-lg">
        <Typography as="h3" className="text-xl font-bold mb-4">
          Order Summary
        </Typography>
        <div className="flex justify-between mb-2">
          <Typography as="p">Sub Total</Typography>
          <Typography as="p">
            $
            {(productsOfCart as Cart)?.products
              .reduce((acc, p) => acc + p.price * p.quantity, 0)
              .toFixed(2)}
          </Typography>
        </div>
        <div className="flex justify-between mb-2">
          <Typography as="p">Discount</Typography>
          <Typography as="p" className="text-red-600">
            - Rs00.00
          </Typography>
        </div>
        <div className="flex justify-between mb-4">
          <Typography as="p">Delivery Fee</Typography>
          <Typography as="p" className="text-gray-600">
            - $0.00
          </Typography>
        </div>
        <div className="flex justify-between font-bold text-lg">
          <Typography as="p">Grand Total</Typography>
          <Typography as="p">$106.29</Typography>
        </div>

        <div className="mt-6">
          <button className="bg-blue-900 text-white px-4 py-2 rounded-lg w-full mb-3">
            Place Order
          </button>
          <button className="bg-gray-200 px-4 py-2 rounded-lg w-full">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
