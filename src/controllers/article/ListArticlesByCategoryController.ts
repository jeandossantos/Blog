import { Request, Response } from "express";
import { ListArticlesByCategoryService } from "../../services/article/ListArticlesByCategoryService";

export class ListArticlesCategoryController {
  async handle(req: Request, res: Response) {
    const category_id = req.params.id;

    const listArticlesByCategoryController = new ListArticlesByCategoryService();
    const articles = await listArticlesByCategoryController.execute(Number(category_id));

    return res.json(articles);
  }
}
