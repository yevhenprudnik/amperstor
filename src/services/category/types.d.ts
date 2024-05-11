import { Handler } from '../types.d.ts';
import { Category } from '../../entities/category.d.ts';
import { CategoryRepo } from '../../repositories/category/types.d.ts';

interface Deps {
  categoryRepo: CategoryRepo;
}

interface CategoryService extends Record<string, Handler> {
  getAll: Handler<{}, Promise<Category[]>>;
}

export function init(deps: Deps): CategoryService;
