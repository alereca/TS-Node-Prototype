import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Post } from "../feed/post.model";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  status: string;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  static Create(params: User): User {
    const user = new User();
    user.id = params.id;
    user.name = params.name;
    user.email = params.email;
    user.password = params.password;
    user.status = params.status;

    return user;
  }
}
