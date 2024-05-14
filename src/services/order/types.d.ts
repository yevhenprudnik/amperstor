import { Handler } from '../types.d.ts';
import { Order } from '../../entities/order.d.ts';
import { OrderRepo } from '../../repositories/order/types.d.ts';

interface Deps {
  orderRepo: OrderRepo;
}

interface OrderService extends Record<string, Handler> {
  getAll: Handler<{}, Promise<Order[]>>;
  getById: Handler<{ id: number }, Promise<Order>>;
  getByUser: Handler<{ id: number }, Promise<Order[]>>;
  getByProduct: Handler<{ id: number }, Promise<Order[]>>;
  getByDate: Handler<{ d1: Date; d2: Date }, Promise<Order[]>>;
  create: Handler<
    { user_id: number; product_id: number; order_date: Date },
    Promise<Order>
  >;
  update: Handler<
    { id: number; user_id?: number; product_id?: number; order_date?: Date },
    Promise<Order>
  >;
}

export function init(deps: Deps): OrderService;
