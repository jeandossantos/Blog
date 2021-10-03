import { getCustomRepository } from "typeorm";
import { CustomException } from "../../exceptions/CustomExecption";
import { IUser } from "../../interfaces/IUser";
import { UserRepository } from "../../repositories/UserRepository";
import { encryptPassword } from "../../utils/encryptPassword";
import { equalsOrError } from "../../utils/validation";

export class CreateUserService {

  async execute({ name, email,password, confirmPassword, admin = false } : IUser) {
    const userRepository = getCustomRepository(UserRepository);

    equalsOrError(password, confirmPassword, 'Senha não combinam');

    const hashPassword = encryptPassword(password, 10);

    const userDB = await userRepository.findOne({ email });

      if(userDB) throw new CustomException('E-mail já existe.');

    const user = userRepository.create({
      name,
      email,
      password: hashPassword,
      admin
    });

    await userRepository.save(user);
  }
}
