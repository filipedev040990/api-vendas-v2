import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateOrderService from '../../../services/CreateOrderService';
import ListOrderByIdService from '../../../services/ListOrderByIdService';
import ListOrderService from '../../../services/ListOrdersService';

export default class OrdersController {
  public static async index(req: Request, res: Response): Promise<Response> {
    const listOrders = container.resolve(ListOrderService);
    const orders = await listOrders.execute();
    return res.status(200).json(orders);
  }

  public static async listById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const listOrderbyId = container.resolve(ListOrderByIdService);
    const order = await listOrderbyId.execute(id);
    return res.status(200).json(order);
  }

  public static async create(req: Request, res: Response): Promise<Response> {
    const { customer_id, products } = req.body;
    const createOrder = container.resolve(CreateOrderService);
    const order = await createOrder.execute({ customer_id, products });
    return res.status(200).json(order);
  }
}
