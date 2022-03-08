#!/usr/bin/env node
import app from '../app';
import http from 'http';
import Logger from '../utils/logger';
// import DB from '../utils/DBC';

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
// DB.startConnection();

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val: string) {
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: Error | any) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      Logger.error(bind + ' requires elevated privileges');
      process.exit(1);
    case 'EADDRINUSE':
      Logger.error(bind + ' is already in use');
      process.exit(1);
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
interface AddressInfo {
  address: string;
  family: string;
  port: number;
}

function onListening() {
  const addr: AddressInfo | string | null = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : addr?.port;
  const address = typeof addr === 'object' ? addr?.address : '';
  Logger.info(`Server listening @ ${address}${bind}`);
}
