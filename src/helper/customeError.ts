import createHttpError from 'http-errors';

function customeError(status: number, message: string, option = {}) {
  const error = createHttpError(status, message);
  Object.assign(error, { option });
  return error;
}

export default customeError;
