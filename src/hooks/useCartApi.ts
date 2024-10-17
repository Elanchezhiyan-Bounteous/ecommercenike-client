import { useMutation, useQuery } from "@tanstack/react-query";
import { cartItem } from "../types/IconTypes";
import { useGetProductsById } from "./useProduct";

export interface Product {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Cart {
  cartId: string;
  userId: string;
  products: Product[];
}

const addToCart = async (
  userId: string,
  productId: string,
  quantity: number
): Promise<{ token: string; username: string }> => {
  const response = await fetch("http://localhost:5266/api/cart/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId, productId, quantity }),
  });

  if (!response.ok) {
    throw new Error("Add to cart failed");
  }

  const data = await response.json();
  console.log("Add to cart success", data);
  return data;
};

const getAllProductsInCart = async (id: string) => {
  const response = await fetch(`http://localhost:5266/api/cart/${id}`);
  const productsData = response.json();
  console.log("cart Data", productsData);
  return productsData;
};

const useAddToCart = () => {
  return useMutation({
    mutationFn: async (cart: {
      userId: string;
      productId: string;
      quantity: number;
    }) => {
      console.log("hello", cart.userId, cart.productId, cart.quantity);
      const response = addToCart(cart.userId, cart.productId, cart.quantity);
      return response;
    },
   
    onSuccess: (response) => {
      console.log(response);
    },
    onError: (response) => {
      console.log("add to cart failed", response.message);
    },
    
  });
};

const useGetAllProductsInCart = (id: string) => {
  return useQuery({
    queryKey: ["getcart", id],
    queryFn: () => getAllProductsInCart(id),
    staleTime: 0,
    
  });
};

export { useAddToCart, useGetAllProductsInCart };
