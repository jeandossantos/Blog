import { Request, Response } from "express";
import { ListArticlesByTagService } from "../../services/article/ListArticlesByTagService";

export class ListArticlesByTagController {
  async handle(req: Request, res: Response) {
    const tagId = req.params.id;

    const listArticlesByTagService = new ListArticlesByTagService();
    const articles = await listArticlesByTagService.execute(Number(tagId));

    return res.json(articles);
  }
}
