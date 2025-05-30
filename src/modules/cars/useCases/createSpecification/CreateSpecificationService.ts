import {
  ISpecificationsRepository,
  ISpecificationsDTO,
} from '../../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(
    private specificationsRepository: ISpecificationsRepository,
  ) {}

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists =
      this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error('\nSpecification already exists\n');
    }

    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
