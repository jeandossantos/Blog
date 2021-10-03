import { Request, Response } from "express";
import { DeleteTagService } from "../../services/tag/DeleteTagService";

export class DeleteTagController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;

    const deleteTagService = new DeleteTagService();
    await deleteTagService.execute(Number(id));

    return res.status(201).send();
  }
}
