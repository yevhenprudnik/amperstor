export enum UserRole {
  Common = 'common',
  admin = 'admin',
}

export interface User {
  id: number;
  email: string;
  password: string;
  username: string;
  role: UserRole;
  discount?: number;
}
