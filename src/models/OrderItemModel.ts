import mongoose from 'mongoose';
import { ProductDocument, productSchema } from './ProductModel';

export interface OrderItemDocument extends mongoose.Document {
  product: ProductDocument;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}

export const orderItemSchema = new mongoose.Schema(
  {
    product: productSchema,
    quantity: { type: Number, required: true, default: 0 },
  },
  { timestamps: true },
);

const OrderItemModel = mongoose.model('OrderItem', orderItemSchema);

export default OrderItemModel;
