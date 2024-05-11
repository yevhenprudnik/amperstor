import { Category } from '../../entities/category.d.ts';
import { Repository, db } from '../../infra/db/types.d.ts';

interface CategoryRepo extends Repository<Category> {}

export function init(db: db): CategoryRepo;
