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

      delete article.user.email;
      delete article.user.password;
      delete article.user.admin;
      delete article.user.createdAt;
      delete article.user_id;
      delete article.category_id;

    return article;
  }
}
