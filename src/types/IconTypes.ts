import { Cart } from "../hooks/useCartApi";

export interface IconProps {
  className?: string;
}

export interface ImageViewerProps {
  images: string[];
}

export interface Color {
  name: string;
  value: string;
}

export interface Image {
  alt: string;
  image: string;
}

export interface ImageForApi {
  alt: string;
  imageUrl: string;
}

export interface Review {
  name: string;
  feedback: string;
}

export interface ShareLinks {
  facebook: string;
  linkedin: string;
  twitter: string;
}

export interface sizes {
  size: string;
  stock: number;
}
export interface ProductHel {
  id?: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number | null;
  src: string;
  discount: string | null;
  reviews: number;
  rating: number;
  sku: string;
  category: string;
  tags: string[];
  shareLinks: ShareLinks;
  sizes: string[];
  colors: Color[];
  productGallery: Image[];
  descriptionImages: Image[];
}

export interface ProductForApi {
  id: string;
  name: string;
  desc: string;
  price: number;
  originalPrice: number | null;
  src: string;
  specialMention: string | null;
  reviews: Review[];
  rating: number;
  category: string;
  sizes: sizes[];
  productGallery: ImageForApi[];
  descriptionImages: ImageForApi[];
}

export interface SingleProductComponentsProp {
  productDetails: ProductForApi;
  category?: string;
  isLoading?: boolean;
  isSuccess?: boolean;
}

export interface cartItem {
  product: ProductForApi;
  quantity: number;
  productId: string;
  productsOfCart?: Cart;
}

export interface userSessionProp {
  name: string;
  token: string;
  id: string;
}
export interface Filters {
  gender: string[];
  priceRange: string[];
  saleOffers: string[];
  brand: string[];
}

export interface QueryRequest {
  SortBy: string;
  IsDescending: boolean;
  PageNumber: number;
  PageSize:number;
}