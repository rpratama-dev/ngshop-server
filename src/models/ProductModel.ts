import mongoose from 'mongoose';
import { CategoryDocument } from './CategoryModel';

export interface ProductDocument extends mongoose.Document {
  name: string;
  description: string;
  richDescription: string;
  image: string;
  images: string[];
  brand: string;
  price: number;
  category: CategoryDocument | null;
  countInStock: number;
  rating: number;
  isFeatured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    richDescription: { type: String, required: true },
    image: { type: String, required: true },
    images: { type: Array, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true, default: 0 },
    category: { type: mongoose.Types.ObjectId, ref: 'Category', required: true },
    countInStock: { type: Number, required: true, default: 0 },
    rating: { type: Number, required: true, default: 0 },
    isFeatured: { type: Boolean, required: true, default: false },
  },
  { timestamps: true },
);

const ProductModel = mongoose.model('Product', productSchema);

export default ProductModel;
