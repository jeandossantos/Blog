import { Request, Response } from "express";
import { CreateTagService } from "../../services/tag/CreateTagService";

export class CreateTagController {

  async handle(req: Request, res: Response) {
    const { name } = req.body;

    const createTagService = new CreateTagService();

    await createTagService.execute(name);

    return res.status(201).send();
  }
}