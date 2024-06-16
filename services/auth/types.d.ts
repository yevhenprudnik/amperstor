export interface User {
  id: number;
  email: string;
  password: string;
  username: string;
  role: 'common' | 'admin';
  discount?: number;
}

export interface Session {
  user: Partial<User>;
  token: string;
}