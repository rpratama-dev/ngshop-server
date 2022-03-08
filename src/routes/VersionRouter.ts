import errorHandler from '../middleware/errorHandler';
import BaseRouter from './BaseRouter';
import version1 from './v1';

class VersionRouter extends BaseRouter {
  routes(): void {
    this.router.use('/v1', version1);
    this.router.use(errorHandler);
  }
}

export default new VersionRouter().router;
