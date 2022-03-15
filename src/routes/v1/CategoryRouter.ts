import BaseRouter from '../BaseRouter';
import Controller from '../../controller/CategoryController';
import validator from '../../middleware/validator';
import { CategorySchema } from '../../schema/CategorySchema';

class CategoryRouter extends BaseRouter {
  routes(): void {
    this.router.get('/', Controller.index);
    this.router.post('/', validator(CategorySchema.create), Controller.store);
    this.router.get('/:id', Controller.show);
    this.router.put('/:id', validator(CategorySchema.create), Controller.update);
    this.router.delete('/:id', Controller.delete);
  }
}

export default new CategoryRouter().router;
