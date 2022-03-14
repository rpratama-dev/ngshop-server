import { config } from 'dotenv';
config();

export default (field: any) => {
  // TODO: if you encrypt env, please code here to implementation decrypt env
  const value = process.env[field];
  return value || '';
  // const chipper: string | undefined = process.env[field];
  // if (!chipper) return '';
  // const decrypted = CryptoKey.decryptData(chipper);
  // return decrypted;
};
