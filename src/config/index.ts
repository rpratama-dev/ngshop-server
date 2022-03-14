import getEnv from '../helper/getEnv';
import PairKey from '../utils/PairKey';

let pubKey = PairKey.getPubKey();
let privKey = PairKey.getPrivKey();

if (!pubKey || !privKey) {
  const pairKey = PairKey.generateKey();
  pubKey = pairKey.publicKey;
  privKey = pairKey.privateKey;
}
/**
 * All Config System is store in here;
 */
export default {
  port: getEnv('PORT'),
  dbUri: getEnv('DB_URL'),
  // hostClient: getEnv('HOST_CLIENT'),
  salt: +(getEnv('SALT') || 10),
  // hostServer: getEnv('HOST_SERVER'),
  accessTokenTtl: '15m',
  refreshTokenTtl: '1y',
  secretKey: getEnv('SECREET_KEY'),
  publicKey: pubKey,
  privateKey: privKey,
};
