export interface User {
  id: number;
  email: string;
  password: string;
  username: string;
  role: 'common' | 'admin';
  discount?: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  count: number;
  description: string;
  image?: string;
}
