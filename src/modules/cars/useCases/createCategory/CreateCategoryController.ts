import {Response,Request} from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";


class CreateCategoryController {

    constructor(private createCategoryUseCase: CreateCategoryUseCase) {
        // You can initialize any dependencies here, such as services or repositories
    }

     handle(request: Request, response: Response): Response {
        const { name, description } = request.body;

         const all =  this.createCategoryUseCase.execute({
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
export { CreateCategoryController };
