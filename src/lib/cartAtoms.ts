import { atom } from "jotai";
import { cartItem } from "../types/IconTypes";

export const cartAtom = atom<cartItem[]>([]);

export const isCartVisibleAtom = atom<boolean>(false);

export const cartItemsQuantityAtom = atom<number>((get) => {
  const cartItems = get(cartAtom);
  const totalQuantity = cartItems.reduce((total, cartItem: cartItem) => {
    return total + cartItem.quantity;
  }, 0);
  return totalQuantity;
});
