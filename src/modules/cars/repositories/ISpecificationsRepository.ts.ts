import { Specification } from '../model/Specification';

interface ISpecificationsDTO {
  name: string;
  description: string;
}
interface ISpecificationsRepository {
  create({ name, description }: ISpecificationsDTO): void;
  list(): Specification[];
  findByName(name: string): Specification | undefined;
}
export { ISpecificationsRepository, ISpecificationsDTO };
