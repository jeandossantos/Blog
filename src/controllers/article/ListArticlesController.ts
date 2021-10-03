import { Request, Response } from "express";
import { ListArticlesService } from "../../services/article/ListArticlesService";

export class ListArticlesController {
  async handle(req: Request, res: Response) {
    const listArticlesService = new ListArticlesService();
    const articles = await listArticlesService.execute();

    return res.json(articles);
  }
}
