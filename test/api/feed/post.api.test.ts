import app from "../../../src/server";
import request from "supertest";
import { createConnection, getConnection } from "typeorm";
import { Post } from "../../../src/entities/feed/post.model";
import { PostCreateDto } from "../../../src/entities/feed/post.create.dto";
import { PostShowDto } from "../../../src/entities/feed/post.show.dto";
import { User } from "../../../src/entities/user/user.model";
import { getPostCreateDtoMock } from "../../mocks/feed/post.create.dto.mock";

const createDb = () =>
  createConnection({
    type: "sqlite",
    database: ":memory:",
    dropSchema: true,
    entities: [Post, User],
    synchronize: true,
    logging: false,
    migrations: ["test/migrations/**/*.ts"],
  });

beforeEach(async () => {
  const connection = await createDb();
  await connection.runMigrations();
});

describe("Get posts", () => {
  it("should get every posts in db", async () => {
    await request(app)
      .get("/feed/posts")
      .then((res) => {
        expect(res.status).toEqual(200);
        expect(res.body).toHaveLength(3);
      });
  });
});

describe("Create post", () => {
  it("should save the resource and return a successful message including the saved objects", async () => {
    await request(app)
      .post("/feed/post")
      .send(getPostCreateDtoMock())
      .then((res) => {
        expect(res.status).toEqual(201);
        expect(res.body).toHaveProperty("message");
        expect(res.body.message).toEqual("resource created");
        expect(res.body).toHaveProperty("post");
      });
  });

  it("should return a validation error if some input in the request body is invalid", async () => {
    await request(app)
      .post("/feed/post")
      .send(
        getPostCreateDtoMock({
          title: "fo",
          content: "four                   ",
          imageUrl: "<s></s>",
        }),
      )
      .then((res) => {
        expect(res.status).toEqual(430);
        expect(res.body.status).toEqual("failed");
        expect(res.body.error).toHaveProperty("original");
        expect(res.body.error.details).toHaveLength(2);
      });
  });
});

afterEach(() => {
  return getConnection().close();
});
