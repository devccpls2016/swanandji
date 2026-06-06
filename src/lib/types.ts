export type ProductCategory = "dairy" | "wellness" | "farm";

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  section: "featured" | "experience";
  price: number;
  unit: string;
  description: string;
  benefits: string[];
  badge?: string;
  stock: number;
  accent: string;
}

export interface Stay {
  id: string;
  name: string;
  description: string;
  features: string[];
  capacity: string;
  duration: string;
  rating: number;
  reviews: number;
  price: number;
  compareAtPrice?: number;
  badge?: string;
  accent: string;
}

export interface Experience {
  id: string;
  name: string;
  description: string;
  duration: string;
  difficulty: string;
  groupSize: string;
  rating: number;
  reviews: number;
  price: number;
  compareAtPrice?: number;
  accent: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  rating: number;
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface OrderInquiry {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  notes?: string;
  couponCode?: string;
  items: Array<{
    productId: string;
    name: string;
    price: number;
    quantity: number;
  }>;
  subtotal: number;
  deliveryCharge: number;
  discount: number;
  total: number;
}

export interface ContactInquiry {
  fullName: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

export interface BookingInquiry {
  category: "eco-stay" | "experience";
  itemId: string;
  itemName: string;
  fullName: string;
  phone: string;
  email: string;
  preferredDate: string;
  guests: number;
  notes?: string;
}

export interface GauSevaInquiry {
  fullName: string;
  phone: string;
  email: string;
  preferredDate: string;
  visitors: number;
  specialRequest?: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  id?: string;
  errors?: Record<string, string[] | undefined>;
}
