import { getCustomRepository } from "typeorm";
import { TagRepository } from "../../repositories/TagRepository";
import { existsOrError, notExistsOrError } from "../../utils/validation";

export class CreateTagService {

  async execute(name: string) {
    const tagRepository = getCustomRepository(TagRepository);

    existsOrError(name, 'Nome da tag obrigario.');

    const tagFromDB = await tagRepository.findOne({ name: name.toLowerCase().trim() });

    notExistsOrError(tagFromDB, 'Tag já cadastrada.');

    const tag = tagRepository.create({ name: name.toLowerCase().trim() });

    await tagRepository.save(tag);
  }
}
