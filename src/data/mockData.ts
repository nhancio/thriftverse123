// Mock data for thrifting marketplace

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
  condition: "new" | "like-new" | "gently-used" | "worn";
  era?: string;
  description: string;
  seller: Seller;
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

export interface Seller {
  id: string;
  name: string;
  username: string;
  avatar: string;
  rating: number;
  totalSales: number;
  verified: boolean;
  responseTime: string;
  location: string;
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  itemCount: number;
  slug: string;
}

export const mockSellers: Seller[] = [
  {
    id: "s1",
    name: "Priya Sharma",
    username: "@priyavintage",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=priya",
    rating: 4.9,
    totalSales: 342,
    verified: true,
    responseTime: "Usually responds in 1 hour",
    location: "Mumbai, India",
  },
  {
    id: "s2",
    name: "Arjun Mehta",
    username: "@arjunthrifts",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=arjun",
    rating: 4.7,
    totalSales: 156,
    verified: true,
    responseTime: "Usually responds in 2 hours",
    location: "Delhi, India",
  },
  {
    id: "s3",
    name: "Zara Khan",
    username: "@zarafinds",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=zara",
    rating: 5.0,
    totalSales: 89,
    verified: false,
    responseTime: "Usually responds in 30 minutes",
    location: "Bangalore, India",
  },
];

export const mockProducts: Product[] = [
  {
    id: "p1",
    title: "iPhone 14 Pro Max — 256GB, Deep Purple",
    price: 50000,
    originalPrice: 139900,
    images: [
      "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=800",
      "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=800",
    ],
    category: "iPhone",
    subcategory: "Pro Max",
    brand: "Apple",
    size: "256GB",
    condition: "like-new",
    era: "2022",
    description: "iPhone 14 Pro Max in stunning Deep Purple. 256GB storage, excellent battery health at 92%. Dynamic Island, 48MP camera system. Includes original box and charger. Minor scratches on frame, screen is flawless with screen protector since day 1.",
    seller: mockSellers[0],
    tags: ["iphone", "pro-max", "apple", "256gb", "deep-purple"],
    allowOffers: true,
    shippingCost: 0,
    localPickup: true,
    createdAt: "2024-01-15T10:30:00Z",
    likes: 234,
    views: 1567,
  },
  {
    id: "p2",
    title: "iPhone 15 Pro — 128GB, Natural Titanium",
    price: 60000,
    originalPrice: 134900,
    images: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800",
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800",
    ],
    category: "iPhone",
    subcategory: "Pro",
    brand: "Apple",
    size: "128GB",
    condition: "like-new",
    era: "2023",
    description: "iPhone 15 Pro in Natural Titanium finish. Action Button, A17 Pro chip, USB-C. Battery health 96%. Comes with original packaging, cable, and AppleCare+ until March 2025. Pristine condition, always used with case.",
    seller: mockSellers[1],
    tags: ["iphone", "pro", "apple", "titanium", "usb-c"],
    allowOffers: true,
    shippingCost: 0,
    localPickup: true,
    createdAt: "2024-01-14T15:20:00Z",
    likes: 189,
    views: 2341,
  },
  {
    id: "p3",
    title: "iPhone 16 Pro — 256GB, Desert Titanium",
    price: 70000,
    originalPrice: 144900,
    images: [
      "https://images.unsplash.com/photo-1727447507377-8237fe498a89?w=800",
      "https://images.unsplash.com/photo-1727447507377-8237fe498a89?w=800",
    ],
    category: "iPhone",
    subcategory: "Pro",
    brand: "Apple",
    size: "256GB",
    condition: "like-new",
    era: "2024",
    description: "Latest iPhone 16 Pro in exclusive Desert Titanium. Camera Control button, A18 Pro chip, Apple Intelligence ready. Battery health 100%. Only 2 months old, selling due to upgrade to Pro Max. Includes all original accessories and remaining warranty.",
    seller: mockSellers[2],
    tags: ["iphone", "16-pro", "apple", "titanium", "latest"],
    allowOffers: false,
    shippingCost: 0,
    localPickup: true,
    createdAt: "2024-01-13T09:00:00Z",
    likes: 456,
    views: 3890,
  },
  {
    id: "p4",
    title: "iPhone 14 — 128GB, Midnight Black",
    price: 35000,
    originalPrice: 79900,
    images: [
      "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=800",
      "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=800",
    ],
    category: "iPhone",
    subcategory: "Standard",
    brand: "Apple",
    size: "128GB",
    condition: "gently-used",
    era: "2022",
    description: "iPhone 14 in Midnight. Great condition with 88% battery health. A15 Bionic chip still handles everything smoothly. Perfect for someone wanting a reliable iPhone at an affordable price. Includes charger and case.",
    seller: mockSellers[0],
    tags: ["iphone", "14", "apple", "midnight", "budget"],
    allowOffers: true,
    shippingCost: 0,
    localPickup: true,
    createdAt: "2024-01-12T14:45:00Z",
    likes: 145,
    views: 987,
  },
];

export const mockCollections: Collection[] = [
  {
    id: "c1",
    title: "iPhone Deals",
    description: "Best prices on pre-owned iPhones",
    image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=800",
    itemCount: 124,
    slug: "iphone",
  },
  {
    id: "c2",
    title: "MacBook Collection",
    description: "Premium laptops at thrifted prices",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800",
    itemCount: 89,
    slug: "macbook",
  },
  {
    id: "c3",
    title: "iPad Selection",
    description: "Tablets for work and play",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800",
    itemCount: 156,
    slug: "ipad",
  },
  {
    id: "c4",
    title: "Premium Accessories",
    description: "AirPods, cases, and more",
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800",
    itemCount: 67,
    slug: "accessories",
  },
];

export const categories = [
  { name: "All", count: 2450 },
  { name: "iPhone", count: 567 },
  { name: "MacBook", count: 423 },
  { name: "iPad", count: 312 },
  { name: "Cars", count: 89 },
  { name: "Accessories", count: 456 },
];

export const sizes = ["64GB", "128GB", "256GB", "512GB", "1TB"];
export const conditions = ["New with tags", "New", "Like new", "Gently used", "Worn"];
export const eras = ["2024", "2023", "2022", "2021", "2020", "Older"];
export const priceRanges = [
  { label: "Under ₹20,000", min: 0, max: 20000 },
  { label: "₹20,000 - ₹40,000", min: 20000, max: 40000 },
  { label: "₹40,000 - ₹60,000", min: 40000, max: 60000 },
  { label: "₹60,000 - ₹80,000", min: 60000, max: 80000 },
  { label: "Over ₹80,000", min: 80000, max: Infinity },
];
