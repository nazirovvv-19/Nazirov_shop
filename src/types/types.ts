export type BannerType={
    id: number;
    title: string;
    imageUrl: string;
    isActive: boolean;
    createdAt: string;
  }
  export type productType ={
    id: number;
    name: string;
    description: string;
    price: string;
    stock: number;
    categoryId: number;
    createdAt: string;
    imageUrl: string;
  }

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