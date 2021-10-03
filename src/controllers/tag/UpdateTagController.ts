import { Request, Response } from "express";
import { UpdateTagService } from "../../services/tag/UpdateTagService";

export class UpdateTagController {

  async handle(req: Request, res: Response) {
    const id = req.params.id;

    const { name } = req.body;

    const updateTagService = new UpdateTagService();

    await updateTagService.execute(Number(id), name);

    return res.status(201).send();
  }
}
