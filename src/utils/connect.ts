import mongoose from 'mongoose';
import Logger from './logger';
import config from '../config';

let db: typeof mongoose;
const dbConnect = async () => {
  try {
    db = await mongoose.connect(config.dbUri, {
      autoIndex: true, // Don't build indexes
      maxPoolSize: 10, // Maintain up to 10 socket connections
      serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
      socketTimeoutMS: 90000, // Close sockets after 45 seconds of inactivity
      family: 4, // Use IPv4, skip trying IPv6
    });
    Logger.info(`Database connected from ${db.connection.host}`);
  } catch (error: any) {
    Logger.error(`Database not connected : ${error.message}`);
    process.exit(1);
  }
};

const getDB = () => db;
const startSession = () => db.startSession();

export { dbConnect, getDB, startSession };
