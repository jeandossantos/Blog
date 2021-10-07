import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { ArticleRepository } from "../../repositories/ArticleRepository";

export class ListArticlesService {
  async execute() {
    const articleRepository = getCustomRepository(ArticleRepository);

    const articles = await articleRepository.find({
      relations: ['user', 'category', 'tags']
    });

    return classToPlain(articles);
  }
}
