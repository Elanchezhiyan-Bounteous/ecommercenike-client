import { useQuery } from "@tanstack/react-query";
import { ProductForApi } from "../types/IconTypes";

const getAllProducts = async (): Promise<ProductForApi[]> => {
  const response = await fetch("http://localhost:5113/api/product/");
  const productsData = response.json();
  console.log("data", productsData)

  return productsData;
};

const getProductById = async (id: string): Promise<ProductForApi> => {
  const response = await fetch(`http://localhost:5113/api/product/${id}`);
  const productsData = response.json();
  console.log("data by id", productsData)
  return productsData;
};


const getProductByCategory = async (category: string): Promise<ProductForApi[]> => {
  const response = await fetch(`http://localhost:5113/api/product/${category}`);
  const productsData = response.json();
  console.log("data by id", productsData)
  return productsData;
};


const useGetAllProducts = () => {
  return useQuery({
    queryKey: ["product"],
    queryFn: () => getAllProducts(),
    staleTime: 0,
  });
  
};

const useGetProductsById = (id: string) => {
  return useQuery({
    queryKey: ["productbyid",id],
    queryFn: () => getProductById(id),
    staleTime: 0,
  });
};

const useGetProductsByCategory = (category: string) => {
  return useQuery({
    queryKey: ["productbycategory",category],
    queryFn: () => getProductByCategory(category),
    staleTime: 0,
  });
};



export { useGetAllProducts, useGetProductsById, useGetProductsByCategory };
