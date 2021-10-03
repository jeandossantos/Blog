import { Request, Response } from "express";
import { UpdateCategoryService } from "../../services/category/UpdateCategoryService";

export class UpdateCategoryController {

  async handle(req: Request, res: Response) {
    const id = req.params.id;

    const { name } = req.body;

    const updateCategoryService = new UpdateCategoryService();

    await updateCategoryService.execute(Number(id), name);

    return res.status(201).send();
  }
}
