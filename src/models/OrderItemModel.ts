import mongoose from 'mongoose';
import { ProductDocument, productSchema } from './ProductModel';

export interface OrderItemDocument extends mongoose.Document {
  product: ProductDocument;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}

export const orderItemSchema: { [path: string]: mongoose.SchemaDefinitionProperty<undefined> } = {
  product: productSchema,
  quantity: { type: Number, required: true, default: 0 },
};

const schema = new mongoose.Schema(orderItemSchema, { timestamps: true });

const OrderItemModel = mongoose.model('OrderItem', schema);

export default OrderItemModel;
