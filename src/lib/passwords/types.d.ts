export interface Passwords {
  hash(password: string): string;
  compare(password: string, hash: string): boolean;
}