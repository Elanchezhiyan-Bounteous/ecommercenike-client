import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { cartItem } from "../types/IconTypes";
import { useGetProductsById } from "./useProduct";
import { useAtom } from "jotai";
import { userAtom } from "../lib/authAtoms";

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
  quantity: number,
  token: string
) => {
  const response = await fetch("http://localhost:5266/api/cart/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
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

const deleteProductFromCart = async (
  productId: string,
  userId: string,
  token: string
) => {
  const response = await fetch(
    `http://localhost:5266/api/cart/${userId}/${productId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Product hasnt been removed from Cart");
  }
  console.log("Deleted From Cart");
};

const getAllProductsInCart = async (
  userId: string,
  token: string
): Promise<Cart> => {
  const response = await fetch(`http://localhost:5266/api/cart/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const productsData = response.json();
  console.log("cart Data", productsData);
  return productsData;
};

const useAddToCart = () => {
  const queryClient = useQueryClient();
  const [userSession] = useAtom(userAtom);
  const token = userSession.token;
  const userId = userSession.id;
  return useMutation({
    mutationFn: async (cart: { productId: string; quantity: number }) => {
      const response = addToCart(userId, cart.productId, cart.quantity, token);
      return response;
    },

    onSuccess: (response) => {
      const data = response;
      queryClient.setQueryData(["getcart", { id: response.userId }], data);
      queryClient.refetchQueries({ queryKey: ["getcart"], type: "active" });
    },
    onError: (response) => {
      console.log("add to cart failed", response.message);
    },
  });
};

const useDeleteProductFromCart = () => {
  const queryClient = useQueryClient();
  const [userSession] = useAtom(userAtom);
  const token = userSession.token;
  const userId = userSession.id;

  return useMutation({
    mutationFn: async (cart: { productId: string }) => {
      const response = deleteProductFromCart(cart.productId, userId, token);
      return response;
    },

    onSuccess: (response) => {
      const data = response;
      queryClient.refetchQueries({ queryKey: ["getcart"], type: "active" });
    },
    onError: (response) => {
      console.log("Delet from cart failed", response.message);
    },
  });
};

const useGetAllProductsInCart = () => {
  const [userSession] = useAtom(userAtom);
  const token = userSession.token;
  const userId = userSession.id;
  return useQuery({
    queryKey: ["getcart", userId],
    queryFn: () => getAllProductsInCart(userId, token),
    staleTime: 0,
    refetchOnWindowFocus: true,
  });
};

export { useAddToCart, useGetAllProductsInCart, useDeleteProductFromCart };
