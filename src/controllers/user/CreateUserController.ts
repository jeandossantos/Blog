import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

export class CreateUserController {

  async handle(req: Request, res: Response) {
    const { name, email, password, confirmPassword, admin } = req.body;

    const createUserService = new CreateUserService();
    await createUserService.execute({ name, email, password, confirmPassword, admin });

    return res.send();
  }
}
