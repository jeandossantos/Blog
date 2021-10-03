import { getCustomRepository } from "typeorm";
import { TagRepository } from "../../repositories/TagRepository";

export class ListTagsService {

  async execute() {
    const tagsRepository = getCustomRepository(TagRepository);

    const tags = await tagsRepository.find();

    return tags;
  }
}
