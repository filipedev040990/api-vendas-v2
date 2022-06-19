import productRouter from '@modules/products/routes/products.routes';
import authenticationRouter from '@modules/users/routes/authentication.routes';
import userRouter from '@modules/users/routes/users.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/products', productRouter);
routes.use('/users', userRouter);
routes.use('/authentication', authenticationRouter);

export default routes;
