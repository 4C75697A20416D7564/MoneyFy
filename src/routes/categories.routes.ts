import { Router } from 'express';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoryController } from '../modules/cars/useCases/listCategory';
import { importCategoryController } from '../modules/cars/useCases/importCategory';
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
  try {
    importCategoryController.handle(req, res);
  } catch {
    (error) => {
      console.error('Erro ao Importar:', error);
      res.status(500).json({ error: 'Occoreu Um Erro Ao Importar' });
    };
  }
});

export { categoriesRouter };
