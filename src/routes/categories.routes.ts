import { Router } from 'express';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoryController } from '../modules/cars/useCases/listCategory';

const categoriesRouter = Router();

categoriesRouter.post('/', (req, res) => {
   createCategoryController.handle(req, res);
});

categoriesRouter.get('/', (req, res) => {
    listCategoryController.handle(req, res);
});

export { categoriesRouter };
