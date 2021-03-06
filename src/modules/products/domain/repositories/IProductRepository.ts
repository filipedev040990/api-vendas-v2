import { IUpdateStockProduct } from '@modules/products/infra/typeorm/repositories/ProductsRepository';
import { IProductRequest } from '@modules/products/services/CreateProductService';
import { IFindProducts } from '../models/IFindProducts';
import { IProduct } from '../models/IProduct';

export interface IProductRepository {
  findByName(name: string): Promise<IProduct | undefined>;
  findAllByIds(products: IFindProducts[]): Promise<IProduct[]>;
  find(): Promise<IProduct[]>;
  findbyId(id: string): Promise<IProduct | undefined>;
  create({ name, price, quantity }: IProductRequest): Promise<IProduct>;
  save(product: IProduct): Promise<IProduct>;
  remove(id: string): Promise<void>;
  updateStock(products: IUpdateStockProduct[]): Promise<void>;
}
