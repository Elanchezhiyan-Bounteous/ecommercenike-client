import { useQuery } from "@tanstack/react-query";
import { ProductForApi, userSessionProp } from "../types/IconTypes";
import { useAtom } from "jotai";
import { filterAtom } from "../lib/filterAtoms";
interface Filters {
  gender: string[];
  priceRange: string[];
  saleOffers: string[];
  brand: string[];
}

const getAllProducts = async (filter: Filters): Promise<ProductForApi[]> => {
  const response = await fetch("http://localhost:5266/api/product/filter", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(filter),
  });
  const productsData = response.json();
  console.log("hooks", filter);
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

const useGetAllProducts = (filter: Filters) => {
  const [filtersfromjot, setFilter] = useAtom(filterAtom);
  console.log("use",filtersfromjot)
  return useQuery({
    queryKey: ["filter"],
    queryFn: () => getAllProducts(filtersfromjot),
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
