import morgan, { StreamOptions } from 'morgan';
import Logger from '../utils/logger';

morgan.token('date', () => `${new Date().toLocaleString()}`);
morgan.token('host', (req) => `${req.headers.host}`);
morgan.token('remote', (req) => `${req.headers['x-forwarded-for'] || 'No Remote Addr'}`);
morgan.format('myformat', ':remote :date | :host | :method | :url | :status | :response-time ms');

// Override the stream method by telling
// Morgan to use our custom logger instead of the console.log.
const stream: StreamOptions = {
  // Use the http severity
  write: (message) => Logger.http(message),
};

// Skip all the Morgan http log if the
// application is not running in development mode.
// This method is not really needed here since
// we already told to the logger that it should print
// only warning and error messages in production.
const skip = () => {
  const env = process.env.NODE_ENV || 'development';
  return env !== 'development';
};

// Build the morgan middleware
const morganMiddleware = morgan('myformat', { stream, skip });

export default morganMiddleware;
