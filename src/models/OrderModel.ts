import mongoose from 'mongoose';
import { OrderItemDocument, orderItemSchema } from './OrderItemModel';
import { UserDocument } from './UserModel';

export interface OrderDocument extends mongoose.Document {
  orderItem: OrderItemDocument[];
  shippingAddress1: string;
  shippingAddress2: string;
  city: string;
  zip: string;
  country: string;
  phone: string;
  status: string;
  totalPrice: number;
  user: UserDocument;
  createdAt: Date;
  updatedAt: Date;
}

const schema = new mongoose.Schema(
  {
    orderItem: [orderItemSchema],
    shippingAddress1: { type: String, required: true },
    shippingAddress2: { type: String, required: true },
    city: { type: String, required: true },
    zip: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: String, required: true },
    status: { type: String, required: true },
    totalPrice: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true },
);

const OrderModel = mongoose.model('Order', schema);

export default OrderModel;
