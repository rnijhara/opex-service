import { Router } from 'express';
import { getChart } from "../services/chartsService";

const routes = Router();

routes.get('/charts/:type', async (req, res) => {
  const data = await getChart(req.params.type);
  if (!data) {
    res.status(404).send();
  }
  res.send(data);
});

export default routes;
