import { Router } from 'express';
import { createSpecificationService } from '../modules/cars/repositories';

const specificationsRouter = Router();

specificationsRouter.post('/', (req, res) => {
  const { name, description } = req.body;

  createSpecificationService.execute({
    name,
    description,
  });
  res.status(201).send();
});

specificationsRouter.get('/', (req, res) => {
  // Logic to list specifications can be added
  res.status(200).json({ message: 'List of specifications' });
});

export { specificationsRouter };
