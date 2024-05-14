import { Order } from '../../entities/order.d.ts';
import { Repository, db } from '../../infra/db/types.d.ts';

export interface OrderRepo extends Repository<Order> {
  findBetweenDates(d1: Date, d2: Date): Promise<Order[]>;
}

export function init(db: db): OrderRepo;
