import { Request as Req, Response as Res, NextFunction as Next } from 'express';

interface IController {
  index(req: Req, res: Res, next: Next): Promise<any>;
  store(req: Req, res: Res, next: Next): Promise<any>;
  show(req: Req, res: Res, next: Next): Promise<any>;
  update(req: Req, res: Res, next: Next): Promise<any>;
  delete(req: Req, res: Res, next: Next): Promise<any>;
}

export default IController;
