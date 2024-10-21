import { atom } from "jotai";
import { Filters, ProductForApi, QueryRequest } from "../types/IconTypes";

export const showFilterAtom = atom<boolean>(false);
export const filterAtom = atom<Filters>({
  gender: [],
  priceRange: [],
  saleOffers: [],
  brand: [],
});

export const queryAtom = atom<QueryRequest>({
  SortBy: "name",
  IsDescending: false,
  PageNumber: 1,
  PageSize: 4,
});

export const filteredProductsAtom = atom<ProductForApi[]>();
