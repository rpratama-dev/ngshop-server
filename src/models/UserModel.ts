import mongoose from 'mongoose';
import BcryptJS from '../utils/BcryptJS';

export interface UserDocument extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  street: string;
  apartement: string;
  city: string;
  zip: string;
  country: string;
  phone: string;
  isAdmin: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    street: { type: String, required: true },
    apartement: { type: String, required: true },
    city: { type: String, required: true },
    zip: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: String, required: true },
    isAdmin: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  },
);

userSchema.pre('save', async function (next) {
  let user = this as UserDocument;
  if (!user.isModified('password')) return next();
  const hash = BcryptJS.hash(user.password);
  user.password = hash;
  return next();
});

userSchema.methods.comparePassword = async function comparePassword(candidatePassword: string): Promise<boolean> {
  const user = this as UserDocument;
  return BcryptJS.compare(candidatePassword, user.password);
};

const UserModel = mongoose.model('User', userSchema);

export default UserModel;
