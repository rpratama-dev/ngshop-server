import userRouter from './UserRouter';
import BaseRouter from '../BaseRouter';

class MainRouter extends BaseRouter {
  routes(): void {
    this.router.use('/users', userRouter);
  }
}

export default new MainRouter().router;
