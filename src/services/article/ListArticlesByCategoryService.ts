import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { ArticleRepository } from "../../repositories/ArticleRepository";

export class ListArticlesByCategoryService {
  async execute(categoryId: number) {
    const articlerepository = getCustomRepository(ArticleRepository);
    const articles = await articlerepository.find({
      where: {
        category_id: categoryId
      },
      relations: ['user', 'tags']
     });

     return classToPlain(articles);
  }
}
