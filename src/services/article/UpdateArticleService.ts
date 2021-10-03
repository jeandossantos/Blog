import { getCustomRepository } from "typeorm";
import { IArticle } from "../../interfaces/IArticle";
import { ArticleRepository } from "../../repositories/ArticleRepository";

export class UpdateArticleService {
  async execute({ id, name, content, imageUrl, category_id, user_id, tags } : IArticle) {
    const articleRepository = getCustomRepository(ArticleRepository);

    const article =  articleRepository.create({
      id,
      name,
      content,
      imageUrl,
      category_id,
      user_id,
      tags
    });

    await articleRepository.save(article);
  }
}
