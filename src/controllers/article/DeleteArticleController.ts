import { Request, Response } from "express";
import { DeleteArticleService } from "../../services/article/DeleteArticleService";

export class DeleteArticleController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;

    const deleteArticleService = new DeleteArticleService();
    await deleteArticleService.execute(Number(id));

    return res.send();
  }
}
