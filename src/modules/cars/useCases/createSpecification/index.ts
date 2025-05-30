import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';
import { SpecificationsRepository } from '../../repositories/SpecificationsRepository';

const categoriesRepository = SpecificationsRepository.getInstance();

const specificationCategoryUseCase = new CreateSpecificationUseCase(
  categoriesRepository,
);

const createSpecificationController = new CreateSpecificationController(
  specificationCategoryUseCase,
);

export { createSpecificationController };
