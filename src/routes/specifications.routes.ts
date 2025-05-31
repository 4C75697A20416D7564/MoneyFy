import { Router } from 'express';
import { createSpecificationController } from '../modules/cars/useCases/createSpecification';
import { listSpecificationController } from '../modules/cars/useCases/listSpecification';

const specificationsRouter = Router();

specificationsRouter.post('/', (req, res) => {
  const { name, description } = req.body;

  createSpecificationController.handle(req, res);
  res.status(201).send();
});

specificationsRouter.get('/', (req, res) => {
  const all = listSpecificationController.handle(req, res);
  res.status(200).json(all);
});

export { specificationsRouter };
