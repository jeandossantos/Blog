import { getCustomRepository } from "typeorm";
import { ArticleRepository } from "../../repositories/ArticleRepository";

export class ListArticlesService {
  async execute() {
    const articleRepository = getCustomRepository(ArticleRepository);

    const articles = await articleRepository.find({
      relations: ['user', 'category', 'tags']
    });

    articles.forEach(a => {
      delete a.user.email;
      delete a.user.password;
      delete a.user.admin;
      delete a.user.createdAt;
      delete a.user_id;
      delete a.category_id;
    });

    return articles;
  }
}
