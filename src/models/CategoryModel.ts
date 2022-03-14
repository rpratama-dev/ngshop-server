import mongoose from 'mongoose';

export interface CategoryDocument extends mongoose.Document {
  name: string;
  color: string;
  icon: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    color: { type: String, required: true },
    icon: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const CategoryModel = mongoose.model('Category', categorySchema);

export default CategoryModel;
