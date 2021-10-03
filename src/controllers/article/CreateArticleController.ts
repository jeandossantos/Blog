import { Request, Response } from "express";
import { CreateArticleService } from "../../services/article/CreateArticleService";

export class CreateArticleController {
  async handle(req: Request, res: Response) {
    const { name, imageUrl, category_id, user_id, content, tags } = req.body;
    const createArticleService = new CreateArticleService();

    await createArticleService.execute({
      name,
      imageUrl,
      category_id,
      user_id,
      content,
      tags
    });

    return res.send();
  }
}
