import {
  MigrationInterface,
  QueryRunner,
  getRepository,
  getConnection,
} from "typeorm";
import { Post } from "../entities/feed/post.model";
import { User } from "../entities/user/user.model";

export class SeedDb1584749320190 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const postRepository = getRepository(Post);
    const userRepository = getRepository(User);

    const users = new Array<User>(
      userRepository.create({
        name: "someone",
        email: "someone@example.com",
        password: "dsa45a4d6868$#f53!4",
        status: "available",
      }),
      userRepository.create({
        name: "else",
        email: "else@example.com",
        password: "jas%4#4%54#%4#3&#3%GF1D",
        status: "unavailable",
      }),
    );

    await userRepository.save(users);

    const posts = new Array<Post>(
      postRepository.create({
        title: "one",
        imageUrl: "one.jpg",
        content: "one content",
        user: users[0],
      }),
      postRepository.create({
        title: "two",
        imageUrl: "two.jpg",
        content: "two content",
        user: users[0],
      }),
      postRepository.create({
        title: "three",
        imageUrl: "three.jpg",
        content: "three content",
        user: users[1],
      }),
    );

    await postRepository.save(posts);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    // TO-DO
  }
}
