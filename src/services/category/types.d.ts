import { Handler } from '../types.d.ts';
import { Category } from '../../entities/category.d.ts';
import { CategoryRepo } from '../../repositories/category/types.d.ts';

interface Deps {
  categoryRepo: CategoryRepo;
}

interface CategoryService extends Record<string, Handler> {
  getAll: Handler<{}, Promise<Category[]>>;
  getById: Handler<{ id: number }, Promise<Category>>;
  getByTitle: Handler<{ title: string }, Promise<Category[]>>;
  create: Handler<{ title: string }, Promise<Category>>;
  update: Handler<{ id: number; title: string }, Promise<Category>>;
}

export function init(deps: Deps): CategoryService;
