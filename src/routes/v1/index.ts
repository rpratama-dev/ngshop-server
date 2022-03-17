import BaseRouter from '../BaseRouter';
import userRouter from './UserRouter';
import categoryRouter from './CategoryRouter';
import productRouter from './ProductRouter';

class MainRouter extends BaseRouter {
  routes(): void {
    this.router.use('/users', userRouter);
    this.router.use('/categories', categoryRouter);
    this.router.use('/products', productRouter);
  }
}

export default new MainRouter().router;
