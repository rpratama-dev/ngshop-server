import { Request as Req, Response as Res, NextFunction as Next } from 'express';

import IController from './IController';

class UserController implements IController {
  index(req: Req, res: Res, next: Next): void {
    throw new Error('Method not implemented.');
  }
  store(req: Req, res: Res, next: Next): void {
    throw new Error('Method not implemented.');
  }
  show(req: Req, res: Res, next: Next): void {
    throw new Error('Method not implemented.');
  }
  update(req: Req, res: Res, next: Next): void {
    throw new Error('Method not implemented.');
  }
  delete(req: Req, res: Res, next: Next): void {
    throw new Error('Method not implemented.');
  }
}

export default new UserController();
