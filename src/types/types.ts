export type BannerType = {
  id: number;
  title: string;
  imageUrl: string;
  isActive: boolean;
  createdAt: string;
};
export type productType = {
  id: number;
  name: string;
  description: string;
  price: string;
  stock: number;
  categoryId: number;
  createdAt: string;
  imageUrl: string;
};

export type CategoryType = {
  categoryId: number;
  createdAt: string;
  description: string;
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  stock: number;
};
export interface MyOrderItemsProductType {
  categoryId: number;
  createdAt: string;
  description: string;
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  stock: number;
}
export interface MyOrderItemsItemsType {
  id: number;
  orderId: number;
  price: number;
  productId: number;
  quantity: number;
  product: MyOrderItemsProductType;
}
export interface MyOrderItemsType {
  createdAt: string;
  customerId: number;
  id: number;
  items: MyOrderItemsItemsType[];
  status: string;
  totalPrice: number;
}
export interface MyOrderObjectType {
  items: MyOrderItemsType[];
  page: number;
  limit: number;
  totalItems: number;
}
