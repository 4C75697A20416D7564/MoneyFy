import { Router } from 'express';
import { createCategoryService } from '../modules/cars/repositories';

const categoriesRouter = Router();

categoriesRouter.post('/', (req, res) => {
  const { name, description } = req.body;

  createCategoryService.execute({
    name,
    description,
  });
  res.status(201).send();
});

categoriesRouter.get('/', (req, res) => {

});

export { categoriesRouter };
