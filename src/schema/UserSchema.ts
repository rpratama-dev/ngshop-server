import { object, string, TypeOf } from 'zod';

export const UserSchema = {
  register: object({
    body: object({
      name: string({
        required_error: 'Name is required',
      }),
      password: string({
        required_error: 'Password is required',
      }).length(6, 'Password to short - should be 6 chars minimum'),
      passwordConfirmation: string({
        required_error: 'Password Confirmation is required',
      }).length(6, 'Password Confirmation to short - should be 6 chars minimum'),
      email: string({
        required_error: 'Email is required',
      }).email('Not a valid email'),
    }).refine((data) => data.password === data.passwordConfirmation, {
      message: 'Password do not match',
      path: ['passwordConfirmation'],
    }),
  }),
};

export type CreateUserInput = Omit<TypeOf<typeof UserSchema['register']>, 'body.passwordConfirmation'>;
