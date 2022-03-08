import { Request as Req, Response as Res, NextFunction as Next } from 'express';

interface IController {
  index(req: Req, res: Res, next: Next): void;
  store(req: Req, res: Res, next: Next): void;
  show(req: Req, res: Res, next: Next): void;
  update(req: Req, res: Res, next: Next): void;
  delete(req: Req, res: Res, next: Next): void;
}

export default IController;
