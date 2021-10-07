import { Exclude } from "class-transformer";
import { Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn } from "typeorm";

import { Category } from "./Category";
import { Tag } from "./Tag";
import { User } from "./User";

@Entity('articles')
export class Article {

 @PrimaryGeneratedColumn()
 id:number;

 @Exclude()
 @Column()
 user_id: number;

 @JoinColumn({ name: 'user_id' })
 @ManyToOne(() => User)
 user: User;

 @Exclude()
 @Column()
 category_id: number;

 @JoinColumn({ name: 'category_id' })
 @ManyToOne(() => Category)
 category: Category;

 @ManyToMany(() => Tag, tag => tag.articles, {
 })
 @JoinTable({ name: 'tags_article' })
 tags:Tag[];

 @Column()
 name: string;

 @Column({ name: 'image_url' })
 imageUrl: string;

 @Column()
 content: string;

 @CreateDateColumn({ name: 'created_at'})
 createdAt: Date;

 @UpdateDateColumn({ name: 'updated_at' })
 updatedAt: Date;
}
