import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
): Promise<Cart> => {
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

const deleteProductFromCart = async (productId: string, userId: string) => {
  const response = await fetch(
    `http://localhost:5266/api/cart/${userId}/${productId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error("Product hasnt been removed from Cart");
  }
  console.log("Deleted From Cart");
};

const getAllProductsInCart = async (id: string): Promise<Cart> => {
  const response = await fetch(`http://localhost:5266/api/cart/${id}`);
  const productsData = response.json();
  console.log("cart Data", productsData);
  return productsData;
};

const useAddToCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (cart: {
      userId: string;
      productId: string;
      quantity: number;
    }) => {
      const response = addToCart(cart.userId, cart.productId, cart.quantity);
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
  return useMutation({
    mutationFn: async (cart: { productId: string; userId: string }) => {
      const response = deleteProductFromCart(cart.productId, cart.userId);
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

const useGetAllProductsInCart = (id: string) => {
  return useQuery({
    queryKey: ["getcart", id],
    queryFn: () => getAllProductsInCart(id),
    staleTime: 0,
    refetchOnWindowFocus: true,
  });
};

export { useAddToCart, useGetAllProductsInCart, useDeleteProductFromCart };
