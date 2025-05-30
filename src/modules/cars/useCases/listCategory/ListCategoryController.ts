import {Response,Request} from "express";
import { ListCategoryUseCase } from "./ListCategoryUseCase";


class ListCategoryController {

    constructor(private listCategoryUseCase: ListCategoryUseCase) {
        // You can initialize any dependencies here, such as services or repositories
    }

     handle(request: Request, response: Response): Response{


         const all =  this.listCategoryUseCase.execute();
        // Here you would typically call a service to handle the creation logic
        // For example:
        // const createCategoryUseCase = new CreateCategoryUseCase();
        // createCategoryUseCase.execute({ name, description });

        return response.status(201).json(all);
    }
    }
export { ListCategoryController };
