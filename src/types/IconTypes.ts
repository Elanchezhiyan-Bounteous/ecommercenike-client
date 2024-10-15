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

export interface Product {
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
  id?: string;
  name: string;
  desc: string;
  price: number;
  originalPrice: number | null;
  src: string;
  discount: string | null;
  reviews: Review[];
  rating: number;
  sku: string;
  category: string;
  tags: string[];
  sizes: string[];
  colors: Color[];
  productGallery: ImageForApi[];
  descriptionImages: ImageForApi[];
}

export interface SingleProductComponentsProp {
  productDetails: ProductForApi;
  isLoading?: boolean;
  isSuccess?: boolean;
}
