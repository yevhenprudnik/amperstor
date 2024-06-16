export interface User {
  id: number;
  email: string;
  password: string;
  username: string;
  role: 'common' | 'admin';
  discount?: number;
}

export interface Category {
  id: number;
  title: string;
}
