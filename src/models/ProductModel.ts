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

export const productSchema: { [path: string]: mongoose.SchemaDefinitionProperty<undefined> } = {
  name: { type: String, required: true },
  description: { type: String, required: true },
  richDescription: { type: String, default: '' },
  image: { type: String, default: '' },
  images: { type: [{ type: String }] },
  brand: { type: String, default: '' },
  price: { type: Number, default: 0 },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  countInStock: { type: Number, required: true },
  rating: { type: Number, default: 0 },
  numReviews: { type: Number, default: 0 },
  isFeatured: { type: Boolean, default: false },
};

const schema = new mongoose.Schema(productSchema, { timestamps: true });

const ProductModel = mongoose.model('Product', schema);

export default ProductModel;
