import { UserDocument } from '../models/UserModel';

export type TRole = 'admin' | 'superadmin' | 'user';
export type TCompany = 'BTN;' | 'BSP';
export type TFlag = 'BTNKCS' | 'BTNKCK' | 'SHAD' | 'SMD' | 'TEKNIKBSP';
export type Auth = {
  isAuthenticated: boolean;
  isAuthorized: boolean;
  credentials: UserDocument;
};
