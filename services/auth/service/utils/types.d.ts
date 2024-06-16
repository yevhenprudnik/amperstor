export interface ApiError {
  badRequest(message?: string): void;
  unauthorized(message?: string): void;
  forbidden(message?: string): void;
  notFound(message?: string): void;
}

export interface Sessions {
  generate(payload: any): Session;
  validate(token: string): any;
}

export interface Passwords {
  hash(password: string): string;
  compare(password: string, hash: string): boolean;
}
