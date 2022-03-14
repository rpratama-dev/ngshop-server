import { Auth } from '../../interface/user.interface';

declare global {
  namespace Express {
    interface Request {
      context: {
        auth: Auth;
      };
    }
  }
}
