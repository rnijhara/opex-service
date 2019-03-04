import config from 'config';
import express from 'express';
import http, { Server } from 'http';

import { Connection, createConnection } from 'typeorm';
import { applyMiddleware } from "./utils";
import middleware from './middlewares';
import routes from "./routes";

createConnection().then(async (connection: Connection) => {
  console.log('Preparing to run migrations');
  await connection.runMigrations();
  console.log('Completed running migrations');

  const app = express();
  app.get('/', (req, res) => {
    res.send({message: 'Opex service'});
  });

  applyMiddleware(middleware, app);
  app.use(routes);

  const PORT = config.get('server.port');
  const server: Server = http.createServer(app);
  server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

}).catch((error) => console.error(error));

