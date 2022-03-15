import { object, string, TypeOf } from 'zod';

export const CategorySchema = {
  create: object({
    body: object({
      name: string({
        required_error: 'Name is required',
      }).min(3, 'Name to short - should be 3 chars minimum'),
      icon: string({
        required_error: 'Icon is required',
      }).min(3, 'Icon to short - should be 3 chars minimum'),
      color: string({
        required_error: 'Color is required',
      }).min(3, 'Color to short - should be 3 chars minimum'),
    }),
  }),
};

export type CreateCategoryInput = TypeOf<typeof CategorySchema['create']>;
