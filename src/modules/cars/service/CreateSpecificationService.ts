import {
  ISpecificationsRepository,
  ISpecificationsDTO,
} from '../repositories/ISpecificationsRepository';

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
      throw new Error('Specification already exists');
    }
    console.log('Specification created successfully');
    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
