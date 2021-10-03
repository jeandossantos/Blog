import { getCustomRepository } from "typeorm";
import { CategoryRepository } from "../../repositories/CategoryRepository";
import { existsOrError } from "../../utils/validation";

export class UpdateCategoryService {

  async execute(id: number, name: string) {
    const categoryRepository = getCustomRepository(CategoryRepository);

    existsOrError(name, 'Nome da categoria obrigatório.');

    const tag = await categoryRepository.findOne({ id });

    existsOrError(tag, 'Categoria não encontrada.');

    tag.name = name.trim().toLowerCase();

    await categoryRepository.save(tag);
  }
}
