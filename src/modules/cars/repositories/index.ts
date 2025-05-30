

import { SpecificationsRepository } from './SpecificationsRepository';
const specificationsRepository = new SpecificationsRepository();
import { CreateSpecificationService } from '../useCases/createSpecification/CreateSpecificationService';
const createSpecificationService = new CreateSpecificationService(
  specificationsRepository,
);

export { createSpecificationService };
