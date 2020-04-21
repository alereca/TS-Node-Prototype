import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne } from "typeorm";
import { User } from "../user/user.model";

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

  @ManyToOne(() => User, (user) => user.posts)
  user: User;

  static Create(params: Post): Post {
    const post = new Post();
    post.id = params.id;
    post.title = params.title;
    post.imageUrl = params.imageUrl;
    post.content = params.content;
    post.user = params.user;

    return post;
  }
}
