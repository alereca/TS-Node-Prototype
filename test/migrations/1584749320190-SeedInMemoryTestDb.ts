import { MigrationInterface, QueryRunner, getRepository } from "typeorm";
import { Post } from "../../src/entities/Post"

export class SeedInMemoryTestDb1584749320190 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const postRepository = getRepository(Post);

    const posts = new Array<Post>(
      postRepository.create({
        title: "one",
        imageUrl: "one.jpg",
        content: "one content"
      }),
      postRepository.create({
        title: "two",
        imageUrl: "two.jpg",
        content: "two content"
      }),
      postRepository.create({
        title: "three",
        imageUrl: "three.jpg",
        content: "three content"
      })
    );

    await postRepository.save(posts);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const postRepository = getRepository(Post);

    const posts = new Array<Post>(
      postRepository.create({
        title: "one",
        imageUrl: "one.jpg",
        content: "one content"
      }),
      postRepository.create({
        title: "two",
        imageUrl: "two.jpg",
        content: "two content"
      }),
      postRepository.create({
        title: "three",
        imageUrl: "three.jpg",
        content: "three content"
      })
    );

    await postRepository.remove(posts);
  }
}
