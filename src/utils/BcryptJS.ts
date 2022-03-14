import bcrypt from 'bcryptjs';
import config from '../config';

class BcryptJS {
  static hash(password: string) {
    const salt = bcrypt.genSaltSync(+config.salt);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  }

  static compare(password: string, hash: string) {
    const match = bcrypt.compareSync(password, hash);
    return match;
  }
}

export default BcryptJS;
