import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import rateLimit from 'express-rate-limit';
import open from 'open';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

const runServer = async () => {
  const app = express();
  const port = 3002;

  app.set('trust proxy', 1);
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cookieParser());
  app.use('/static', express.static('static'));

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
};

runServer();
open('http://localhost:3002/static/map1.html');
