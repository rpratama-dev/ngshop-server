import { object, string, TypeOf, number, boolean } from 'zod';

export const ProductSchema = {
  create: object({
    body: object({
      name: string({
        required_error: 'Name is required',
      }),
      description: string({
        required_error: 'Description is required',
      }),
      richDescription: string({
        required_error: 'Richdescription is required',
      }),
      image: string({
        required_error: 'Image is required',
      }),
      brand: string({
        required_error: 'Brand is required',
      }),
      price: number({
        required_error: 'Price is required',
      }).min(0, 'Price minimum Rp 0'),
      category: string({
        required_error: 'Category is required',
      }),
      countInStock: number({
        required_error: 'Count in Stock is required',
      }).min(0, 'Count in Stock minimum 0'),
      rating: number({
        required_error: 'Rating is required',
      }).min(0, 'Rating minimum 0'),
      numReviews: number({
        required_error: 'Num Reviews is required',
      }).min(0, 'Num Reviews minimum 0'),
      isFeatured: boolean({
        required_error: 'Is Featured is required',
      }),
    }),
  }),
};

export type CreateProductInput = TypeOf<typeof ProductSchema['create']>;
