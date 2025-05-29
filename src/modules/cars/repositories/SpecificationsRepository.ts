import { v4 as uuid } from 'uuid';
import { Specification } from '../model/Specification';
import {
  ISpecificationsDTO,
  ISpecificationsRepository,
} from './ISpecificationsRepository.ts';
class SpecificationsRepository implements ISpecificationsRepository {
  specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ISpecificationsDTO): Specification {
    const specification = new Specification();
    Object.assign(specification, {
      id: uuid(),
      name,
      description,
      created_at: new Date(),
    });
    console.log('Specification created successfully');
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
