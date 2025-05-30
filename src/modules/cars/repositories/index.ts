

import { SpecificationsRepository } from './SpecificationsRepository';
const specificationsRepository = new SpecificationsRepository();
import { CreateSpecificationService } from '../useCases/createSpecification/CreateSpecificationUseCase';
const createSpecificationService = new CreateSpecificationService(
  specificationsRepository,
);

export { createSpecificationService };
