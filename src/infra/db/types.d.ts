import { Pool, QueryResult } from 'pg';

export interface Repository<Entity> {
  table: string;
  query: (sql: string, params?: any[]) => Promise<QueryResult>;
  create(definition: Partial<Entity>): Promise<Entity>;
  update(id: number, definition: Partial<Entity>): Promise<Entity>;
  findMany(definition: Partial<Entity>): Promise<Entity[]>;
  findOne(definition: Partial<Entity>): Promise<Entity>;
  remove(id: number): Promise<boolean>;
}

export type db = (
  table: 'user' | 'product' | 'category' | 'order',
) => Repository<any>;

export function init(pool: Pool): db;
