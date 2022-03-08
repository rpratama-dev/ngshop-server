import { TCompany, TRole } from '../interface/user.interface';

export type User = {
  user_id: number;
  username: string;
  fullName: string;
  email: string;
  password?: string;
  features?: string[];
  role?: TRole;
  flag?: string;
  company?: TCompany;
  branch?: string;
  isLogin: 'Y' | 'N';
};

export type Auth = {
  isAuthenticated: boolean;
  isAuthorized: boolean;
  credentials: User;
};

export class Context {
  public auth: Auth;

  constructor(public someContextVariable: any) {
    this.auth = {
      isAuthenticated: false,
      isAuthorized: false,
      credentials: {
        user_id: 0,
        username: '',
        fullName: '',
        email: '',
        password: '',
        // roles: '',
        role: undefined,
        flag: '',
        branch: '',
        features: [],
        isLogin: 'N',
      },
    };
  }

  log(message: string) {
    console.log(this.someContextVariable, { message });
    return 'test';
  }
}
