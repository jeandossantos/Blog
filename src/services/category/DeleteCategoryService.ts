import { getCustomRepository } from "typeorm";
import { CategoryRepository } from "../../repositories/CategoryRepository";

export class DeleteCategoryService {
  async execute(id: number) {
    const categoryRepository = getCustomRepository(CategoryRepository);
    const category = await categoryRepository.findOne({ id });

    if(!category) return;

    await categoryRepository.delete({ id });
  }
}
