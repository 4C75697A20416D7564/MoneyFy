import { Request, Response } from 'express';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

class ImportCategoryController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) {}

  handle(req: Request, res: Response): Response {
    const { file } = req;
    this.importCategoryUseCase.execute(file);

    if (!file) {
      return res.status(400).json({ error: 'Arquivo Não enviado' });
    }
    // Assuming we have a service to handle the import logic
    // importCategoryService.execute(file);

    return res.status(201).json({ message: 'Arquivo Importado com Sucesso' });
  }
}
export { ImportCategoryController };
