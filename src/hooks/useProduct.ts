import { useQuery } from "@tanstack/react-query";
import {
  Filters,
  ProductForApi,
  QueryRequest,
  userSessionProp,
} from "../types/IconTypes";
import { useAtom } from "jotai";
import { filterAtom, queryAtom } from "../lib/filterAtoms";

const createQueryString = (params: any) => {
  return Object.keys(params)
    .map(
      (key) => encodeURIComponent(key) + "=" + encodeURIComponent(params[key])
    )
    .join("&");
};

const getAllProducts = async (
  filter: Filters,
  queryreq: QueryRequest
): Promise<ProductForApi[]> => {
  console.log("hooks", filter);
  const queryString = createQueryString(queryreq);
  console.log("query", queryString);
  const response = await fetch(
    `http://localhost:5266/api/product/filter?${queryString}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filter),
    }
  );
  const productsData = response.json();
  console.log(productsData, "response");
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
  const [queryreq] = useAtom(queryAtom);
  console.log("use", filtersfromjot);
  return useQuery({
    queryKey: ["filter"],
    queryFn: () => getAllProducts(filtersfromjot, queryreq),
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
