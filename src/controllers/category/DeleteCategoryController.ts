import { Request, Response } from "express";
import { DeleteCategoryService } from "../../services/category/DeleteCategoryService";

export class DeleteCategoryController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;

    const deleteCategoryService = new DeleteCategoryService();
    await deleteCategoryService.execute(Number(id));

    return res.status(201).send();
  }
}
