import BaseRouter from '../BaseRouter';
import userRouter from './UserRouter';
import categoryRouter from './CategoryRouter';

class MainRouter extends BaseRouter {
  routes(): void {
    this.router.use('/users', userRouter);
    this.router.use('/categories', categoryRouter);
  }
}

export default new MainRouter().router;
