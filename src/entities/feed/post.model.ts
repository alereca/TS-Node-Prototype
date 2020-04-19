import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  imageUrl: string;

  @Column()
  content: string;

  static Create(params: Post): Post {
    const post = new Post();
    post.id = params.id;
    post.title = params.title;
    post.imageUrl = params.imageUrl;
    post.content = params.content;

    return post;
  }
}
