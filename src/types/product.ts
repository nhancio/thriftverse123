// App types – all data comes from Supabase

export type ProductStatus = "hold" | "sold" | "live";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  location: string;
  walletPoints: number;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  subcategory: string;
  brand: string;
  size: string;
  condition: "new" | "new-with-tags" | "like-new" | "gently-used" | "worn";
  era?: string;
  description: string;
  seller: UserProfile;
  status: ProductStatus;
  listedByUid?: string | null;
  measurements?: {
    chest?: number;
    length?: number;
    waist?: number;
    inseam?: number;
    unit: "cm" | "in";
  };
  tags: string[];
  allowOffers: boolean;
  shippingCost: number;
  localPickup: boolean;
  createdAt: string;
  likes: number;
  views: number;
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  itemCount: number;
  slug: string;
}

export const CATEGORY_FILTERS = [
  { name: "All", count: 0 },
  { name: "iPhone", count: 0 },
  { name: "iPad", count: 0 },
  { name: "MacBook", count: 0 },
  { name: "Mac Mini", count: 0 },
  { name: "iMac", count: 0 },
  { name: "Watch", count: 0 },
  { name: "AirPods", count: 0 },
  { name: "iPad Pencil", count: 0 },
  { name: "Apple Hub", count: 0 },
  { name: "Apple TV", count: 0 },
] as const;
