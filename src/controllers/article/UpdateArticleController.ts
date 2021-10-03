import { Request, Response } from "express";
import { UpdateArticleService } from "../../services/article/UpdateArticleService";

export class UpdateArticleController {
  async handle(req: Request, res: Response) {
    const { name, imageUrl, category_id, user_id, content, tags } = req.body;
    const id = req.params.id;
    const updateArticleService = new UpdateArticleService();

    await updateArticleService.execute({
      id: Number(id),
      name,
      imageUrl,
      category_id,
      user_id,
      content,
      tags
    });

    return res.status(201).send();
  }
}
