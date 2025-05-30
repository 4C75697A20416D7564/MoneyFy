import { Category } from '../../model/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';


class ListCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

    execute(): Category[]{

      const all = this.categoriesRepository.list();

      console.log('\nList of categories:\n');
      console.log(all);

      return all;



  }
}
export { ListCategoryUseCase };
