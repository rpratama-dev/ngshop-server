import mongoose from 'mongoose';
import customeError from '../helper/customeError';
import { Product } from '../models';
import { ProductDocument } from '../models/ProductModel';

class ProductService {
  static async findById(id: string): Promise<ProductDocument> {
    const isObjID = mongoose.isValidObjectId(id);
    if (!isObjID) throw customeError(400, 'Invalid parameter ID');
    const category: ProductDocument | null = await Product.findById(id).populate('category');
    if (!category) throw customeError(404, 'Product Not Found');
    return category;
  }
}

export default ProductService;
