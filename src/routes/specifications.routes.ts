import { Router } from 'express';
import { createSpecificationController } from '../modules/cars/useCases/createSpecification';

const specificationsRouter = Router();

specificationsRouter.post('/', (req, res) => {
  const { name, description } = req.body;

  createSpecificationController.handle(req, res);
  res.status(201).send();
});

specificationsRouter.get('/', (req, res) => {
  // Logic to list specifications can be added
  res.status(200).json({ message: 'List of specifications' });
});

export { specificationsRouter };
