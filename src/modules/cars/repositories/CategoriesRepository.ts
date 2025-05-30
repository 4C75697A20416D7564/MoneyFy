import { v4 as uuid } from 'uuid';
import { Category } from '../model/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from './ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private category: Category[] = [];

  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.category = [];
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
  }

  create({ name, description }: ICreateCategoryDTO): Category {
    const category = {
      id: uuid(), // This should be generated, e.g., using uuid
      name,
      description,
      created_at: new Date(),
    };
    this.category.push(category);
    // Here you would typically save the category to a database
    console.log('\nCategory created:\n');
    console.log(category);
    console.log('\n');

    return category;
  }

  list(): Category[] {
    // This would typically fetch categories from a database
    return this.category;
  }
  findByName(name: string): Category | undefined {
    // This would typically search for a category by name in a database
    const find = this.category.find((categoria) => categoria.name === name);
    return find;
  }
}
export { CategoriesRepository };
