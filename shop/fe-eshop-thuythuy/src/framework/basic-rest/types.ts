import { QueryKey } from "react-query";

export type CollectionsQueryOptionsType = {
  text?: string;
  collection?: string;
  status?: string;
  limit?: number;
};

export type CategoriesQueryOptionsType = {
  text?: string;
  category?: string;
  status?: string;
  limit?: number;
};
export type ProductsQueryOptionsType = {
  type: string;
  text?: string;
  category?: string;
  status?: string;
  limit?: number;
};
export type QueryOptionsType = {
  text?: string;
  category?: string;
  status?: string;
  limit?: number;
};

export type QueryParamsType = {
  queryKey: QueryKey;
  pageParam?: string;
};
export type Attachment = {
  id: number;
  thumbnail: string;
  original: string;
};
export type Category = {
  id: number;
  category_name: string;
  category_code?: bigint;
  slug: string;
  description?: string;
  image?: string;
  icon?: string;
  ShopProducts?: Product[];
  createdAt?: Date;
  updatedAt?: Date;
};
export type Collection = {
  id: number;
  name: string;
  slug: string;
  details?: string;
  image?: Attachment;
  icon?: string;
  products?: Product[];
  productCount?: number;
};
export type Brand = {
  id: number;
  name: string;
  slug: string;
  image?: Attachment;
  background_image?: any;
  [key: string]: unknown;
};
export type Tag = {
  id: number;
  name: string;
  slug: string;
};
export type Product = {
  id: number;
  product_name: string;
  size:string;
  color:string;
  slug: string;
  list_price: number;
  sale_price: number;
  quantity_per_unit: number;
  image: string;
  supplier_id?: number;
  categories_id?: number;
  description?: string;
  is_featured?: boolean;
  is_new?: boolean;
  ShopProductImages?: ShopProductImages[];
};

export type ShopProductImages = {
  id: number;
  product_id: number;
  image: string;
};
export type OrderItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};
export type Order = {
  id: number;
  name: string;
  slug: string;
  products: OrderItem[];
  total: number;
  tracking_number: string;
  customer: {
    id: number;
    email: string;
  };
  shipping_fee: number;
  payment_gateway: string;
};
