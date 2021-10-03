import { getCustomRepository } from "typeorm";
import { CategoryRepository } from "../../repositories/CategoryRepository";
import { existsOrError } from "../../utils/validation";

export class CreateCategoryService {

  async execute(name: string) {
    const categoryRepository = getCustomRepository(CategoryRepository);

    existsOrError(name, 'O Nome da Categoria é Obrigatório');

    const category = categoryRepository.create({ name });

    await categoryRepository.save(category);
  }
}
