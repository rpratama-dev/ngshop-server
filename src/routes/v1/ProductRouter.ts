import BaseRouter from '../BaseRouter';
import Controller from '../../controller/ProductController';
import validator from '../../middleware/validator';
import { ProductSchema } from '../../schema/ProductSchema';

class ProductRouter extends BaseRouter {
  routes(): void {
    this.router.get('/', Controller.index);
    this.router.post('/', validator(ProductSchema.create), Controller.store);
    this.router.get('/:id', Controller.show);
    this.router.put('/:id', validator(ProductSchema.create), Controller.update);
    this.router.delete('/:id', Controller.delete);
  }
}

export default new ProductRouter().router;
