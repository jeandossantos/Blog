import { getCustomRepository } from "typeorm";
import { CategoryRepository } from "../../repositories/CategoryRepository";

export class ListCategoriesService {

  async execute() {
    const categoryRepository = getCustomRepository(CategoryRepository);

    const categories = await categoryRepository.find();

    return categories;
  }
}
