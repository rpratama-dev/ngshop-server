import mongoose from 'mongoose';
import customeError from '../helper/customeError';
import { Category } from '../models';
import { CategoryDocument } from '../models/CategoryModel';

class CategoryService {
  static async findById(id: string): Promise<CategoryDocument> {
    const isObjID = mongoose.isValidObjectId(id);
    if (!isObjID) throw customeError(400, 'Invalid parameter ID');
    const category: CategoryDocument | null = await Category.findById(id);
    if (!category) throw customeError(404, 'Category Not Found');
    return category;
  }
}

export default CategoryService;
