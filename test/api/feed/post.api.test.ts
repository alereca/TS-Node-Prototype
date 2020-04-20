import app from "../../../src/server";
import request from "supertest";
import { getConnection } from "typeorm";
import { getPostCreateDtoMock } from "../../mocks/feed/post.create.dto.mock";
import { createDb } from "../../database/startup/startup.test.db";

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
        expect(res.body.post).toHaveProperty("user");
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
