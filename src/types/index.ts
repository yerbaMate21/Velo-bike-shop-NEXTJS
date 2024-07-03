export default interface Product {
  category: string;
  type: string;
  brand: string;
  id: string;
  title: string;
  price: string;
  weight: number | null;
  speed?: number | null;
  power?: number | null;
  images: string[];
}
