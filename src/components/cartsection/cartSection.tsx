"use client";

import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../components/ui/drawer";
import { ShoppingCart, X } from "lucide-react";
import { cartItem, ProductForApi } from "@/src/types/IconTypes";
import { useAtom } from "jotai";
import { cartAtom, isCartVisibleAtom } from "@/src/lib/cartAtoms";
import { useMediaQuery } from "react-responsive";
import { useCart } from "@/src/hooks/useCart";
import { useAddToCart } from "@/src/hooks/useCartApi";
import { userAtom } from "@/src/lib/authAtoms";

export default function CartSection({
  productId,
  quantity,
  product,
}: cartItem) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems] = useAtom<cartItem[]>(cartAtom);
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const { deleteProductFromCart } = useCart();
  const [isCartVisible] = useAtom(isCartVisibleAtom);
  const addToCart = useAddToCart();
  const [userSession] = useAtom(userAtom);
  const userId = userSession.id;

  const subtotal = cartItems.reduce(
    (sum: number, item: cartItem) => sum + item?.product.price * item.quantity,
    0
  );

  const CartContent = () => (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        {cartItems.map((item: cartItem) => (
          <div
            key={item.product.id}
            className="flex items-center justify-between py-4 border-b"
          >
            <div className="flex-1">
              <h3 className="font-semibold">{item.product.name}</h3>
              <p className="text-sm text-gray-500">QTY: {item.quantity}</p>
            </div>
            <div className="flex items-center">
              <span className="mr-4">${item.product.price}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  deleteProductFromCart(product);
                }}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-auto pt-4">
        <div className="flex justify-between py-2">
          <span className="font-semibold">Subtotal:</span>
          <span>${subtotal}</span>
        </div>
        <p className="text-sm text-gray-500 mb-4">
          Shipping and taxes are calculated at checkout.
        </p>
        <Button className="w-full mb-2">Checkout</Button>
        <Button
          variant="outline"
          className="w-full"
          onClick={() => setIsOpen(false)}
        >
          Continue Shopping
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {isLargeScreen ? (
        <div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                onClick={() => {
                  addToCart.mutate({ productId, userId, quantity });
                }}
              >
                Add to Cart
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px]">
              <SheetHeader>
                <SheetTitle>Shopping Cart</SheetTitle>
              </SheetHeader>
              <CartContent />
            </SheetContent>
          </Sheet>
        </div>
      ) : (
        <div>
          <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger asChild>
              <Button variant="outline">Add to Cart</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Shopping Cart</DrawerTitle>
              </DrawerHeader>
              <div className="px-4">
                <CartContent />
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      )}
    </>
  );
}

// const [cartItems] = useAtom<cartItem[]>(cartAtom);
//   const setIsCartVisible = useSetAtom(isCartVisibleAtom);
