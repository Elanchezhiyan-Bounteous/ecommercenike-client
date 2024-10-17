import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
  cartAtom,
  cartItemsQuantityAtom,
  isCartVisibleAtom,
} from "../lib/cartAtoms";
import { cartItem, ProductForApi } from "../types/IconTypes";

export const useCart = () => {
  const [cartItems, setCartItems] = useAtom<cartItem[]>(cartAtom);
  const cartItemsQuantity = useAtomValue(cartItemsQuantityAtom);
  const setIsCartVisible = useSetAtom(isCartVisibleAtom);

  // const addProductsToCart = ({ product, quantity }: cartItem) => {
  //   const currentCartItem = cartItems.find(
  //     (cartItem) => cartItem.product.id === product.id
  //   );
  //   if (currentCartItem) {
  //     const updatedCartItems = cartItems.map((cartItem) => {
  //       if (cartItem.product.id === product.id) {
  //         return { ...cartItem, quantity: cartItem.quantity + quantity };
  //       }
  //       return cartItem;
  //     });
  //     setIsCartVisible(true);
  //     setCartItems(updatedCartItems);
  //     return;
  //   }
  //   setIsCartVisible(true);
  //   setCartItems((prevValue) => [
  //     ...prevValue,
  //     { product: product, quantity: quantity },
  //   ]);
  // };

  const deleteProductFromCart = (product:ProductForApi) => {
    const filteredItems =  cartItems.filter(cartItem => cartItem.product.id !== product.id)
    setCartItems(filteredItems);
  }

  return {  deleteProductFromCart,  cartItemsQuantity };
};
