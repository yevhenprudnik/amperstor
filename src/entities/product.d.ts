import { Category } from './category.d.ts';

export interface Product {
  id: number;
  title: string;
  price: number;
  count: number;
  categories: Category[];
  description: string;
  media?: string[];
}
