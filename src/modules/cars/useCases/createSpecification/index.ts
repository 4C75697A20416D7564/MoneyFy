import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';
import { SpecificationsRepository } from '../../repositories/SpecificationsRepository';

const specificationsRepository = SpecificationsRepository.getInstance();

const specificationCategoryUseCase = new CreateSpecificationUseCase(
  specificationsRepository,
);

const createSpecificationController = new CreateSpecificationController(
  specificationCategoryUseCase,
);

export { createSpecificationController };
