import { Response, Request } from 'express';
import { Specification } from '../../model/Specification';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {
    // You can initialize any dependencies here, such as services or repositories
  }

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    const all = this.createSpecificationUseCase.execute({
      name,
      description,
    });
    // Here you would typically call a service to handle the creation logic
    // For example:
    // const createCategoryUseCase = new CreateCategoryUseCase();
    // createCategoryUseCase.execute({ name, description });

    return response.status(201).json(all);
  }
}
export { CreateSpecificationController };
