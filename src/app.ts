// import express = require('express');
import express, { Application, NextFunction, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morganMiddleware from './middleware/morgan';
import version from './routes/VersionRouter';

class App {
  public app: Application;
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  protected middleware(): void {
    this.app.set('view engine', 'ejs');
    // this.app.use(express.static(path.join(__dirname, '..', 'build')));
    this.app.use(cors());
    this.app.use(morganMiddleware);
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cookieParser());
  }

  routes(): void {
    // this.app.use(Auth.authentication);
    // this.app.use('/', indexRouter);
    this.app.use('/api', version);

    // this.app.use((req: Request, res: Response, next: NextFunction) => {
    //   // console.error('Access Denied', err.message);
    //   console.log(path.join(__dirname, '..', 'build', 'index.html'));
    //   res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
    // });
  }
}

const app = new App().app;
export default app;
