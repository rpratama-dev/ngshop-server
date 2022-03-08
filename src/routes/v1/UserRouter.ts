import BaseRouter from '../BaseRouter';
import Controller from '../../controller/UserController';

class UserRouter extends BaseRouter {
  routes(): void {
    this.router.get('/', Controller.index);
    this.router.post('/', Controller.store);
    this.router.put('/:id', Controller.update);
  }
}

export default new UserRouter().router;
