import { getCustomRepository } from "typeorm";
import { IArticle } from "../../interfaces/IArticle";
import { ArticleRepository } from "../../repositories/ArticleRepository";

export class CreateArticleService {
  async execute({ name, category_id, imageUrl, user_id, content, tags } : IArticle) {
    const articleRepository = getCustomRepository(ArticleRepository);

    const article = articleRepository.create({
      name,
      imageUrl,
      user_id,
      category_id,
      content,
      tags,
    });

    await articleRepository.save(article);
  }

}
