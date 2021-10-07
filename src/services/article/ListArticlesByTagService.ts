import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { ArticleRepository } from "../../repositories/ArticleRepository";
import { TagRepository } from "../../repositories/TagRepository";

export class ListArticlesByTagService {
  async execute(tagId: number) {
    const tagRepository = getCustomRepository(TagRepository);
    const articleRepository = getCustomRepository(ArticleRepository);

    const tagWithArticles = await tagRepository.findOne({
      where: { id: tagId },
      relations: ['articles'],
    });

    const articlesID = tagWithArticles.articles.filter(a => a.id);

    const articles = await articleRepository.findByIds(articlesID, {
      relations: ['user', 'category', 'tags']
    });

    return classToPlain(articles);

  }
}
