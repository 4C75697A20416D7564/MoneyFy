import { ListCategoryController } from "./ListCategoryController";
import {  ListCategoryUseCase } from "./ListCategoryUseCase";
import { CategoriesRepository } from "../../repositories/CategoriesRepository";

const categoriesRepository =  CategoriesRepository.getInstance();

const listCategoryUseCase = new ListCategoryUseCase(categoriesRepository);

const listCategoryController = new ListCategoryController(
  listCategoryUseCase,
);

export { listCategoryController };
