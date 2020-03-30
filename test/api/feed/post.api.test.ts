import app from "../../../src/server";
import request from "supertest";
import { createConnection, getConnection } from "typeorm";
import { Post } from "../../../src/entities/feed/post.model";
import { PostCreateDto } from "../../../src/entities/feed/post.create.dto";

const createDb = () =>
  createConnection({
    type: "sqlite",
    database: ":memory:",
    dropSchema: true,
    entities: [Post],
    synchronize: true,
    logging: true,
    migrations: ["test/migrations/**/*.ts"]
  });

beforeEach(async () => {
  const connection = await createDb();
  await connection.runMigrations();
});

describe("Get posts", () => {
  it("should get every posts in db", async () => {
    const res = await request(app).get("/feed/posts");

    expect(res.status).toEqual(200);
    expect(res.body).toHaveLength(3);
  });
});

describe("Create post", () => {
  it("should save the resource and return a successful message including the saved objects", async () => {
    const res = await request(app)
      .post("/feed/post")
      .send(
        new PostCreateDto({
          title: "four",
          imageUrl: "four.jpg",
          content: "four content"
        })
      );

    expect(res.status).toEqual(201);
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toEqual("resource created");
    expect(res.body).toHaveProperty("post");
    expect(
      getConnection()
        .getRepository(Post)
        .findByIds(res.body.post.id)
    ).toBeDefined();
  });
});

afterEach(() => {
  return getConnection().close();
});
