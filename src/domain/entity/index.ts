export interface Product {
  id?: string;
  name: string;
  price: number;
  description?: string;
  thumbnailUrl?: string;
}

export interface Cart {
  product: Product;
  quantity: number;
}