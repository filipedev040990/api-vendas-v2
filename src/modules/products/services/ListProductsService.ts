import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../typeorm/repositories/ProductsRepository';
import Product from '../typeorm/entities/Products';
import RedisCache from '@shared/cache/RedisCache';

export default class ListProductsService {
  public static async execute(): Promise<Product[]> {
    const productRepository = getCustomRepository(ProductRepository);

    const redisCache = new RedisCache();

    let products = await redisCache.recover<Product[]>(
      'api-vendas-PRODUCT_LIST',
    );

    if (!products) {
      products = await productRepository.find();
      await redisCache.save('api-vendas-PRODUCT_LIST', products);
    }
    return products;
  }
}
