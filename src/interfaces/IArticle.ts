import { Tag } from "../entities/Tag";

export interface IArticle {
  id?: number;
  user_id?: number;
  category_id?: number;
  tags?: Tag[];
  name?: string;
  imageUrl?: string;
  content?: string;
}
