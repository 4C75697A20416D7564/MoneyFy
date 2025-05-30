import { Router } from 'express';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoryController } from '../modules/cars/useCases/listCategory';
import multer from 'multer';
const categoriesRouter = Router();

const upload = multer({
  dest: './tmp',
});

categoriesRouter.post('/', (req, res) => {
  createCategoryController.handle(req, res);
});

categoriesRouter.get('/', (req, res) => {
  listCategoryController.handle(req, res);
});

categoriesRouter.post('/import', upload.single('file'), (req, res, next) => {
  const { file } = req;
  console.log(file);
  if (!file) {
    res.status(400).send({ error: 'Arquivo não enviado' });
  }
  res.status(201).send();
  // Here you would typically call a service to handle the import logic
});

export { categoriesRouter };
