import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import { AnyZodObject } from 'zod';

const validator = (schema: AnyZodObject) => (req: Req, res: Res, next: Next) => {
  try {
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    next();
  } catch (error) {
    next(error);
  }
};

export default validator;
