import { DocumentDefinition } from 'mongoose';
import UserModel, { UserDocument } from '../models/UserModel';

class UserService {
  static createUser(input: DocumentDefinition<UserDocument>): Promise<UserDocument> {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const user = await UserModel.create(input);
          resolve(user);
        } catch (error) {
          reject(error);
        }
      })();
    });
  }
}
