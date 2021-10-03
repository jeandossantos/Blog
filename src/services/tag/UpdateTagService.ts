import { getCustomRepository } from "typeorm";
import { TagRepository } from "../../repositories/TagRepository";
import { existsOrError } from "../../utils/validation";

export class UpdateTagService {

  async execute(id: number, name: string) {
    const tagRepository = getCustomRepository(TagRepository);

    existsOrError(name, 'Nome da tag obrigatório.');

    const tag = await tagRepository.findOne({ id });

    existsOrError(tag, 'Tag não encontrada.');

    tag.name = name.trim().toLowerCase();

    await tagRepository.save(tag);
  }
}
