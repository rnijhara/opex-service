import chartRoutes from './charts';
import { Router } from "express";

const routes = Router();

routes.get('/ping', (req, res) => {
  res.send({message: 'pong'})
});

routes.use(chartRoutes);

export default routes;
