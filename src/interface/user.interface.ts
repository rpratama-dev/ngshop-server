export type TRole = 'admin' | 'superadmin' | 'user';
export type TCompany = 'BTN;' | 'BSP';
export type TFlag = 'BTNKCS' | 'BTNKCK' | 'SHAD' | 'SMD' | 'TEKNIKBSP';

export interface User {
  Pass: string;
  Nama: string;
  Email: string;
  Roles: {
    role: TRole;
    comp: TCompany;
    branch: string;
    flag: TFlag;
    features: string;
    isLogin: 'Y' | 'N';
  };
}

export interface IRecordUser {
  NoID: number;
  USR_UserID: string;
  USR_Password: string;
  USR_Nama: string;
  USR_Email: string;
  USR_Roles: string;
  USR_StartDate: Date;
  USR_EndDate: Date;
  USR_TgInput: Date;
  USR_TgUpdate: Date;
}

export interface IRoles {
  role: TRole;
  comp: TCompany;
  branch: string;
  flag: TFlag;
  features: string;
  isLogin: 'Y' | 'N';
}

export interface IUserRecord {
  id: number;
  fullName: string;
  email: string;
  username: string;
  role: TRole;
  company: TCompany;
  branch: string;
  flag: TFlag;
  features: string[];
  isLogin: 'Y' | 'N';
}

export enum TBranch {
  BTN_KD = 'btn_code',
  BTN_CABANG = 'btn_branch',
}
