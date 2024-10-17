import { useQuery } from "@tanstack/react-query";
import { ProductForApi, userSessionProp } from "../types/IconTypes";
import { useAtom } from "jotai";
import { userAtom } from "../lib/authAtoms";

const getAllProducts = async (userSession: userSessionProp): Promise<ProductForApi[]> => {
  const response = await fetch("http://localhost:5266/api/product");
  const productsData = response.json();
  console.log("token", userSession.token)
  return productsData;
};

const getProductById = async (id: string): Promise<ProductForApi> => {
  const response = await fetch(`http://localhost:5266/api/product/${id}`);
  const productsData = response.json();
  console.log("data by id", productsData);
  return productsData;
};

const getProductByCategory = async (
  category: string
): Promise<ProductForApi[]> => {
  const response = await fetch(`http://localhost:5266/api/product/${category}`);
  const productsData = response.json();
  console.log("data by id", productsData);
  return productsData;
};

const useGetAllProducts = () => {
  const [userSession, setUserSession] = useAtom(userAtom);
  return useQuery({
    queryKey: ["product"],
    queryFn: () => getAllProducts(userSession),
    staleTime: 0,
  });
};

const useGetProductsById = (id: string) => {
  return useQuery({
    queryKey: ["productbyid", id],
    queryFn: () => getProductById(id),
    staleTime: 0,
  });
};

const useGetProductsByCategory = (category: string) => {
  return useQuery({
    queryKey: ["productbycategory", category],
    queryFn: () => getProductByCategory(category),
    staleTime: 0,
  });
};

export { useGetAllProducts, useGetProductsById, useGetProductsByCategory };
