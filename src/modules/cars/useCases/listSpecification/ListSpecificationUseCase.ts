import { Specification } from '../../model/Specification';
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

class ListSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute(): Specification[] {
    const all = this.specificationsRepository.list();

    console.log('\nList of categories:\n');
    console.log(all);

    return all;
  }
}
export { ListSpecificationUseCase };
