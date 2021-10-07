import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { ArticleRepository } from "../../repositories/ArticleRepository";

export class FindArticleByIDService {
  async execute(id: number) {
    const articleRepository = getCustomRepository(ArticleRepository);

    const article = await articleRepository.findOne({
      where: {
        id
      },
      relations: ['user', 'category', 'tags']
    });

    return classToPlain(article);
  }
}
