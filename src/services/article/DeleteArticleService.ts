import { getCustomRepository } from "typeorm";
import { ArticleRepository } from "../../repositories/ArticleRepository";

export class DeleteArticleService {
  async execute(id: number) {
    const articleRepository = getCustomRepository(ArticleRepository);

    const article = await articleRepository.findOne({ id });

    if(!article) return;

    articleRepository.remove(article);

  }
}
