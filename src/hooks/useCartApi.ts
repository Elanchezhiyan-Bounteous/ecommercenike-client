import { useMutation } from "@tanstack/react-query";

const addToCart = async (
  userId: string,
  productId: string,
  quantity:number
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


const useAddToCart = () => {
  return useMutation({
    mutationFn: async (cart: { userId: string; productId: string; quantity:number }) => {
      const response = addToCart(cart.userId, cart.productId, cart.quantity);
      return response;
    },
    onSuccess: (response) => {
      console.log(response)
    },
    onError: (response) => {
      console.log("add to cart failed", response.message)
    }
  });
};

export { useAddToCart };
