import { v4 as uuid } from 'uuid';
import { Specification } from '../model/Specification';
import {
  ISpecificationsDTO,
  ISpecificationsRepository,
} from './ISpecificationsRepository';
class SpecificationsRepository implements ISpecificationsRepository {
  specifications: Specification[];
  private static instance: SpecificationsRepository;
  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.instance) {
      SpecificationsRepository.instance = new SpecificationsRepository();
    }
    return SpecificationsRepository.instance;
  }

  create({ name, description }: ISpecificationsDTO): Specification {
    const specification = new Specification();
    Object.assign(specification, {
      id: uuid(),
      name,
      description,
      created_at: new Date(),
    });
    console.log('\nSpecification created successfully\n');
    console.log(specification);
    this.specifications.push(specification);
    return specification;
  }

  list(): Specification[] {
    return this.specifications;
  }

  findByName(name: string): Specification | undefined {
    return this.specifications.find(
      (specification) => specification.name === name,
    );
  }
}
export { SpecificationsRepository };
