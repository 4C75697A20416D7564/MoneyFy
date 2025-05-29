import { CategoriesRepository } from './CategoriesRepository';
const categoriesRepository = new CategoriesRepository();
import { CreateCategoryService } from '../service/CreateCategoryService';
const createCategoryService = new CreateCategoryService(
  categoriesRepository,
);

import { SpecificationsRepository } from './SpecificationsRepository';
const specificationsRepository = new SpecificationsRepository();
import { CreateSpecificationService } from '../service/CreateSpecificationService';
const createSpecificationService = new CreateSpecificationService(
  specificationsRepository,
);

export { createSpecificationService, createCategoryService };
