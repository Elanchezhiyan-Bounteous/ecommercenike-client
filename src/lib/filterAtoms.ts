import { atom } from "jotai";
import { ProductForApi } from "../types/IconTypes";
interface Filters {
  gender: string[];
  priceRange: string[];
  saleOffers: string[];
  brand: string[];
}


export const showFilterAtom = atom<boolean>(false);
export const filterAtom = atom<Filters>({
  gender: [],
  priceRange: [],
  saleOffers: [],
  brand:[],
});

export const filteredProductsAtom = atom<ProductForApi[]>();