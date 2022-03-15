import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import core from 'express-serve-static-core';
import IController from './IController';
import { Category } from '../models';
import { CreateCategoryInput } from '../schema/CategorySchema';
import mongoose from 'mongoose';
import customeError from '../helper/customeError';
import CategoryService from '../services/CategoryService';

class CategoryController implements IController {
  async index(req: Req, res: Res, next: Next) {
    try {
      const categories = await Category.find().sort({ createdAt: -1 });
      res.status(200).json({ response: categories });
    } catch (error) {
      next(error);
    }
  }

  async store(req: Req<core.ParamsDictionary, any, CreateCategoryInput['body']>, res: Res, next: Next) {
    try {
      const { name, icon, color } = req.body;
      const payload = { name, icon, color };
      const category = await Category.create(payload);
      res.status(201).json({ response: category, message: 'Success add new category' });
    } catch (error) {
      next(error);
    }
  }

  async show(req: Req, res: Res, next: Next) {
    try {
      const { id } = req.params;
      const category = await CategoryService.findById(id);
      res.status(200).json({ response: category });
    } catch (error) {
      next(error);
    }
  }

  async update(req: Req<core.ParamsDictionary, any, CreateCategoryInput['body']>, res: Res, next: Next) {
    try {
      const { id } = req.params;
      const { name, icon, color } = req.body;
      const category = await CategoryService.findById(id);
      category.name = name;
      category.color = color;
      category.icon = icon;
      const saved = await category.save();
      res.status(200).json({ response: saved, message: 'Success update category' });
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Req, res: Res, next: Next) {
    try {
      const { id } = req.params;
      const isObjID = mongoose.isValidObjectId(id);
      if (!isObjID) throw customeError(400, 'Invalid parameter ID');
      const result = await Category.findByIdAndDelete(id);
      if (!result) throw customeError(404, 'Category ID not found');
      res.status(200).json({ response: result, message: 'Success deleted category' });
    } catch (error) {
      next(error);
    }
  }
}

export default new CategoryController();
