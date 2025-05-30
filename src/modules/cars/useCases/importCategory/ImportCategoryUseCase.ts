class ImportCategoryUseCase {
  async execute(file: Express.Multer.File): Promise<void> {
    // Logic to import categories from the file
    console.log(`Categorias Importadas: ${file.originalname}`);
    console.log(file);
    // Here you would typically parse the file and save the categories to the database
  }
}
export { ImportCategoryUseCase };
