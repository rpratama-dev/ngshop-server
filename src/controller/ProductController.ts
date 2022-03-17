import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { Product } from '../models';
import { ProductDocument } from '../models/ProductModel';
import { CreateProductInput } from '../schema/ProductSchema';
import CategoryService from '../services/CategoryService';
import ProductService from '../services/ProductService';
import IController from './IController';

class ProductController implements IController {
  async index(req: Req, res: Res, next: Next): Promise<any> {
    try {
      const products = await Product.find().populate('category');
      res.status(200).json({ response: products });
    } catch (error) {
      next(error);
    }
  }

  async store(req: Req<ParamsDictionary, any, CreateProductInput['body']>, res: Res, next: Next): Promise<any> {
    try {
      const { name, description, richDescription, image, brand, price } = req.body;
      const { category, countInStock, rating, numReviews, isFeatured } = req.body;

      const categoryItem = await CategoryService.findById(category);

      const p1 = { name, description, richDescription, image, brand, price };
      const p2 = { countInStock, rating, numReviews, isFeatured };
      const payload = { category: categoryItem.id, ...p1, ...p2 };
      const product = await Product.create(payload);
      res.status(201).json({ response: product, message: 'Success add new product' });
    } catch (error) {
      next(error);
    }
  }

  async show(req: Req, res: Res, next: Next): Promise<any> {
    try {
      const { id } = req.params;
      const product = await ProductService.findById(id);
      res.status(200).json({ response: product });
    } catch (error) {
      next(error);
    }
  }

  async update(req: Req<ParamsDictionary, any, CreateProductInput['body']>, res: Res, next: Next): Promise<any> {
    try {
      const { id } = req.params;
      const { name, description, richDescription, image, brand, price } = req.body;
      const { category, countInStock, rating, numReviews, isFeatured } = req.body;

      const p1 = { name, description, richDescription, image, brand, price };
      const p2 = { countInStock, rating, numReviews, isFeatured };
      
      
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Req, res: Res, next: Next): Promise<any> {
    throw new Error('Method not implemented.');
  }
}

export default new ProductController();
