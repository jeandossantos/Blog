import { Request, Response } from "express";
import { FindArticleByIDService } from "../../services/article/FindArticleByIDService";

export class FindArticleByIDController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;
    const findArticleByIDService = new FindArticleByIDService();
    const article = await findArticleByIDService.execute(Number(id));

    return res.json(article);
  }
}
