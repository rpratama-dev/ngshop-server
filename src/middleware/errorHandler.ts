import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import Logger from '../utils/logger';

interface Issues {
  code: string;
  expected: string;
  received: string | undefined;
  path: Array<string>;
  message: string;
}

const objError: { [k: string]: any } = {
  '400': 'BadRequest',
  '401': 'Unauthorized',
  '402': 'PaymentRequired',
  '403': 'Forbidden',
  '404': 'NotFound',
  '405': 'MethodNotAllowed',
  '406': 'NotAcceptable',
  '407': 'ProxyAuthenticationRequired',
  '408': 'RequestTimeout',
  '409': 'Conflict',
  '410': 'Gone',
  '411': 'LengthRequired',
  '412': 'PreconditionFailed',
  '413': 'PayloadTooLarge',
  '414': 'URITooLong',
  '415': 'UnsupportedMediaType',
  '416': 'RangeNotSatisfiable',
  '417': 'ExpectationFailed',
  '418': 'ImATeapot',
  '421': 'MisdirectedRequest',
  '422': 'UnprocessableEntity',
  '423': 'Locked',
  '424': 'FailedDependency',
  '425': 'UnorderedCollection',
  '426': 'UpgradeRequired',
  '428': 'PreconditionRequired',
  '429': 'TooManyRequests',
  '431': 'RequestHeaderFieldsTooLarge',
  '451': 'UnavailableForLegalReasons',
  '500': 'InternalServerError',
  '501': 'NotImplemented',
  '502': 'BadGateway',
  '503': 'ServiceUnavailable',
  '504': 'GatewayTimeout',
  '505': 'HTTPVersionNotSupported',
  '506': 'VariantAlsoNegotiates',
  '507': 'InsufficientStorage',
  '508': 'LoopDetected',
  '509': 'BandwidthLimitExceeded',
  '510': 'NotExtended',
  '511': 'NetworkAuthenticationRequire',
};

interface Error {
  statusCode: any;
  statusText: any;
  stack: any;
  name: string;
  status: number;
  message: string;
  option: Object;
  issues: Array<Issues>;
  keyValue: any;
  code: number;
}

function errorHandler(err: Error, req: Req, res: Res, next: Next) {
  const name = err.name || 'InternalError';
  const payload = {
    errorCode: err.status || 500,
    errorText: '',
    message: err.message || 'Internal Server Error',
    data: {},
  };
  payload.errorText = objError[payload.errorCode];
  console.error('Error stack', err.stack);
  Logger.error('Error', err);

  switch (name) {
    case 'ZodError': {
      payload.errorCode = 400;
      payload.message = 'Error Input parameter';
      const newIssues: any = {};
      err.issues.forEach((el) => {
        const path = el.path.slice(1).join('.');
        const { expected, received, message } = el;
        newIssues[path] = { expected, received, message };
      });
      payload.data = newIssues;
      break;
    }
    default:
      break;
  }
  if (err.option) {
    payload.data = err.option;
  }
  if (!res.headersSent) res.status(payload.errorCode).json(payload);
}

export default errorHandler;
