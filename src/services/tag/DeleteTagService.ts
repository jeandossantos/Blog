import { getCustomRepository } from "typeorm";
import { TagRepository } from "../../repositories/TagRepository";

export class DeleteTagService {
  async execute(id: number) {
    const tagRepository = getCustomRepository(TagRepository);
    const tag = await tagRepository.findOne({ id });

    if(!tag) return;

    await tagRepository.delete({ id });
  }
}
